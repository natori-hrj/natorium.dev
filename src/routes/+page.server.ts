import type { PageServerLoad } from './$types';

// +page.server.ts が外部に公開できるのは load などの決まった名前だけなので、
// これらの定数はエクスポートせずファイル内に閉じる。
const GITHUB_USERNAME = 'natori-hrj';

// 公開APIのため認証トークン不要。GitHubの草データを日単位(level 0-4)で返す。
const CONTRIBUTIONS_API = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;

// トップで推すプロジェクト。文言はここで固定し、スター数だけGitHubから取る。
const FEATURED_REPO = {
	owner: GITHUB_USERNAME,
	name: 'herdr-lazy',
	url: `https://github.com/${GITHUB_USERNAME}/herdr-lazy`,
	description:
		'herdr のプラグインを宣言的に管理するプラグインマネージャ。ひとつのリストとロックファイルで構成を固定し、管理用のTUIペインから操作できます。',
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
		// 取得に失敗してもトップページ自体は表示したいので、null にして描画側で非表示にする。
		console.error('[contributions] GitHubの草の取得に失敗しました:', error);
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
		// 未認証だとレート制限に当たることがある。その場合はスター数だけ出さない。
		console.error('[featured] スター数の取得に失敗しました:', error);
		return null;
	}
};

export const load: PageServerLoad = async ({ fetch, setHeaders }) => {
	const [contributions, stars] = await Promise.all([fetchContributions(fetch), fetchStars(fetch)]);

	// どちらも1日〜数時間単位でしか変わらないので、CDN側で1時間キャッシュして呼び出しを抑える。
	setHeaders({ 'cache-control': 'public, max-age=0, s-maxage=3600' });

	return {
		username: GITHUB_USERNAME,
		contributions,
		featured: { ...FEATURED_REPO, stars }
	};
};
