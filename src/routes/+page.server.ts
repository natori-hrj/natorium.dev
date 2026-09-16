import type { PageServerLoad } from './$types';

// SvelteKit only exposes specific names such as load from +page.server.ts,
// so keep these constants private to this module.
const GITHUB_USERNAME = 'natori-hrj';

// No authentication token is needed. The public API returns daily contribution levels (0-4).
const CONTRIBUTIONS_API = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;

// The project featured on the home page. Copy is fixed here; only the star count is fetched from GitHub.
const FEATURED_REPO = {
	owner: GITHUB_USERNAME,
	name: 'herdr-lazy',
	url: `https://github.com/${GITHUB_USERNAME}/herdr-lazy`,
	description:
		'A declarative plugin manager for herdr. Pin your setup with a single list and lockfile, then manage it from a dedicated TUI pane.',
	language: 'Rust',
	topics: ['CLI', 'TUI', 'plugin-manager', 'lockfile']
};

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

const fetchStars = async (fetchFn: typeof fetch) => {
	try {
		const res = await fetchFn(
			`https://api.github.com/repos/${FEATURED_REPO.owner}/${FEATURED_REPO.name}`,
			{ headers: { accept: 'application/vnd.github+json' }, signal: AbortSignal.timeout(6000) }
		);
		if (!res.ok) throw new Error(`GitHub API returned ${res.status} ${res.statusText}`);

		const data = (await res.json()) as { stargazers_count: number };
		return data.stargazers_count;
	} catch (error) {
		// Unauthenticated requests can hit the rate limit; hide only the star count in that case.
		console.error('[featured] Failed to fetch the featured repository stars:', error);
		return null;
	}
};

export const load: PageServerLoad = async ({ fetch, setHeaders }) => {
	const [contributions, stars] = await Promise.all([fetchContributions(fetch), fetchStars(fetch)]);

	// Both values change at most hourly, so cache them at the CDN for one hour.
	setHeaders({ 'cache-control': 'public, max-age=0, s-maxage=3600' });

	return {
		username: GITHUB_USERNAME,
		contributions,
		featured: { ...FEATURED_REPO, stars }
	};
};
