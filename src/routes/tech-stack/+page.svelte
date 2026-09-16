<script lang="ts">
	import { Code2, Server, Database, BarChart3, Cloud, Bot, Wrench, Users } from 'lucide-svelte';

	const techStack = [
		{
			category: 'Languages',
			icon: Code2,
			items: ['Python', 'Go', 'TypeScript / JavaScript', 'SQL']
		},
		{
			category: 'Web & backend',
			icon: Server,
			items: [
				'Hono',
				'tRPC',
				'FastAPI',
				'Next.js / React / SvelteKit',
				'OpenAPI (zod) / Drizzle / Prisma',
				'Auth.js (NextAuth) / OAuth'
			]
		},
		{
			category: 'Data engineering',
			icon: Database,
			items: [
				'PySpark / Apache Spark',
				'Databricks',
				'Azure Synapse / Data Factory',
				'Delta Lake',
				'Pandas / NumPy'
			]
		},
		{
			category: 'Visualization & BI',
			icon: BarChart3,
			items: ['PowerBI', 'Apache ECharts', 'Grafana', 'Kibana']
		},
		{
			category: 'Databases',
			icon: Database,
			items: ['PostgreSQL', 'MySQL', 'BigQuery', 'Elasticsearch']
		},
		{
			category: 'Infrastructure & cloud',
			icon: Cloud,
			items: [
				'Google Cloud / BigQuery',
				'Azure',
				'AWS (12 certifications)',
				'Docker',
				'GitHub Actions'
			]
		},
		{
			category: 'AI & LLM',
			icon: Bot,
			items: ['GraphRAG / RAG', 'LLM API', 'Claude Code / Copilot / Gemini']
		},
		{
			category: 'Development tools',
			icon: Wrench,
			items: ['Git / GitHub', 'VS Code', 'Neovim', 'Postman', 'DBeaver']
		},
		{
			category: 'Agile & project management',
			icon: Users,
			items: ['Scrum', 'Jira', 'Confluence', 'Slack', 'Miro']
		}
	];
</script>

<svelte:head>
	<title>Tech Stack - natori's Site</title>
	<meta name="description" content="Technologies and tools I use." />
</svelte:head>

<div class="max-w-4xl">
	<h1 class="mb-4 text-4xl font-bold text-black dark:text-white">Tech Stack</h1>
	<p class="mb-12 text-black/60 dark:text-white/65">
		Technologies I use at work and in personal projects.
	</p>

	<div class="grid gap-6 md:grid-cols-2">
		{#each techStack as { category, icon, items } (category)}
			<div class="rounded-2xl border border-black/15 p-6 shadow-sm dark:border-white/20">
				<div class="mb-4 flex items-center gap-3">
					<div
						class="rounded-xl border border-black/15 p-2 text-black dark:border-white/20 dark:text-white"
					>
						<svelte:component this={icon} size={20} />
					</div>
					<h2 class="text-xl font-bold text-black dark:text-white">
						{category}
					</h2>
				</div>
				<ul class="space-y-2">
					{#each items as item (item)}
						<li class="flex items-center gap-2 text-black/75 dark:text-white/80">
							<span class="h-1.5 w-1.5 bg-black dark:bg-white"></span>
							{item}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>
