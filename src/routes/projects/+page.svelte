<script lang="ts">
	import { fade } from 'svelte/transition';
	import { ArrowUpRight, Github } from 'lucide-svelte';
	import { resolve } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';

	type Category = 'Personal' | 'Open source' | 'Professional';
	type LinkIcon = 'github' | 'external';

	type Project = {
		category: Category;
		title: string;
		intro: string;
		challenge: string;
		approach: string;
		stack: string[];
		status: string;
		href?: string;
		linkLabel?: string;
		linkIcon?: LinkIcon;
	};

	const filters = ['All', 'Personal', 'Open source', 'Professional'] as const;
	type Filter = (typeof filters)[number];

	const projects: Project[] = [
		{
			category: 'Personal',
			title: 'herdr-lazy',
			intro: 'A declarative, reproducible plugin manager and curated distribution for Herdr.',
			challenge:
				'Keep a Herdr setup reproducible across machines without turning plugin configuration into a hand-maintained pile.',
			approach:
				'Model plugins as a plain list, lock exact commits, and provide a CLI/TUI workflow for syncing a setup.',
			stack: ['Rust', 'Herdr', 'TUI', 'Lockfile'],
			status: 'Complete · maintenance as needed',
			href: 'https://github.com/natori-hrj/herdr-lazy',
			linkLabel: 'GitHub',
			linkIcon: 'github'
		},
		{
			category: 'Open source',
			title: 'Headroom Docker port configuration',
			intro:
				'A bug-fix contribution to Headroom, an open-source context compression layer for LLM applications.',
			challenge:
				'Docker deployments could ignore the configured port, leaving health checks and diagnostics probing the wrong port.',
			approach:
				'Updated container startup and health checks to honor HEADROOM_PORT, and taught headroom doctor to resolve the configured deployment port.',
			stack: ['Python', 'Docker', 'pytest'],
			status: 'Merged · open-source contribution',
			href: 'https://github.com/headroomlabs-ai/headroom/pull/2436',
			linkLabel: 'View PR',
			linkIcon: 'github'
		},
		{
			category: 'Open source',
			title: 'TiDB optimizer hint warning fix',
			intro:
				'A focused bug-fix contribution to TiDB, a Go-based distributed SQL database by PingCAP.',
			challenge:
				'Turn a concrete optimizer-hint warning issue into a small, reviewable open-source contribution.',
			approach:
				'Followed the issue from a good first issue through implementation, two LGTM reviews, and passing CI.',
			stack: ['Go', 'TiDB', 'Open source'],
			status: 'Merged · first contribution',
			href: 'https://github.com/pingcap/tidb/pull/68697',
			linkLabel: 'View PR',
			linkIcon: 'github'
		},
		{
			category: 'Professional',
			title: 'Daily profit reporting BFF',
			intro:
				'Built a BFF that delivers daily operating profit data to a management dashboard while migrating the source from Blob to BigQuery.',
			challenge:
				'Give a management dashboard a stable API while the reporting data source and its access model were changing.',
			approach:
				'Worked across API design, OpenAPI contracts, authentication, authorization, testing, and the Blob-to-BigQuery migration.',
			stack: ['TypeScript', 'Hono', 'OpenAPI', 'Drizzle ORM', 'BigQuery'],
			status: 'Professional work'
		},
		{
			category: 'Professional',
			title: 'E-commerce parcel tracking system migration',
			intro:
				'A near-real-time pipeline processing roughly 5 billion parcel records per year at ten-minute intervals.',
			challenge:
				'Replace a legacy flow while keeping large-scale parcel processing reliable and incremental.',
			approach:
				'Rebuilt the pipeline around idempotent incremental processing and parcel-ID deduplication.',
			stack: ['Azure Data Factory', 'Delta Lake', 'PySpark', 'Power BI'],
			status: 'Professional work'
		},
		{
			category: 'Professional',
			title: 'Management information SSOT',
			intro:
				'Built a platform that consolidates company-wide management information into a single source of truth.',
			challenge:
				'Bring fragmented management information together while supporting layered permissions and dynamic access control.',
			approach:
				'Designed the web application and authorization model, then migrated analytics from Power BI to the new interface.',
			stack: ['Next.js', 'TypeScript', 'tRPC', 'Auth.js', 'Prisma', 'Apache ECharts', 'BigQuery'],
			status: 'Professional work'
		},
		{
			category: 'Professional',
			title: 'GraphRAG research and evaluation',
			intro:
				'Evaluated whether GraphRAG is necessary for a real-world use case by comparing it with a standard RAG baseline.',
			challenge: 'Decide whether the added complexity of GraphRAG was justified for the use case.',
			approach:
				'Compared both approaches across answer quality, cost, and latency to make the trade-offs visible.',
			stack: ['Python', 'LLM', 'GraphRAG / RAG', 'Google Cloud'],
			status: 'Professional work'
		}
	];

	let activeFilter = $state<Filter>('All');
	let visibleProjects = $derived.by(() =>
		activeFilter === 'All'
			? projects
			: projects.filter((project) => project.category === activeFilter)
	);
