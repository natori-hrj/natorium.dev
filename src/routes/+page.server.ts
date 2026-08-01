import type { PageServerLoad } from './$types';

// +page.server.ts が外部に公開できるのは load などの決まった名前だけなので、
// この定数はエクスポートせずファイル内に閉じる。
const GITHUB_USERNAME = 'natori-hrj';

// 公開APIのため認証トークン不要。GitHubの草データを日単位(level 0-4)で返す。
const CONTRIBUTIONS_API = `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`;

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

export const load: PageServerLoad = async ({ fetch, setHeaders }) => {
  try {
    const res = await fetch(CONTRIBUTIONS_API, { signal: AbortSignal.timeout(6000) });

    if (!res.ok) {
      throw new Error(`contributions API returned ${res.status} ${res.statusText}`);
    }

    const data = (await res.json()) as {
      total: { lastYear: number };
      contributions: ContributionDay[];
    };

    // 草は1日単位でしか変わらないので、CDN側で1時間キャッシュして呼び出しを抑える。
    setHeaders({ 'cache-control': 'public, max-age=0, s-maxage=3600' });

    return {
      username: GITHUB_USERNAME,
      contributions: {
        total: data.total.lastYear,
        days: data.contributions
      }
    };
  } catch (error) {
    // 取得に失敗してもトップページ自体は表示したいので、null にして描画側で非表示にする。
    console.error('[contributions] GitHubの草の取得に失敗しました:', error);
    return { username: GITHUB_USERNAME, contributions: null };
  }
};
