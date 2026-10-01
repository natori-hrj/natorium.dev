<script lang="ts">
	import { Bot, Cloud, Code2, Database, Server, Wrench } from 'lucide-svelte';
	import Seo from '$lib/components/Seo.svelte';

	const techStack = [
		{
			category: 'Languages',
			icon: Code2,
			items: ['Python', 'Go', 'TypeScript / JavaScript', 'Rust']
		},
		{
			category: 'Web & frontend',
			icon: Server,
			items: ['SvelteKit / Svelte', 'Tailwind CSS', 'Vite', 'mdsvex']
		},
		{
			category: 'Data engineering',
			icon: Database,
			items: ['Databricks']
		},
		{
			category: 'AI & coding agents',
			icon: Bot,
			items: ['Codex', 'Grok Build']
		},
		{
			category: 'Development environment',
			icon: Wrench,
			items: ['Neovim', 'Ghostty', 'herdr', 'Git / GitHub', 'npm']
		},
		{
			category: 'Deployment',
			icon: Cloud,
			items: ['Vercel']
		}
	];
</script>

<Seo
	title="Tech Stack - natori's Site"
	description="A current snapshot of the technologies natori uses in personal projects."
	path="/tech-stack"
/>

<div class="stack-page">
	<header class="stack-hero rise">
		<div class="hero-topline">
			<p class="eyebrow">Stack / current</p>
			<p class="hero-count">{techStack.length} categories</p>
		</div>

		<h1>Tools are choices.<br /><span>Not a checklist.</span></h1>
		<p class="hero-intro">
			A current snapshot of the languages, frameworks, data tools, and environments I reach for in
			personal development.
		</p>
	</header>

	<section class="stack-section" aria-labelledby="stack-heading">
		<div class="section-heading">
			<div>
				<p class="section-kicker">01 / Toolkit</p>
				<h2 id="stack-heading">A small, working toolkit.</h2>
			</div>
			<p class="section-note">Kept intentionally current.</p>
		</div>

		<div class="stack-list">
			{#each techStack as { category, icon, items }, index (category)}
				<section class="stack-group" aria-labelledby={'stack-' + index}>
					<div class="group-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>

					<div class="group-content">
						<div class="group-heading">
							<div class="group-icon" aria-hidden="true">
								<svelte:component this={icon} size={19} strokeWidth={1.8} />
							</div>
							<h3 id={'stack-' + index}>{category}</h3>
						</div>

						<div class="stack-items">
							{#each items as item (item)}
								<span>{item}</span>
							{/each}
						</div>
					</div>
				</section>
			{/each}
		</div>
	</section>
</div>

<style>
	.stack-page {
		max-width: 72rem;
		margin: 0 auto;
	}

	.stack-hero {
		padding: clamp(3rem, 8vw, 7rem) 0 clamp(4rem, 8vw, 6rem);
		border-bottom: 1px dashed var(--border-color);
	}

	.hero-topline,
	.section-heading,
	.group-heading {
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

	.stack-hero h1 {
		max-width: 48rem;
		margin: clamp(3.5rem, 9vw, 7rem) 0 1.75rem;
		font-size: clamp(3.4rem, 8vw, 7.5rem);
		font-weight: 800;
		letter-spacing: -0.07em;
		line-height: 0.94;
	}

	.stack-hero h1 span {
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

	.stack-section {
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

	.stack-list {
		border-bottom: 1px solid var(--border-color);
	}

	.stack-group {
		display: grid;
		grid-template-columns: 4rem minmax(0, 1fr);
		gap: 2rem;
		padding: 2.75rem 0;
		border-bottom: 1px solid var(--border-color);
	}

	.stack-group:last-child {
		border-bottom: 0;
	}

	.group-index {
		padding-top: 0.4rem;
	}

	.group-heading {
		justify-content: start;
		gap: 0.8rem;
	}

	.group-icon {
		display: grid;
		width: 2.25rem;
		height: 2.25rem;
		place-items: center;
		border: 1px solid var(--border-color);
		border-radius: 999px;
	}

	.group-heading h3 {
		margin: 0;
		font-size: clamp(1.45rem, 3vw, 2.15rem);
		font-weight: 700;
		letter-spacing: -0.04em;
	}

	.stack-items {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1.5rem;
	}

	.stack-items span {
		padding: 0.45rem 0.75rem;
		border: 1px solid var(--border-color);
		border-radius: 999px;
		color: color-mix(in srgb, var(--text-color) 70%, transparent);
		font-size: 0.82rem;
	}

	@media (max-width: 700px) {
		.hero-topline,
		.section-heading {
			align-items: start;
			flex-direction: column;
			gap: 1rem;
		}

		.stack-hero h1 {
			font-size: clamp(3rem, 15vw, 5rem);
		}

		.section-note {
			align-self: start;
		}

		.stack-group {
			display: block;
			padding: 2.5rem 0;
		}

		.group-index {
			margin-bottom: 1.5rem;
		}
	}
</style>
