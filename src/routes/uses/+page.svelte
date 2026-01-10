<script lang="ts">
  const uses = [
    {
      category: "エディタ・IDE",
      items: [
        {
          name: "Vim / Neovim",
          description: "メインエディタ。軽量"
        },
        {
          name: "Visual Studio Code",
          description: "csvやparquetなどのファイル確認によく使う"
        }
      ]
    },
    {
      category: "ターミナル",
      items: [
        {
          name: "WezTerm",
          description: "Rust製の高速なターミナルエミュレータ。"
        },
      ]
    },
    {
      category: "開発ツール",
      items: [
        {
          name: "Docker Desktop",
          description: "ローカル開発環境の構築に。"
        },
        {
          name: "Postman",
          description: "API開発・テストツール。"
        },
        {
          name: "DataBricks, Azure Data Factory",
          description: "大規模なデータ処理に。"
        },
      ]
    },
    {
      category: "ブラウザ",
      items: [
        {
            name: "Google Chrome",
            description: "メインブラウザ",
          },
      ]
    },
    {
      category: "その他",
      items: [
        {
          name: "Notion",
          description: "ドキュメント管理、メモ、タスク管理。"
        },
        {
          name: "Github",
          description: "プロジェクト管理、コード管理、CI/CD"
        },
        {
          name: "Slack",
          description: "チームコミュニケーション"
        }
      ]
    }
  ];
</script>

<svelte:head>
  <title>Uses - natori's Site</title>
  <meta name="description" content="開発環境と愛用ツール" />
</svelte:head>

<div class="max-w-4xl">
  <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Uses</h1>
  <p class="text-gray-600 dark:text-gray-400 mb-12">
    普段使っている開発環境やツールの紹介です。
  </p>

  <div class="space-y-10">
    {#each uses as section}
      <section>
        <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400"></span>
          {section.category}
        </h2>
        <div class="space-y-4">
          {#each section.items as item}
            <div class="border-l-4 border-blue-500 dark:border-blue-400 pl-4 py-2">
              <h3 class="font-bold text-lg text-gray-900 dark:text-white mb-1">
                {item.name}
              </h3>
              <p class="text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          {/each}
        </div>
      </section>
    {/each}
  </div>

  <div class="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
    <h3 class="text-lg font-bold mb-2 text-gray-900 dark:text-white">編集方法</h3>
    <p class="text-sm text-gray-600 dark:text-gray-400">
      このページの内容を編集するには、<code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">src/routes/uses/+page.svelte</code> を開いて、<code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">uses</code> 配列を編集してください。
    </p>
  </div>
</div>
