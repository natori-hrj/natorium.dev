<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';

	const uses = [
		{
			category: 'Editor',
			items: [
				{
					name: 'Neovim',
					description: 'My primary editor for fast, keyboard-driven development.'
				}
			]
		},
		{
			category: 'Terminal',
			items: [
				{
					name: 'Ghostty',
					description: 'My current terminal for personal development.'
				}
			]
		},
		{
			category: 'AI & development assistance',
			items: [
				{
					name: 'Codex',
					description: 'For implementation, review, and repository maintenance.'
				},
				{
					name: 'Grok Build',
					description: 'For exploring and prototyping personal projects.'
				}
			]
		},
		{
			category: 'Development tools',
			items: [
				{
					name: 'Databricks',
					description: 'For large-scale data processing and data engineering.'
				},
				{
					name: 'herdr',
					description: 'For managing a declarative and reproducible terminal plugin setup.'
				}
			]
		},
		{
			category: 'Services',
			items: [
				{
					name: 'GitHub',
					description: 'For project management, code, and CI/CD.'
				},
				{
					name: 'Vercel',
					description: 'For hosting, preview deployments, and production releases.'
				}
			]
		}
	];
</script>

<Seo
	title="Uses - natori's Site"
	description="The tools natori uses for recent personal development."
	path="/uses"
/>

<div class="uses-page">
	<header class="uses-hero rise">
		<div class="hero-topline">
			<p class="eyebrow">Uses / setup</p>
			<p class="hero-count">{uses.length} groups</p>
		</div>

		<h1>Tools in use.<br /><span>The setup around the work.</span></h1>
		<p class="hero-intro">
			A practical list of the tools and services I currently use to write, build, explore, and ship.
		</p>
	</header>

	<section class="uses-section" aria-labelledby="uses-heading">
		<div class="section-heading">
			<div>
				<p class="section-kicker">01 / Setup</p>
				<h2 id="uses-heading">The tools around the work.</h2>
			</div>
			<p class="section-note">Kept intentionally current.</p>
		</div>

		<div class="uses-list">
			{#each uses as section, index (section.category)}
				<section class="uses-group" aria-labelledby={'uses-' + index}>
					<div class="group-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>

					<div class="group-content">
						<h3 id={'uses-' + index}>{section.category}</h3>

						<div class="use-items">
							{#each section.items as item (item.name)}
								<article class="use-item">
									<h4>{item.name}</h4>
									<p>{item.description}</p>
								</article>
							{/each}
						</div>
					</div>
				</section>
			{/each}
		</div>
	</section>
</div>

<style>
	.uses-page {
		max-width: 72rem;
		margin: 0 auto;
	}

	.uses-hero {
		padding: clamp(3rem, 8vw, 7rem) 0 clamp(4rem, 8vw, 6rem);
		border-bottom: 1px dashed var(--border-color);
	}

	.hero-topline,
	.section-heading {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
	}

	.eyebrow,
	.section-kicker,
	.hero-count,
	.section-note,
	.group-index {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		line-height: 1.4;
		text-transform: uppercase;
	}

	.eyebrow,
	.section-kicker,
	.group-index {
		color: color-mix(in srgb, var(--text-color) 52%, transparent);
	}

	.hero-count,
	.section-note {
		margin: 0;
		color: color-mix(in srgb, var(--text-color) 48%, transparent);
	}

	.uses-hero h1 {
		max-width: 48rem;
		margin: clamp(3.5rem, 9vw, 7rem) 0 1.75rem;
		font-size: clamp(3.4rem, 8vw, 7.5rem);
		font-weight: 800;
		letter-spacing: -0.07em;
		line-height: 0.94;
	}

	.uses-hero h1 span {
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

	.uses-section {
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

	.uses-list {
		border-bottom: 1px solid var(--border-color);
	}

	.uses-group {
		display: grid;
		grid-template-columns: 4rem minmax(0, 1fr);
		gap: 2rem;
		padding: 2.75rem 0;
		border-bottom: 1px solid var(--border-color);
	}

	.uses-group:last-child {
		border-bottom: 0;
	}

	.group-index {
		padding-top: 0.35rem;
	}

	.group-content h3 {
		margin: 0;
		font-size: clamp(1.45rem, 3vw, 2.15rem);
		font-weight: 700;
		letter-spacing: -0.04em;
	}

	.use-items {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 1rem 3rem;
		margin-top: 1.5rem;
	}

	.use-item {
		padding-top: 1rem;
		border-top: 1px dashed var(--border-color);
	}

	.use-item h4 {
		margin: 0;
		font-size: 1.05rem;
		font-weight: 700;
		letter-spacing: -0.02em;
	}

	.use-item p {
		margin: 0.5rem 0 0;
		color: color-mix(in srgb, var(--text-color) 62%, transparent);
		font-size: 0.92rem;
		line-height: 1.7;
	}

	@media (max-width: 700px) {
		.hero-topline,
		.section-heading {
			align-items: start;
			flex-direction: column;
			gap: 1rem;
		}

		.uses-hero h1 {
			font-size: clamp(3rem, 15vw, 5rem);
		}

		.section-note {
			align-self: start;
		}

		.uses-group {
			display: block;
			padding: 2.5rem 0;
		}

		.group-index {
			margin-bottom: 1.5rem;
		}

		.use-items {
			grid-template-columns: 1fr;
		}
	}
</style>