</script>

<Seo
	title="Projects - natori's Site"
	description="Personal projects, open-source contributions, and selected professional work."
	path="/projects"
/>

<div class="projects-page">
	<header class="projects-hero rise">
		<div class="hero-topline">
			<p class="eyebrow">Selected work</p>
			<a class="back-link" href={resolve('/')}>
				Back home
				<ArrowUpRight size={16} strokeWidth={1.8} />
			</a>
		</div>

		<h1>Work with a reason.<br /><span>Systems with a story.</span></h1>
		<p class="hero-intro">
			A small selection of personal work, open-source contribution, and professional experience —
			shown through the problems they were meant to solve.
		</p>
	</header>

	<section class="projects-section" aria-labelledby="projects-heading">
		<div class="section-heading">
			<div>
				<p class="section-kicker">01 / Case studies</p>
				<h2 id="projects-heading">The work behind the tools.</h2>
			</div>
			<p class="section-note">{visibleProjects.length} selected projects</p>
		</div>

		<div class="filter-bar" role="group" aria-label="Filter projects">
			{#each filters as filter (filter)}
				<button
					type="button"
					class="filter-button"
					aria-pressed={activeFilter === filter}
					onclick={() => (activeFilter = filter)}
				>
					{filter}
				</button>
			{/each}
		</div>

		<div class="project-list" aria-live="polite">
			{#key activeFilter}
				{#each visibleProjects as project, index (project.title)}
					<article class="project-case" transition:fade={{ duration: 180 }}>
						<div class="case-index" aria-hidden="true">
							{String(index + 1).padStart(2, '0')}
						</div>

						<div class="case-body">
							<div class="case-heading">
								<div>
									<p class="project-meta">{project.category} <span>/</span> {project.status}</p>
									<h3>{project.title}</h3>
								</div>

								{#if project.href}
									<a
										class="project-link"
										href={project.href}
										target="_blank"
										rel="external noopener noreferrer"
									>
										{#if project.linkIcon === 'github'}
											<Github size={16} strokeWidth={1.8} />
										{:else}
											<ArrowUpRight size={16} strokeWidth={1.8} />
										{/if}
										{project.linkLabel}
									</a>
								{/if}
							</div>

							<p class="project-intro">{project.intro}</p>

							<dl class="case-details">
								<div>
									<dt>Challenge</dt>
									<dd>{project.challenge}</dd>
								</div>
								<div>
									<dt>Approach</dt>
									<dd>{project.approach}</dd>
								</div>
							</dl>

							<div class="stack-row">
								<span class="detail-label">Stack</span>
								<div class="stack-list">
									{#each project.stack as technology (technology)}
										<span>{technology}</span>
									{/each}
								</div>
							</div>
						</div>
					</article>
				{/each}
			{/key}
		</div>
	</section>
</div>

<style>
	.projects-page {
		max-width: 72rem;
		margin: 0 auto;
	}

	.projects-hero {
		padding: clamp(3rem, 8vw, 7rem) 0 clamp(4rem, 8vw, 6rem);
		border-bottom: 1px dashed var(--border-color);
	}

	.hero-topline,
	.section-heading,
	.case-heading,
	.stack-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
	}

	.eyebrow,
	.section-kicker,
	.project-meta,
	.detail-label,
	.case-index {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		line-height: 1.4;
		text-transform: uppercase;
	}

	.eyebrow,
	.section-kicker,
	.detail-label,
	.case-index {
		color: color-mix(in srgb, var(--text-color) 52%, transparent);
	}

	.back-link,
	.project-link {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		color: var(--text-color);
		font-size: 0.82rem;
		font-weight: 600;
		text-decoration: none;
		transition: opacity 0.2s ease;
	}

	.back-link:hover,
	.project-link:hover {
		opacity: 0.55;
	}

	.projects-hero h1 {
		max-width: 48rem;
		margin: clamp(3.5rem, 9vw, 7rem) 0 1.75rem;
		font-size: clamp(3.4rem, 8vw, 7.5rem);
		font-weight: 800;
		letter-spacing: -0.07em;
		line-height: 0.94;
	}

	.projects-hero h1 span {
		color: color-mix(in srgb, var(--text-color) 38%, transparent);
		font-style: italic;
		font-weight: 400;
	}

	.hero-intro {
		max-width: 34rem;
		margin: 0;
		color: color-mix(in srgb, var(--text-color) 62%, transparent);
		font-size: 1rem;
		line-height: 1.75;
	}

	.projects-section {
		padding: clamp(4rem, 9vw, 8rem) 0 3rem;
	}

	.section-heading {
		align-items: end;
		padding-bottom: 2rem;
		border-bottom: 1px dashed var(--border-color);
	}

	.section-heading h2 {
		margin: 0.75rem 0 0;
		font-size: clamp(1.8rem, 4vw, 3.25rem);
		font-weight: 700;
		letter-spacing: -0.045em;
	}

	.section-note {
		margin: 0;
		color: color-mix(in srgb, var(--text-color) 50%, transparent);
		font-size: 0.8rem;
		white-space: nowrap;
	}

	.filter-bar {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		padding: 1.25rem 0;
		border-bottom: 1px solid var(--border-color);
	}

	.filter-button {
		padding: 0.55rem 0.85rem;
		border: 1px solid var(--border-color);
		border-radius: 999px;
		background: transparent;
		color: color-mix(in srgb, var(--text-color) 64%, transparent);
		font: inherit;
		font-size: 0.78rem;
		font-weight: 600;
		cursor: pointer;
		transition:
			background-color 0.2s ease,
			border-color 0.2s ease,
			color 0.2s ease;
	}

	.filter-button:hover {
		border-color: var(--text-color);
		color: var(--text-color);
	}

	.filter-button[aria-pressed='true'] {
		border-color: var(--text-color);
		background: var(--text-color);
		color: var(--bg-color);
	}

	.project-list {
		border-bottom: 1px solid var(--border-color);
	}

	.project-case {
		display: grid;
		grid-template-columns: 4rem minmax(0, 1fr);
		gap: 2rem;
		padding: 3.5rem 0;
		border-bottom: 1px solid var(--border-color);
	}

	.project-case:last-child {
		border-bottom: 0;
	}

	.case-index {
		padding-top: 0.45rem;
	}

	.case-body {
		min-width: 0;
	}

	.case-heading {
		align-items: start;
	}

	.project-meta {
		margin: 0 0 0.7rem;
		color: color-mix(in srgb, var(--text-color) 52%, transparent);
		font-size: 0.68rem;
		letter-spacing: 0.1em;
	}

	.project-meta span {
		padding: 0 0.35rem;
		color: color-mix(in srgb, var(--text-color) 30%, transparent);
	}

	.case-heading h3 {
		margin: 0;
		font-size: clamp(1.65rem, 3vw, 2.5rem);
		font-weight: 700;
		letter-spacing: -0.045em;
		line-height: 1.1;
	}

	.project-link {
		flex-shrink: 0;
		margin-top: 1.3rem;
		text-decoration: underline;
		text-decoration-color: var(--border-color);
		text-underline-offset: 0.25rem;
	}

	.project-intro {
		max-width: 42rem;
		margin: 1.5rem 0 2.25rem;
		color: color-mix(in srgb, var(--text-color) 70%, transparent);
		font-size: 1.05rem;
		line-height: 1.7;
	}

	.case-details {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1.5rem 3rem;
		margin: 0;
		padding: 1.5rem 0;
		border-top: 1px dashed var(--border-color);
		border-bottom: 1px dashed var(--border-color);
	}

	.case-details dt {
		margin-bottom: 0.7rem;
		color: color-mix(in srgb, var(--text-color) 52%, transparent);
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}

	.case-details dd {
		margin: 0;
		color: color-mix(in srgb, var(--text-color) 68%, transparent);
		font-size: 0.92rem;
		line-height: 1.7;
	}

	.stack-row {
		align-items: start;
		justify-content: start;
		margin-top: 1.5rem;
	}

	.detail-label {
		flex-shrink: 0;
		padding-top: 0.45rem;
	}

	.stack-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
	}

	.stack-list span {
		padding: 0.35rem 0.65rem;
		border: 1px solid var(--border-color);
		border-radius: 999px;
		color: color-mix(in srgb, var(--text-color) 70%, transparent);
		font-size: 0.75rem;
	}

	@media (max-width: 700px) {
		.hero-topline,
		.section-heading,
		.case-heading {
			align-items: start;
			flex-direction: column;
			gap: 1rem;
		}

		.projects-hero h1 {
			font-size: clamp(3rem, 15vw, 5rem);
		}

		.section-note {
			align-self: start;
		}

		.project-case {
			display: block;
			padding: 2.75rem 0;
		}

		.case-index {
			margin-bottom: 1.75rem;
		}

		.project-link {
			margin-top: 0;
		}

		.case-details {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 420px) {
		.stack-row {
			flex-direction: column;
			gap: 0.75rem;
		}
	}
</style>
