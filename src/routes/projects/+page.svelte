<script lang="ts">
	import { ExternalLink, Github } from 'lucide-svelte';

	const projects = [
		{
			title: 'Open-source contribution to TiDB',
			description:
				'Contributed a bug-fix PR for optimizer hint warnings to TiDB, a Go-based distributed SQL database by PingCAP. My first open-source contribution, completed from a good first issue through two LGTM reviews and fully passing CI.',
			technologies: ['Go'],
			github: 'https://github.com/pingcap/tidb/pull/68697',
			demo: null,
			featured: true
		},
		{
			title: 'Daily profit reporting BFF',
			description:
				'A BFF (Backend For Frontend) that delivers daily operating profit data to a management dashboard. I handle requirements, API design, implementation, OpenAPI contracts, response shaping, authentication, authorization, and testing while migrating the data source from Blob to BigQuery.',
			technologies: ['TypeScript', 'Hono', 'OpenAPI (zod)', 'Drizzle ORM', 'vitest', 'BigQuery'],
			github: null,
			demo: null,
			featured: true
		},
		{
			title: 'In-house migration of an e-commerce parcel tracking system',
			description:
				'Led a near-real-time pipeline processing roughly 5 billion parcel records per year (13.7 million per day) at ten-minute intervals. Rebuilt a black-box legacy system from its code and documentation, making it idempotent with incremental processing and parcel-ID deduplication.',
			technologies: ['Azure Data Factory', 'Delta Lake', 'PySpark', 'PowerBI', 'Next.js'],
			github: null,
			demo: null,
			featured: true
		},
		{
			title: 'Management information SSOT (Single Source of Truth)',
			description:
				'Built a platform that consolidates company-wide management information so leaders across the country can work from the same source of truth. Designed authentication, authorization, layered permissions, and dynamic access control. Currently migrating Power BI screens to a web application with Apache ECharts and moving the platform from Azure to Google Cloud.',
			technologies: [
				'Next.js',
				'TypeScript',
				'tRPC',
				'Auth.js',
				'Prisma',
				'Apache ECharts',
				'BigQuery'
			],
			github: null,
			demo: null,
			featured: true
		},
		{
			title: 'GraphRAG research and evaluation',
			description:
				'Quantitatively evaluating whether GraphRAG is necessary using a real-world use case. Rather than assuming GraphRAG is the answer, I compare it with a standard RAG baseline across quality, cost, and latency. The platform runs on Google Cloud.',
			technologies: ['Python', 'LLM', 'GraphRAG / RAG', 'Google Cloud'],
			github: null,
			demo: null,
			featured: false
		},
		{
			title: 'Personal website (this site)',
			description:
				'A personal website and blog built with SvelteKit and Tailwind CSS. Blog posts are managed in Markdown.',
			technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'mdsvex'],
			github: 'https://github.com/natori-hrj/natorium.dev',
			demo: null,
			featured: false
		},
		{
			title: 'iss-tracker-cli',
			description:
				'A CLI that displays the International Space Station in real time. Includes an ASCII Earth, crew information, and distance from your current location.',
			technologies: ['Go'],
			github: 'https://github.com/natori-hrj/iss-tracker-cli',
			demo: null,
			featured: false
		},
		{
			title: 'nasa-apod-cli',
			description:
				"A CLI for browsing NASA's Astronomy Picture of the Day from the terminal, with ASCII image rendering, Japanese translation, and random lookup.",
			technologies: ['Go'],
			github: 'https://github.com/natori-hrj/nasa-apod-cli',
			demo: null,
			featured: false
		},
		{
			title: 'spotify-now-playing-cli',
			description:
				'A CLI that shows the currently playing Spotify track in the terminal, including a progress bar and playback history.',
			technologies: ['Go'],
			github: 'https://github.com/natori-hrj/spotify-now-playing-cli',
			demo: null,
			featured: false
		},
		{
			title: 'debt-checker',
			description:
				'A CLI that detects and visualizes technical debt in Python code, with a 100-point health score.',
			technologies: ['Python'],
			github: 'https://github.com/natori-hrj/debt-checker',
			demo: null,
			featured: false
		},
		{
			title: 'readme-score',
			description:
				'A CLI that scores README.md quality out of 100, supporting both local files and GitHub URLs.',
			technologies: ['Python'],
			github: 'https://github.com/natori-hrj/readme-score',
			demo: null,
			featured: false
		},
		{
			title: 'nvim-databricks',
			description: 'A Neovim plugin for running Python files on any Databricks cluster.',
			technologies: ['Lua'],
			github: 'https://github.com/natori-hrj/nvim-databricks',
			demo: null,
			featured: false
		},
		{
			title: 'Dogger Log (in development)',
			description: "A web app for tracking a dog's health, growth, and outings.",
			technologies: ['Go', 'Next.js', 'PostgreSQL', 'GCP'],
			github: 'https://github.com/natori-hrj/dogger-log',
			demo: null,
			featured: false
		}
	];
</script>

<svelte:head>
	<title>Projects - natori's Site</title>
	<meta name="description" content="Selected projects and things I have built." />
</svelte:head>

<div class="max-w-4xl">
	<h1 class="mb-4 text-4xl font-bold text-black dark:text-white">Projects</h1>
	<p class="mb-12 text-black/60 dark:text-white/65">Selected projects and things I have built.</p>

	<div class="space-y-8">
		{#each projects as project (project.title)}
			<article
				class="rounded-2xl border border-black/15 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-white/20"
			>
				<div class="mb-3 flex items-start justify-between">
					<h2 class="text-2xl font-bold text-black dark:text-white">
						{project.title}
					</h2>
					{#if project.featured}
						<span
							class="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-black"
						>
							Featured
						</span>
					{/if}
				</div>

				<p class="mb-4 text-black/70 dark:text-white/75">
					{project.description}
				</p>

				<div class="mb-4 flex flex-wrap gap-2">
					{#each project.technologies as tech (tech)}
						<span
							class="rounded-full border border-black/20 px-3 py-1 text-sm text-black/75 dark:border-white/25 dark:text-white/80"
						>
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
								rel="external noopener noreferrer"
								class="inline-flex items-center gap-2 text-black underline-offset-4 hover:underline dark:text-white"
							>
								<Github size={16} />
								GitHub
							</a>
						{/if}
						{#if project.demo}
							<a
								href={project.demo}
								target="_blank"
								rel="external noopener noreferrer"
								class="inline-flex items-center gap-2 text-black underline-offset-4 hover:underline dark:text-white"
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
