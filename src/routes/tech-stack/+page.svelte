<script lang="ts">
  import { Code2, Database, Cloud, Wrench, Users } from 'lucide-svelte';

  const techStack = [
    {
      category: "バックエンド言語",
      icon: Code2,
      items: [
        "Python",
        "TypeScript/JavaScript",
        "Go",
        "SQL"
      ]
    },
    {
      category: "フレームワーク・ライブラリ",
      icon: Code2,
      items: [
        "Node.js",
        "Apache Spark",
        "Pandas / NumPy",
        "SvelteKit / React / Next.js"
      ]
    },
    {
      category: "データベース",
      icon: Database,
      items: [
        "PostgreSQL",
        "Synapse",
        "BigQuery",
        "MySQL",
        "Elasticsearch"
      ]
    },
    {
      category: "インフラ・クラウド",
      icon: Cloud,
      items: [
        "AWS (EC2, S3, Lambda, RDS)",
        "Docker",
        "Terraform",
        "GitHub Actions",
      ]
    },
    {
      category: "開発ツール",
      icon: Wrench,
      items: [
        "Git / GitHub",
        "VS Code",
        "NeoVim",
        "Postman",
        "DBeaver"
      ]
    },
    {
      category: "アジャイル・プロジェクト管理",
      icon: Users,
      items: [
        "Scrum",
        "Jira",
        "Confluence",
        "Slack",
        "Miro"
      ]
    }
  ];
</script>

<svelte:head>
  <title>Tech Stack - natori's Site</title>
  <meta name="description" content="使用している技術スタックとツール" />
</svelte:head>

<div class="max-w-4xl">
  <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Tech Stack</h1>
  <p class="text-gray-600 dark:text-gray-400 mb-12">
    業務や個人開発で使用している技術スタックです。
  </p>

  <div class="grid gap-6 md:grid-cols-2">
    {#each techStack as { category, icon, items }}
      <div class="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
            <svelte:component this={icon} size={20} />
          </div>
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">
            {category}
          </h2>
        </div>
        <ul class="space-y-2">
          {#each items as item}
            <li class="flex items-center gap-2 text-gray-700 dark:text-gray-300">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400"></span>
              {item}
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>

</div>
