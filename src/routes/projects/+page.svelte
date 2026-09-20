<script lang="ts">
	import { ExternalLink, Github } from 'lucide-svelte';
	import Seo from '$lib/components/Seo.svelte';

	const sections = [
		{
			id: 'personal-projects',
			title: 'Personal Projects',
			projects: [
				{
					title: 'herdr-lazy',
					description:
						'A declarative, reproducible plugin manager and curated distribution for Herdr. Keep plugins in a plain list, lock exact commits, and sync a setup across machines.',
					technologies: ['Rust', 'Herdr', 'TUI', 'Lockfile'],
					github: 'https://github.com/natori-hrj/herdr-lazy',
					demo: null,
					featured: true
				}
			]
		},
		{
			id: 'open-source-contributions',
			title: 'Open Source Contributions',
			projects: [
				{
					title: 'TiDB optimizer hint warning fix',
					description:
						'Contributed a bug-fix PR for optimizer hint warnings to TiDB, a Go-based distributed SQL database by PingCAP. My first open-source contribution, completed from a good first issue through two LGTM reviews and fully passing CI.',
					technologies: ['Go', 'TiDB', 'Open source'],
					github: 'https://github.com/pingcap/tidb/pull/68697',
					demo: null,
					featured: false
				}
			]
		},
		{
			id: 'professional-work',
			title: 'Professional Work',
			projects: [
				{
					title: 'Daily profit reporting BFF',
					description:
						'Built a BFF that delivers daily operating profit data to a management dashboard, covering API design, OpenAPI contracts, authentication, authorization, and testing while migrating the source from Blob to BigQuery.',
					technologies: ['TypeScript', 'Hono', 'OpenAPI', 'Drizzle ORM', 'BigQuery'],
					github: null,
					demo: null,
					featured: false
				},
				{
					title: 'E-commerce parcel tracking system migration',
					description:
						'Led a near-real-time pipeline processing roughly 5 billion parcel records per year at ten-minute intervals. Rebuilt a legacy system with idempotent incremental processing and parcel-ID deduplication.',
					technologies: ['Azure Data Factory', 'Delta Lake', 'PySpark', 'Power BI'],
					github: null,
					demo: null,
					featured: false
				},
				{
					title: 'Management information SSOT',
					description:
						'Built a platform that consolidates company-wide management information into a single source of truth. Designed authentication, layered permissions, and dynamic access control while migrating analytics from Power BI to a web application.',
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
					featured: false
				},
				{
					title: 'GraphRAG research and evaluation',
					description:
						'Evaluated whether GraphRAG is necessary for a real-world use case by comparing it with a standard RAG baseline across quality, cost, and latency.',
					technologies: ['Python', 'LLM', 'GraphRAG / RAG', 'Google Cloud'],
					github: null,
					demo: null,
					featured: false
				}
			]
		}
	];
</script>

<Seo
	title="Projects - natori's Site"
	description="Personal projects, open-source contributions, and selected professional work."
	path="/projects"
/>

<div class="max-w-4xl">
	<h1 class="mb-4 text-4xl font-bold text-black dark:text-white">Projects</h1>
	<p class="mb-12 text-black/60 dark:text-white/65">
		Personal projects, open-source contributions, and selected professional work.
	</p>

	<div class="space-y-16">
		{#each sections as section (section.id)}
			<section aria-labelledby={section.id}>
				<h2
					id={section.id}
					class="mb-6 text-xs font-bold tracking-widest text-black/55 uppercase dark:text-white/60"
				>
					{section.title}
				</h2>

				<div class="space-y-8">
					{#each section.projects as project (project.title)}
						<article
							class="rounded-2xl border border-black/15 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-white/20"
						>
							<div class="mb-3 flex items-start justify-between">
								<h3 class="text-2xl font-bold text-black dark:text-white">
									{project.title}
								</h3>
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
			</section>
		{/each}
	</div>
</div>
