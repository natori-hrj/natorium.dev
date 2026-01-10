<script lang="ts">
  const uses = [
    {
      category: "エディタ・IDE",
      items: [
        {
          name: "Visual Studio Code",
          description: "メインエディタ。拡張機能が豊富で軽量。"
        },
        {
          name: "IntelliJ IDEA",
          description: "Java開発時に使用。強力なリファクタリング機能が便利。"
        },
        {
          name: "Vim / Neovim",
          description: "サーバー上での編集や、ちょっとした修正に。"
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
        {
          name: "Zsh + Starship",
          description: "シェルとプロンプト。シンプルで見やすい。"
        },
        {
          name: "tmux",
          description: "ターミナルマルチプレクサ。セッション管理に便利。"
        }
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
          name: "DBeaver",
          description: "データベースGUIクライアント。複数のDBに対応。"
        },
        {
          name: "Bruno",
          description: "オープンソースのAPIクライアント。"
        }
      ]
    },
    {
      category: "ブラウザ・拡張機能",
      items: [
        {
          name: "Google Chrome",
          description: "メインブラウザ。開発者ツールが優秀。"
        },
        {
          name: "React Developer Tools",
          description: "React開発時のデバッグに。"
        },
        {
          name: "JSON Viewer",
          description: "JSONを見やすく整形して表示。"
        }
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
          name: "Figma",
          description: "UI/UXデザイン、ワイヤーフレーム作成。"
        },
        {
          name: "Slack",
          description: "チームコミュニケーション。"
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
