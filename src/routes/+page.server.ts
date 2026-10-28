import type { PageServerLoad } from './$types';

// SvelteKit only exposes specific names such as load from +page.server.ts,
// so keep these constants private to this module.
const GITHUB_USERNAME = 'natori-hrj';

// No authentication token is needed. The public API returns daily contribution levels (0-4).
const CONTRIBUTIONS_API = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;

type ContributionDay = {
	date: string;
	count: number;
	level: number;
};

type Contributions = {
	total: number;
	days: ContributionDay[];
};

const MAX_CONTRIBUTION_DAYS = 371;
const MAX_CONTRIBUTIONS_RESPONSE_BYTES = 128 * 1024;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

const readLimitedJson = async (response: Response): Promise<unknown> => {
	const contentLength = Number(response.headers.get('content-length'));
	if (Number.isFinite(contentLength) && contentLength > MAX_CONTRIBUTIONS_RESPONSE_BYTES) {
		await response.body?.cancel();
		throw new Error('contributions API response exceeded the size limit');
	}

	if (!response.body) throw new Error('contributions API returned an empty response');

	const reader = response.body.getReader();
	const decoder = new TextDecoder();
	let receivedBytes = 0;
	let json = '';

	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;

			receivedBytes += value.byteLength;
			if (receivedBytes > MAX_CONTRIBUTIONS_RESPONSE_BYTES) {
				await reader.cancel();
				throw new Error('contributions API response exceeded the size limit');
			}

			json += decoder.decode(value, { stream: true });
		}

		json += decoder.decode();
	} finally {
		reader.releaseLock();
	}

	return JSON.parse(json);
};

const isContributionDay = (value: unknown): value is ContributionDay => {
	if (!value || typeof value !== 'object') return false;

	const day = value as Record<string, unknown>;
	return (
		typeof day.date === 'string' &&
		ISO_DATE.test(day.date) &&
		Number.isSafeInteger(day.count) &&
		(day.count as number) >= 0 &&
		Number.isInteger(day.level) &&
		(day.level as number) >= 0 &&
		(day.level as number) <= 4
	);
};

const parseContributions = (value: unknown): Contributions | null => {
	if (!value || typeof value !== 'object') return null;

	const data = value as Record<string, unknown>;
	const total =
		data.total && typeof data.total === 'object'
			? (data.total as Record<string, unknown>).lastYear
			: undefined;

	if (
		!Number.isSafeInteger(total) ||
		(total as number) < 0 ||
		!Array.isArray(data.contributions) ||
		data.contributions.length > MAX_CONTRIBUTION_DAYS ||
		!data.contributions.every(isContributionDay)
	) {
		return null;
	}

	return { total: total as number, days: data.contributions };
};

const fetchContributions = async (fetchFn: typeof fetch) => {
	try {
		const res = await fetchFn(CONTRIBUTIONS_API, { signal: AbortSignal.timeout(6000) });
		if (!res.ok) throw new Error(`contributions API returned ${res.status} ${res.statusText}`);

		const contributions = parseContributions(await readLimitedJson(res));
		if (!contributions) throw new Error('contributions API returned an invalid response');

		return contributions;
	} catch (error) {
		// Keep the home page available even if the request fails; the UI hides the graph when null.
		console.error('[contributions] Failed to fetch GitHub contributions:', error);
		return null;
	}
};

export const load: PageServerLoad = async ({ fetch, setHeaders }) => {
	const contributions = await fetchContributions(fetch);

	// Both values change at most hourly, so cache them at the CDN for one hour.
	setHeaders({ 'cache-control': 'public, max-age=0, s-maxage=3600' });

	return {
		username: GITHUB_USERNAME,
		contributions
	};
};
