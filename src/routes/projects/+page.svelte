<script lang="ts">
  import { ExternalLink, Github } from 'lucide-svelte';

  const projects = [
    {
      title: "TiDB へのOSSコントリビュート",
      description: "Go製の分散SQLデータベース TiDB（PingCAP）へ、オプティマイザのヒント警告に関するバグ修正PRを提出しマージ達成。good first issueから2 LGTM・CI全通過を経て完走した、初のOSSコントリビュートです。",
      technologies: ["Go"],
      github: "https://github.com/pingcap/tidb/pull/68697",
      demo: null,
      featured: true
    },
    {
      title: "日次収支速報 BFF",
      description: "経営ダッシュボードへ日次の営業利益（収支速報）を提供するBFF（Backend For Frontend）。要件定義・API設計から実装まで担当し、OpenAPI契約・レスポンス整形・認証認可・テストを設計。データ源をBlobからBigQueryへ差し替える構成で進めています。",
      technologies: ["TypeScript", "Hono", "OpenAPI (zod)", "Drizzle ORM", "vitest", "BigQuery"],
      github: null,
      demo: null,
      featured: true
    },
    {
      title: "EC荷物可視化システムの内製移行",
      description: "年間約50億件（日次約1,370万件）の荷物データを約10分間隔でニアリアルタイム処理するパイプラインを主担当。ブラックボックス化していた既存システムをコードから解読・文書化して再構築し、差分処理＋荷物ID単位の重複排除で冪等化しました。",
      technologies: ["Azure Data Factory", "Delta Lake", "PySpark", "PowerBI", "Next.js"],
      github: null,
      demo: null,
      featured: true
    },
    {
      title: "経営情報SSOT（Single Source of Truth）",
      description: "全社の経営情報を統合し、全国の営業所長クラスまでが同じ情報を参照できる基盤を開発。認証認可・権限管理を担当し、多層認可や動的アクセス制御を設計。現在はPowerBI画面のWebアプリ移行（Apache ECharts採用）と、Azure→Google Cloud移行を推進中。",
      technologies: ["Next.js", "TypeScript", "tRPC", "Auth.js", "Prisma", "Apache ECharts", "BigQuery"],
      github: null,
      demo: null,
      featured: true
    },
    {
      title: "GraphRAG 調査・実証",
      description: "AI推進チームにて、実案件をもとにGraphRAGの必要性を定量的に検証。「GraphRAGありき」ではなく通常のRAGをベースラインに、精度・コスト・レイテンシで比較して判断する方針で取り組んでいます。基盤はGoogle Cloudで構築。",
      technologies: ["Python", "LLM", "GraphRAG / RAG", "Google Cloud"],
      github: null,
      demo: null,
      featured: false
    },
    {
      title: "個人サイト (このサイト)",
      description: "SvelteKitとTailwind CSSを使用して構築した個人ブログサイトです。Markdownでブログ記事を管理できます。",
      technologies: ["SvelteKit", "TypeScript", "Tailwind CSS", "mdsvex"],
      github: "https://github.com/natori-hrj/natorium.dev",
      demo: null,
      featured: false
    },
    {
      title: "iss-tracker-cli",
      description: "ISSの現在位置をリアルタイムでターミナルに表示するCLIツール。ASCIIアートで地球を描き、乗組員情報や自分の現在地からの距離も表示。",
      technologies: ["Go"],
      github: "https://github.com/natori-hrj/iss-tracker-cli",
      demo: null,
      featured: false
    },
    {
      title: "nasa-apod-cli",
      description: "NASAの「Astronomy Picture of the Day」をターミナルから閲覧できるCLIツール。ASCIIアートで画像表示、日本語翻訳、ランダム取得に対応。",
      technologies: ["Go"],
      github: "https://github.com/natori-hrj/nasa-apod-cli",
      demo: null,
      featured: false
    },
    {
      title: "spotify-now-playing-cli",
      description: "Spotifyで再生中の曲をターミナルに表示するCLIツール。進捗バーや再生履歴表示に対応。",
      technologies: ["Go"],
      github: "https://github.com/natori-hrj/spotify-now-playing-cli",
      demo: null,
      featured: false
    },
    {
      title: "debt-checker",
      description: "Pythonコードの技術的負債を検出・可視化するCLIツール。100点満点のスコアで健全性を評価。",
      technologies: ["Python"],
      github: "https://github.com/natori-hrj/debt-checker",
      demo: null,
      featured: false
    },
    {
      title: "readme-score",
      description: "README.mdの品質を100点満点でスコアリングするCLIツール。ローカルファイルとGitHub URLの両方に対応。",
      technologies: ["Python"],
      github: "https://github.com/natori-hrj/readme-score",
      demo: null,
      featured: false
    },
    {
      title: "nvim-databricks",
      description: "NeovimでPythonファイルをDatabricksの任意のクラスターで実行できるプラグイン。",
      technologies: ["Lua"],
      github: "https://github.com/natori-hrj/nvim-databricks",
      demo: null,
      featured: false
    },
    {
      title: "Dogger Log（開発中）",
      description: "愛犬の健康管理・成長記録・お出かけ記録Webアプリ。",
      technologies: ["Go", "Next.js", "PostgreSQL", "GCP"],
      github: "https://github.com/natori-hrj/dogger-log",
      demo: null,
      featured: false
    }
  ];
</script>

<svelte:head>
  <title>Projects - natori's Site</title>
  <meta name="description" content="プロジェクトと成果物の紹介" />
</svelte:head>

<div class="max-w-4xl">
  <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Projects</h1>
  <p class="text-gray-600 dark:text-gray-400 mb-12">
    これまでに取り組んだプロジェクトや成果物です。
  </p>

  <div class="space-y-8">
    {#each projects as project}
      <article class="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
        <div class="flex items-start justify-between mb-3">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h2>
          {#if project.featured}
            <span class="text-xs px-2 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-semibold">
              Featured
            </span>
          {/if}
        </div>

        <p class="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <div class="flex flex-wrap gap-2 mb-4">
          {#each project.technologies as tech}
            <span class="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              {tech}
            </span>
          {/each}
        </div>

        {#if project.github || project.demo}
          <div class="flex gap-4">
            {#if project.github}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-blue-500 dark:text-blue-400 hover:underline"
              >
                <Github size={16} />
                GitHub
              </a>
            {/if}
            {#if project.demo}
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-blue-500 dark:text-blue-400 hover:underline"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            {/if}
          </div>
        {/if}
      </article>
    {/each}
  </div>

</div>
