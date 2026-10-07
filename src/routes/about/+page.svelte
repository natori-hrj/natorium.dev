<script lang="ts">
	import { ArrowUpRight, Github, GitPullRequest, Shield } from 'lucide-svelte';
	import Seo from '$lib/components/Seo.svelte';

	const experience = [
		{
			title: 'Building large-scale data platforms',
			description:
				'Designing incremental pipelines and data systems at logistics scale, including workloads of roughly 5 billion parcel records per year.'
		},
		{
			title: 'Designing backends and access control',
			description:
				'Working across BFFs, APIs, authentication, authorization, and web applications with TypeScript, Hono, tRPC, OpenAPI, Go, and Python.'
		},
		{
			title: 'Evaluating data and AI use cases',
			description:
				'Comparing practical approaches such as GraphRAG and RAG across answer quality, cost, and latency.'
		}
	];
</script>

<Seo
	title="About - natori's Site"
	description="About natori, a backend engineer broadly interested in security, data, and AI."
	path="/about"
/>

<div class="about-page">
	<header class="about-hero rise">
		<div class="hero-topline">
			<p class="eyebrow">About / profile</p>
			<p class="hero-count">Based in Japan</p>
		</div>

		<h1>Backend by practice.<br /><span>Security by curiosity.</span></h1>
		<p class="hero-intro">
			I’m a backend engineer working on data platforms, APIs, and practical applications of data and
			AI. I’m broadly interested in security — not limited to software.
		</p>
	</header>

	<section class="about-section focus-section" aria-labelledby="focus-heading">
		<div class="section-heading">
			<div>
				<p class="section-kicker">01 / Focus</p>
				<h2 id="focus-heading">The questions I keep returning to.</h2>
			</div>
		</div>

		<div class="focus-statement">
			<div class="focus-icon" aria-hidden="true">
				<Shield size={22} strokeWidth={1.8} />
			</div>
			<p>How do we make systems more trustworthy, resilient, and secure?</p>
		</div>
	</section>

	<section class="about-section" aria-labelledby="experience-heading">
		<div class="section-heading">
			<div>
				<p class="section-kicker">02 / Experience</p>
				<h2 id="experience-heading">What I work on.</h2>
			</div>
		</div>

		<div class="profile-list">
			{#each experience as item, index (item.title)}
				<article class="profile-row">
					<span class="row-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
					<div>
						<h3>{item.title}</h3>
						<p>{item.description}</p>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<section class="about-section" aria-labelledby="open-source-heading">
		<div class="section-heading">
			<div>
				<p class="section-kicker">03 / Open source</p>
				<h2 id="open-source-heading">A few public traces.</h2>
			</div>
		</div>

		<div class="public-list">
			<article class="public-row">
				<div class="public-icon" aria-hidden="true">
					<GitPullRequest size={19} strokeWidth={1.8} />
				</div>
				<div class="public-content">
					<div class="public-heading">
						<h3>Headroom #2436</h3>
						<a
							href="https://github.com/headroomlabs-ai/headroom/pull/2436"
							target="_blank"
							rel="external noopener noreferrer"
						>
							View PR
							<ArrowUpRight size={16} strokeWidth={1.8} />
						</a>
					</div>
					<p>Merged fix for Docker port configuration, health checks, and doctor diagnostics.</p>
				</div>
			</article>
			<article class="public-row">
				<div class="public-icon" aria-hidden="true">
					<Github size={19} strokeWidth={1.8} />
				</div>
				<div class="public-content">
					<div class="public-heading">
						<h3>herdr-lazy</h3>
						<a
							href="https://github.com/natori-hrj/herdr-lazy"
							target="_blank"
							rel="external noopener noreferrer"
						>
							GitHub
							<ArrowUpRight size={16} strokeWidth={1.8} />
						</a>
					</div>
					<p>Completed personal project; maintenance as needed.</p>
				</div>
			</article>

			<article class="public-row">
				<div class="public-icon" aria-hidden="true">
					<GitPullRequest size={19} strokeWidth={1.8} />
				</div>
				<div class="public-content">
					<div class="public-heading">
						<h3>TiDB #68697</h3>
						<a
							href="https://github.com/pingcap/tidb/pull/68697"
							target="_blank"
							rel="external noopener noreferrer"
						>
							View PR
							<ArrowUpRight size={16} strokeWidth={1.8} />
						</a>
					</div>
					<p>My first open-source contribution, a merged bug-fix PR for TiDB.</p>
				</div>
			</article>
		</div>
	</section>

	<section class="about-section contact-section" aria-labelledby="contact-heading">
		<div class="section-heading">
			<div>
				<p class="section-kicker">04 / Contact</p>
				<h2 id="contact-heading">Find me in the usual places.</h2>
			</div>
		</div>

		<div class="contact-links">
			<a href="https://github.com/natori-hrj" target="_blank" rel="external noopener noreferrer">
				<Github size={18} strokeWidth={1.8} />
				GitHub
				<ArrowUpRight size={16} strokeWidth={1.8} />
			</a>
			<a href="https://x.com/nator1_hrj" target="_blank" rel="external noopener noreferrer">
				<span class="x-mark">𝕏</span>
				X
				<ArrowUpRight size={16} strokeWidth={1.8} />
			</a>
		</div>
	</section>
</div>

<style>
	.about-page {
		max-width: 72rem;
		margin: 0 auto;
	}

	.about-hero {
		padding: clamp(3rem, 8vw, 7rem) 0 clamp(4rem, 8vw, 6rem);
		border-bottom: 1px dashed var(--border-color);
	}

	.hero-topline,
	.section-heading,
	.public-heading {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
	}

	.eyebrow,
	.section-kicker,
	.hero-count,
	.row-index {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		line-height: 1.4;
		text-transform: uppercase;
	}

	.eyebrow,
	.section-kicker,
	.row-index {
		color: color-mix(in srgb, var(--text-color) 52%, transparent);
	}

	.hero-count {
		margin: 0;
		color: color-mix(in srgb, var(--text-color) 48%, transparent);
	}

	.about-hero h1 {
		max-width: 48rem;
		margin: clamp(3.5rem, 9vw, 7rem) 0 1.75rem;
		font-size: clamp(3.4rem, 8vw, 7.5rem);
		font-weight: 800;
		letter-spacing: -0.07em;
		line-height: 0.94;
	}

	.about-hero h1 span {
		color: color-mix(in srgb, var(--text-color) 38%, transparent);
		font-style: italic;
		font-weight: 400;
	}

	.hero-intro {
		max-width: 38rem;
		margin: 0;
		color: color-mix(in srgb, var(--text-color) 68%, transparent);
		font-size: 1.05rem;
		line-height: 1.75;
	}

	.about-section {
		padding: clamp(4rem, 9vw, 8rem) 0 0;
	}

	.contact-section {
		padding-bottom: 3rem;
	}

	.section-heading {
		align-items: end;
		padding-bottom: 2rem;
		border-bottom: 1px dashed var(--border-color);
	}

	.section-heading h2 {
		max-width: 42rem;
		margin: 0.75rem 0 0;
		font-size: clamp(1.8rem, 4vw, 3.25rem);
		font-weight: 700;
		letter-spacing: -0.045em;
	}

	.focus-statement {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 2.5rem 0;
		border-bottom: 1px solid var(--border-color);
	}

	.focus-icon,
	.public-icon {
		display: grid;
		flex-shrink: 0;
		width: 2.5rem;
		height: 2.5rem;
		place-items: center;
		border: 1px solid var(--border-color);
		border-radius: 999px;
	}

	.focus-statement p {
		margin: 0;
		font-size: clamp(1.3rem, 3vw, 2.15rem);
		font-weight: 600;
		letter-spacing: -0.035em;
		line-height: 1.2;
	}

	.profile-list,
	.public-list {
		border-bottom: 1px solid var(--border-color);
	}

	.profile-row {
		display: grid;
		grid-template-columns: 4rem minmax(0, 1fr);
		gap: 2rem;
		padding: 2.75rem 0;
		border-bottom: 1px solid var(--border-color);
	}

	.profile-row:last-child,
	.public-row:last-child {
		border-bottom: 0;
	}

	.row-index {
		padding-top: 0.3rem;
	}

	.profile-row h3,
	.public-heading h3 {
		margin: 0;
		font-size: clamp(1.35rem, 3vw, 2rem);
		font-weight: 700;
		letter-spacing: -0.04em;
		line-height: 1.15;
	}

	.profile-row p,
	.public-content p {
		max-width: 42rem;
		margin: 0.8rem 0 0;
		color: color-mix(in srgb, var(--text-color) 64%, transparent);
		line-height: 1.7;
	}

	.public-row {
		display: grid;
		grid-template-columns: 2.5rem minmax(0, 1fr);
		gap: 1rem;
		padding: 2.5rem 0;
		border-bottom: 1px solid var(--border-color);
	}

	.public-heading {
		align-items: start;
	}

	.public-heading a,
	.contact-links a {
		display: inline-flex;
		align-items: center;
		flex-shrink: 0;
		gap: 0.45rem;
		color: var(--text-color);
		font-size: 0.82rem;
		font-weight: 600;
		text-decoration: underline;
		text-decoration-color: var(--border-color);
		text-underline-offset: 0.25rem;
		transition: opacity 0.2s ease;
	}

	.public-heading a:hover,
	.contact-links a:hover {
		opacity: 0.55;
	}

	.contact-links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.7rem;
		padding: 2rem 0 0;
	}

	.contact-links a {
		padding: 0.75rem 1rem;
		border: 1px solid var(--border-color);
		border-radius: 999px;
		text-decoration: none;
	}

	.x-mark {
		font-size: 1rem;
		line-height: 1;
	}

	@media (max-width: 700px) {
		.hero-topline,
		.section-heading,
		.public-heading {
			align-items: start;
			flex-direction: column;
			gap: 1rem;
		}

		.about-hero h1 {
			font-size: clamp(3rem, 15vw, 5rem);
		}

		.profile-row {
			display: block;
			padding: 2.5rem 0;
		}

		.row-index {
			display: block;
			margin-bottom: 1.5rem;
		}

		.public-heading a {
			margin-top: 0.15rem;
		}
	}
</style>
