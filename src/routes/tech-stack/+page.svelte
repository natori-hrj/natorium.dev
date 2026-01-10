<script lang="ts">
  import { Code2, Database, Cloud, Wrench, Users } from 'lucide-svelte';

  const techStack = [
    {
      category: "バックエンド言語",
      icon: Code2,
      items: [
        "Python",
        "Java",
        "TypeScript/JavaScript",
        "Go",
        "SQL"
      ]
    },
    {
      category: "フレームワーク・ライブラリ",
      icon: Code2,
      items: [
        "Spring Boot",
        "Node.js / Express",
        "Apache Spark",
        "Pandas / NumPy",
        "SvelteKit / React"
      ]
    },
    {
      category: "データベース",
      icon: Database,
      items: [
        "PostgreSQL",
        "MySQL",
        "Redis",
        "MongoDB",
        "Elasticsearch"
      ]
    },
    {
      category: "インフラ・クラウド",
      icon: Cloud,
      items: [
        "AWS (EC2, S3, Lambda, RDS)",
        "Docker / Kubernetes",
        "Terraform",
        "GitHub Actions",
        "Jenkins"
      ]
    },
    {
      category: "開発ツール",
      icon: Wrench,
      items: [
        "Git / GitHub",
        "VS Code",
        "IntelliJ IDEA",
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

  <div class="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
    <h3 class="text-lg font-bold mb-2 text-gray-900 dark:text-white">編集方法</h3>
    <p class="text-sm text-gray-600 dark:text-gray-400">
      このページの内容を編集するには、<code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">src/routes/tech-stack/+page.svelte</code> を開いて、<code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">techStack</code> 配列を編集してください。
    </p>
  </div>
</div>
