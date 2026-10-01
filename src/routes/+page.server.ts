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

const fetchContributions = async (fetchFn: typeof fetch) => {
	try {
		const res = await fetchFn(CONTRIBUTIONS_API, { signal: AbortSignal.timeout(6000) });
		if (!res.ok) throw new Error(`contributions API returned ${res.status} ${res.statusText}`);

		const data = (await res.json()) as {
			total: { lastYear: number };
			contributions: ContributionDay[];
		};
		return { total: data.total.lastYear, days: data.contributions };
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
