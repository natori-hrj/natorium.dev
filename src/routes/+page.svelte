<script lang="ts">
	import { resolve } from '$app/paths';
	import { fade, slide } from 'svelte/transition';
	import { ArrowDown, ArrowUpRight, ChevronDown, Github, Shield } from 'lucide-svelte';
	import ContributionGraph from '$lib/components/ContributionGraph.svelte';
	import Seo from '$lib/components/Seo.svelte';

	let { data } = $props();

	type WorkCategory = 'Personal' | 'Open source' | 'Professional';
	type WorkItem = {
		category: WorkCategory;
		label: string;
		title: string;
		description: string;
		technologies: string[];
		href?: string;
		linkLabel?: string;
		featured?: boolean;
	};

	const workItems: WorkItem[] = [
		{
			category: 'Personal',
			label: 'Personal project',
			title: 'herdr-lazy',
			description:
				'A declarative, reproducible plugin manager and curated distribution for Herdr. Keep plugins in a plain list, lock exact commits, and sync a setup across machines.',
			technologies: ['Rust', 'CLI', 'TUI', 'Lockfile'],
			href: 'https://github.com/natori-hrj/herdr-lazy',
			linkLabel: 'View on GitHub',
			featured: true
		},
		{
			category: 'Open source',
			label: 'First contribution',
			title: 'TiDB optimizer hint warning fix',
			description:
				'A focused bug-fix contribution to TiDB, a Go-based distributed SQL database by PingCAP.',
			technologies: ['Go', 'TiDB', 'Open source'],
			href: 'https://github.com/pingcap/tidb/pull/68697',
			linkLabel: 'Read the pull request'
		},
		{
			category: 'Professional',
			label: 'Selected professional work',
			title: 'Parcel tracking data platform',
			description:
				'A near-real-time pipeline processing roughly 5 billion parcel records per year at ten-minute intervals.',
			technologies: ['Azure Data Factory', 'Delta Lake', 'PySpark', 'Power BI']
		},
		{
			category: 'Professional',
			label: 'Selected professional work',
			title: 'Management information SSOT',
			description:
				'A company-wide source of truth with layered permissions and dynamic access control, brought from analytics dashboards into a web application.',
			technologies: ['Next.js', 'TypeScript', 'tRPC', 'BigQuery']
		}
	];

	const filters = ['All', 'Personal', 'Open source', 'Professional'] as const;
	type Filter = (typeof filters)[number];

	let activeFilter = $state<Filter>('All');
	let showActivity = $state(false);

	const visibleWork = $derived.by(() => {
		if (activeFilter === 'All') return workItems;
		return workItems.filter((item) => item.category === activeFilter);
	});

	const countFor = (filter: Filter) => {
		return filter === 'All'
			? workItems.length
			: workItems.filter((item) => item.category === filter).length;
	};
</script>

<Seo
	title="natori — Backend engineer exploring security"
	description="natori's personal site about backend systems, data platforms, selected work, and a broad interest in security."
	path="/"
/>

<div class="home-page">
	<section class="home-hero rise" aria-labelledby="hero-heading">
		<div class="hero-topline">
			<span class="eyebrow">natori / backend engineer</span>
			<span class="hero-status">
				<span class="status-dot" aria-hidden="true"></span>
				exploring security
			</span>
		</div>

		<div class="hero-content">
			<div class="hero-heading">
				<p class="hero-kicker">Backend · Data · AI</p>
				<h1 id="hero-heading">
					Building systems.<br />
					<span>Thinking about security.</span>
				</h1>
			</div>

			<div class="hero-aside">
				<div class="hero-avatar">
					<img src="/profile.jpg" alt="natori" />
				</div>
				<p>
					I build data platforms and backend systems, then stay curious about the problems
					underneath them.
				</p>
				<a class="hero-link" href="#work">
					<span>See selected work</span>
					<ArrowDown size={16} />
				</a>
			</div>
		</div>

		<div class="hero-bottomline">
			<span>Based in Japan</span>
			<span class="hero-scroll">Scroll to explore ↓</span>
		</div>
	</section>

	<section id="work" class="home-section work-section" aria-labelledby="work-heading">
		<div class="section-heading">
			<div>
				<p class="section-kicker">01 / Selected work</p>
				<h2 id="work-heading">Things I’ve made, fixed, and shipped.</h2>
			</div>
			<a class="section-link" href={resolve('/projects')}>
				<span>View all work</span>
				<ArrowUpRight size={17} />
			</a>
		</div>

		<div class="filter-bar" role="tablist" aria-label="Filter selected work">
			{#each filters as filter (filter)}
				<button
					type="button"
					role="tab"
					aria-selected={activeFilter === filter}
					class:filter-active={activeFilter === filter}
					onclick={() => (activeFilter = filter)}
				>
					<span>{filter}</span>
					<span class="filter-count">{countFor(filter)}</span>
				</button>
			{/each}
		</div>

		{#key activeFilter}
			<div class="work-grid" in:fade={{ duration: 280 }}>
				{#each visibleWork as item, index (item.title)}
					<article
						class="work-card"
						class:work-card-featured={item.featured}
						style={'--card-index: ' + index + ';'}
					>
						<div class="work-card-top">
							<span class="work-number">0{index + 1}</span>
							<span class="work-category">{item.label}</span>
						</div>

						<div class="work-card-content">
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</div>

						<div class="work-card-bottom">
							<div class="work-tags">
								{#each item.technologies as technology (technology)}
									<span>{technology}</span>
								{/each}
							</div>

							{#if item.href}
								<a
									href={item.href}
									target="_blank"
									rel="external noopener noreferrer"
									aria-label={item.linkLabel + ': ' + item.title}
								>
									<span>{item.linkLabel}</span>
									<ArrowUpRight size={17} />
								</a>
							{/if}
						</div>
					</article>
				{/each}
			</div>
		{/key}
	</section>

	<section class="home-section now-section" aria-labelledby="now-heading">
		<div class="section-heading">
			<div>
				<p class="section-kicker">02 / Now</p>
				<h2 id="now-heading">Still curious.</h2>
			</div>
		</div>

		<div class="now-grid">
			<p class="now-lead">
				<Shield size={22} strokeWidth={1.5} />
				I’m broadly interested in security.
			</p>
			<div class="now-copy">
				<p>
					herdr-lazy is complete for now and maintained on an as-needed basis. I revisit it when
					Herdr changes or a bug needs attention.
				</p>
				<p>My TiDB contribution was a first step into open source, not an ongoing project.</p>
				<a class="text-link" href={resolve('/about')}>More about me <ArrowUpRight size={16} /></a>
			</div>
		</div>
	</section>

	{#if data.contributions}
		<section class="activity-section" aria-labelledby="activity-heading">
			<button
				type="button"
				class="activity-trigger"
				aria-expanded={showActivity}
				onclick={() => (showActivity = !showActivity)}
			>
				<span>
					<span class="section-kicker">03 / Activity</span>
					<span id="activity-heading" class="activity-title">GitHub activity</span>
				</span>
				<span class="activity-action">
					{showActivity ? 'Hide' : 'Show'}
					<span class:chevron-open={showActivity}>
						<ChevronDown size={18} />
					</span>
				</span>
			</button>

			{#if showActivity}
				<div class="activity-content" transition:slide={{ duration: 320 }}>
					<ContributionGraph
						total={data.contributions.total}
						days={data.contributions.days}
						username={data.username}
					/>
				</div>
			{/if}
		</section>
	{/if}

	<section id="contact" class="home-section contact-section" aria-labelledby="contact-heading">
		<div class="section-heading">
			<div>
				<p class="section-kicker">04 / Elsewhere</p>
				<h2 id="contact-heading">Find me in the usual places.</h2>
			</div>
		</div>

		<div class="contact-grid">
			<p class="contact-lead">The fastest way to find me is GitHub or X.</p>
			<div class="contact-links">
				<a href="https://github.com/natori-hrj" target="_blank" rel="external noopener noreferrer">
					<Github size={18} />
					GitHub
					<ArrowUpRight size={16} />
				</a>
				<a href="https://x.com/nator1_hrj" target="_blank" rel="external noopener noreferrer">
					<span class="x-mark">𝕏</span>
					X
					<ArrowUpRight size={16} />
				</a>
			</div>
		</div>

		<div class="secondary-links" aria-label="More pages">
			<a href={resolve('/blog')}>Blog</a>
			<a href={resolve('/tech-stack')}>Tech Stack</a>
			<a href={resolve('/uses')}>Uses</a>
			<a href={resolve('/about')}>About</a>
		</div>
	</section>
</div>

<style>
	.home-page {
		max-width: 72rem;
		margin: 0 auto;
	}

	.home-hero {
		display: flex;
		min-height: min(48rem, calc(100vh - 5rem));
		flex-direction: column;
		justify-content: space-between;
		padding: clamp(3rem, 8vw, 7rem) 0 2rem;
		border-bottom: 1px dashed var(--border-color);
	}

	.hero-topline,
	.hero-bottomline,
	.section-heading,
	.work-card-top,
	.work-card-bottom,
	.activity-trigger {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}

	.eyebrow,
	.section-kicker,
	.hero-kicker,
	.work-category,
	.work-number,
	.filter-bar,
	.hero-bottomline,
	.secondary-links {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.eyebrow,
	.section-kicker,
	.hero-kicker,
	.work-category,
	.work-number,
	.hero-bottomline,
	.secondary-links {
		color: color-mix(in srgb, var(--text-color) 52%, transparent);
	}

	.hero-status {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: color-mix(in srgb, var(--text-color) 70%, transparent);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.04em;
	}

	.status-dot {
		width: 0.45rem;
		height: 0.45rem;
		border-radius: 50%;
		background: var(--text-color);
		animation: pulse 2.4s ease-in-out infinite;
	}

	.hero-content {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(14rem, 18rem);
		align-items: start;
		gap: clamp(2rem, 8vw, 8rem);
		padding: 4rem 0;
	}

	.hero-heading h1 {
		margin-top: 1.25rem;
		font-size: clamp(3.4rem, 8.5vw, 8.25rem);
		font-weight: 800;
		letter-spacing: -0.085em;
		line-height: 0.86;
	}

	.hero-heading h1 span {
		color: color-mix(in srgb, var(--text-color) 38%, transparent);
		font-style: italic;
		font-weight: 500;
	}

	.hero-aside {
		max-width: 18rem;
	}

	.hero-avatar {
		width: 3.5rem;
		height: 3.5rem;
		margin-bottom: 1.5rem;
		overflow: hidden;
		border: 1px solid var(--text-color);
		border-radius: 1.25rem;
		transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.hero-avatar:hover {
		transform: rotate(8deg) scale(1.06);
	}

	.hero-avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.hero-aside p,
	.now-copy p,
	.contact-lead {
		color: color-mix(in srgb, var(--text-color) 67%, transparent);
		font-size: 0.95rem;
		line-height: 1.75;
	}

	.hero-link,
	.section-link,
	.text-link,
	.contact-links a {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--text-color);
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.02em;
		text-decoration: none;
	}

	.hero-link {
		margin-top: 1.5rem;
	}

	.hero-link :global(svg),
	.section-link :global(svg),
	.text-link :global(svg),
	.contact-links a :global(svg:last-child) {
		transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.hero-link:hover :global(svg) {
		transform: translateY(0.25rem);
	}

	.section-link:hover :global(svg),
	.text-link:hover :global(svg),
	.contact-links a:hover :global(svg:last-child) {
		transform: translate(0.2rem, -0.2rem);
	}

	.hero-bottomline {
		padding-top: 1rem;
		border-top: 1px solid var(--border-color);
	}

	.hero-scroll {
		color: var(--text-color);
	}

	.home-section {
		padding: clamp(5rem, 10vw, 9rem) 0;
		border-bottom: 1px dashed var(--border-color);
	}

	.section-heading {
		align-items: end;
		margin-bottom: 3rem;
	}

	.section-heading h2 {
		max-width: 42rem;
		margin-top: 1rem;
		font-size: clamp(2.5rem, 5vw, 5rem);
		font-weight: 750;
		letter-spacing: -0.07em;
		line-height: 0.95;
	}

	.section-link {
		flex-shrink: 0;
		padding-bottom: 0.3rem;
		border-bottom: 1px solid var(--text-color);
	}

	.filter-bar {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.filter-bar button {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		padding: 0.65rem 0.85rem;
		border: 1px solid var(--border-color);
		border-radius: 999px;
		color: color-mix(in srgb, var(--text-color) 62%, transparent);
		font: inherit;
		letter-spacing: 0.04em;
		text-transform: none;
		transition:
			background-color 0.2s,
			border-color 0.2s,
			color 0.2s,
			transform 0.2s;
	}

	.filter-bar button:hover {
		border-color: var(--text-color);
		color: var(--text-color);
		transform: translateY(-2px);
	}

	.filter-bar button.filter-active {
		border-color: var(--text-color);
		background: var(--text-color);
		color: var(--bg-color);
	}

	.filter-count {
		opacity: 0.55;
		font-size: 0.65rem;
	}

	.work-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.75rem;
	}

	.work-card {
		display: flex;
		min-height: 23rem;
		flex-direction: column;
		padding: clamp(1.35rem, 3vw, 2rem);
		border: 1px solid var(--border-color);
		border-radius: 1.4rem;
		background: var(--surface-color);
		color: var(--text-color);
		opacity: 0;
		animation: card-in 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
		animation-delay: calc(var(--card-index) * 70ms);
		transition:
			transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
			background-color 0.3s,
			color 0.3s,
			border-color 0.3s;
	}

	.work-card:hover {
		transform: translateY(-0.35rem);
		border-color: var(--text-color);
		background: var(--text-color);
		color: var(--bg-color);
	}

	.work-card-featured {
		grid-column: span 2;
		min-height: 28rem;
	}

	.work-card-top {
		align-items: flex-start;
	}

	.work-card:hover .work-number,
	.work-card:hover .work-category {
		color: color-mix(in srgb, var(--bg-color) 58%, transparent);
	}

	.work-category {
		text-align: right;
	}

	.work-card-content {
		max-width: 42rem;
		margin-top: auto;
		padding: 4rem 0 3rem;
	}

	.work-card-featured .work-card-content {
		padding-top: 7rem;
	}

	.work-card h3 {
		max-width: 44rem;
		font-size: clamp(2rem, 4vw, 4.3rem);
		font-weight: 750;
		letter-spacing: -0.07em;
		line-height: 0.95;
	}

	.work-card:not(.work-card-featured) h3 {
		font-size: clamp(1.7rem, 3vw, 2.75rem);
	}

	.work-card-content p {
		max-width: 38rem;
		margin-top: 1.25rem;
		color: color-mix(in srgb, var(--text-color) 64%, transparent);
		font-size: 0.9rem;
		line-height: 1.7;
	}

	.work-card:hover .work-card-content p {
		color: color-mix(in srgb, var(--bg-color) 68%, transparent);
	}

	.work-card-bottom {
		align-items: flex-end;
		gap: 1.5rem;
	}

	.work-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
	}

	.work-tags span {
		padding: 0.38rem 0.65rem;
		border: 1px solid var(--border-color);
		border-radius: 999px;
		color: color-mix(in srgb, var(--text-color) 66%, transparent);
		font-size: 0.7rem;
	}

	.work-card:hover .work-tags span {
		border-color: color-mix(in srgb, var(--bg-color) 28%, transparent);
		color: color-mix(in srgb, var(--bg-color) 72%, transparent);
	}

	.work-card-bottom a {
		display: inline-flex;
		flex-shrink: 0;
		align-items: center;
		gap: 0.4rem;
		color: var(--text-color);
		font-size: 0.75rem;
		font-weight: 700;
		text-decoration: none;
	}

	.work-card:hover .work-card-bottom a {
		color: var(--bg-color);
	}

	.work-card-bottom a :global(svg) {
		transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
	}

	.work-card-bottom a:hover :global(svg) {
		transform: translate(0.2rem, -0.2rem);
	}

	.now-grid,
	.contact-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(14rem, 0.9fr);
		gap: clamp(2rem, 8vw, 9rem);
	}

	.now-lead {
		display: flex;
		align-items: flex-start;
		gap: 0.8rem;
		max-width: 32rem;
		font-size: clamp(2rem, 4vw, 4rem);
		font-weight: 650;
		letter-spacing: -0.07em;
		line-height: 0.98;
	}

	.now-lead :global(svg) {
		flex-shrink: 0;
		margin-top: 0.25rem;
	}

	.now-copy {
		max-width: 25rem;
	}

	.now-copy p + p {
		margin-top: 1rem;
	}

	.text-link {
		margin-top: 1.5rem;
		border-bottom: 1px solid var(--text-color);
		padding-bottom: 0.25rem;
	}

	.activity-section {
		border-bottom: 1px dashed var(--border-color);
	}

	.activity-trigger {
		width: 100%;
		padding: 1.5rem 0;
		border: 0;
		background: transparent;
		color: var(--text-color);
		text-align: left;
	}

	.activity-trigger > span:first-child {
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
	}

	.activity-title {
		font-size: 1.2rem;
		font-weight: 700;
		letter-spacing: -0.03em;
	}

	.activity-action {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		color: color-mix(in srgb, var(--text-color) 60%, transparent);
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
	}

	.activity-action > span {
		display: inline-flex;
		transition: transform 0.25s;
	}

	.activity-action > span.chevron-open {
		transform: rotate(180deg);
	}

	.activity-content {
		padding-bottom: 2rem;
	}

	.contact-section {
		border-bottom: 0;
		padding-bottom: 5rem;
	}

	.contact-lead {
		max-width: 20rem;
	}

	.contact-links {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.9rem;
	}

	.contact-links a {
		font-size: 1.3rem;
		letter-spacing: -0.03em;
	}

	.contact-links a:hover {
		text-decoration: underline;
		text-underline-offset: 0.35rem;
	}

	.x-mark {
		display: inline-grid;
		width: 1.15rem;
		height: 1.15rem;
		place-items: center;
		font-size: 1.05rem;
	}

	.secondary-links {
		display: flex;
		flex-wrap: wrap;
		gap: 1.25rem;
		margin-top: 5rem;
		padding-top: 1rem;
		border-top: 1px solid var(--border-color);
	}

	.secondary-links a {
		color: inherit;
		text-decoration: none;
		transition: color 0.2s;
	}

	.secondary-links a:hover {
		color: var(--text-color);
		text-decoration: underline;
		text-underline-offset: 0.3rem;
	}

	@keyframes card-in {
		from {
			opacity: 0;
			transform: translateY(1rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes pulse {
		0%,
		100% {
			opacity: 0.35;
			transform: scale(0.8);
		}
		50% {
			opacity: 1;
			transform: scale(1);
		}
	}

	@media (max-width: 760px) {
		.home-hero {
			min-height: calc(100svh - 5rem);
			padding-top: 3rem;
		}

		.hero-topline,
		.hero-bottomline {
			align-items: flex-start;
			flex-direction: column;
		}

		.hero-content,
		.now-grid,
		.contact-grid {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.hero-content {
			padding: 5rem 0;
		}

		.hero-aside {
			max-width: 24rem;
		}

		.hero-scroll {
			display: none;
		}

		.section-heading {
			align-items: flex-start;
			flex-direction: column;
		}

		.section-link {
			margin-top: -1.25rem;
		}

		.work-grid {
			grid-template-columns: 1fr;
		}

		.work-card-featured {
			grid-column: span 1;
		}

		.work-card,
		.work-card-featured {
			min-height: 22rem;
		}

		.work-card-content,
		.work-card-featured .work-card-content {
			padding-top: 5rem;
		}

		.work-card-bottom {
			align-items: flex-start;
			flex-direction: column;
		}

		.work-card-bottom a {
			order: -1;
		}

		.now-lead {
			max-width: 24rem;
		}

		.contact-links {
			gap: 1rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.status-dot,
		.work-card {
			animation: none;
		}

		.work-card {
			opacity: 1;
		}
	}
</style>
