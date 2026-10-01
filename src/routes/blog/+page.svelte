<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import { resolve } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';

	let { data } = $props();
</script>

<Seo
	title="Blog - natori's Site"
	description="Notes on backend engineering, data platforms, AI, security, and personal development."
	path="/blog"
/>

<div class="blog-page">
	<header class="blog-hero rise">
		<div class="hero-topline">
			<p class="eyebrow">Notes / writing</p>
			<p class="hero-count">{data.posts.length} {data.posts.length === 1 ? 'post' : 'posts'}</p>
		</div>

		<h1>Small notes.<br /><span>Things worth keeping.</span></h1>
		<p class="hero-intro">
			Occasional notes on backend engineering, data platforms, AI, security, and the questions that
			come up while building.
		</p>
	</header>

	<section class="blog-section" aria-labelledby="notes-heading">
		<div class="section-heading">
			<div>
				<p class="section-kicker">01 / Writing</p>
				<h2 id="notes-heading">A running record of what I’m learning.</h2>
			</div>
			<p class="section-note">Updated when there is something to say.</p>
		</div>

		{#if data.posts.length === 0}
			<div class="empty-state">
				<p>No posts yet.</p>
				<span>The next note will show up here.</span>
			</div>
		{:else}
			<div class="post-list">
				{#each data.posts as post, index (post.slug)}
					<article class="post-row">
						<a href={resolve('/blog/[slug]', { slug: post.slug })}>
							<span class="post-index" aria-hidden="true">
								{String(index + 1).padStart(2, '0')}
							</span>

							<div class="post-content">
								<time class="post-date">{post.date}</time>
								<h3>{post.title}</h3>
								{#if post.description}
									<p>{post.description}</p>
								{/if}
								{#if post.tags && post.tags.length > 0}
									<div class="post-tags">
										{#each post.tags as tag (tag)}
											<span>#{tag}</span>
										{/each}
									</div>
								{/if}
							</div>

							<span class="post-arrow" aria-hidden="true">
								<ArrowUpRight size={20} strokeWidth={1.8} />
							</span>
						</a>
					</article>
				{/each}
			</div>
		{/if}
	</section>
</div>

<style>
	.blog-page {
		max-width: 72rem;
		margin: 0 auto;
	}

	.blog-hero {
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
	.post-index,
	.post-date {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		line-height: 1.4;
		text-transform: uppercase;
	}

	.eyebrow,
	.section-kicker,
	.post-index {
		color: color-mix(in srgb, var(--text-color) 52%, transparent);
	}

	.hero-count,
	.section-note,
	.post-date {
		margin: 0;
		color: color-mix(in srgb, var(--text-color) 48%, transparent);
	}

	.blog-hero h1 {
		max-width: 48rem;
		margin: clamp(3.5rem, 9vw, 7rem) 0 1.75rem;
		font-size: clamp(3.4rem, 8vw, 7.5rem);
		font-weight: 800;
		letter-spacing: -0.07em;
		line-height: 0.94;
	}

	.blog-hero h1 span {
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

	.blog-section {
		padding: clamp(4rem, 9vw, 8rem) 0 3rem;
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

	.post-list {
		border-bottom: 1px solid var(--border-color);
	}

	.post-row {
		border-bottom: 1px solid var(--border-color);
	}

	.post-row:last-child {
		border-bottom: 0;
	}

	.post-row a {
		display: grid;
		grid-template-columns: 4rem minmax(0, 1fr) auto;
		align-items: start;
		gap: 2rem;
		padding: 2.75rem 0;
		color: inherit;
		text-decoration: none;
	}

	.post-index {
		padding-top: 0.3rem;
	}

	.post-content {
		min-width: 0;
	}

	.post-date {
		display: block;
		margin-bottom: 0.65rem;
		font-size: 0.68rem;
		letter-spacing: 0.1em;
	}

	.post-content h3 {
		margin: 0;
		font-size: clamp(1.5rem, 3vw, 2.25rem);
		font-weight: 700;
		letter-spacing: -0.04em;
		line-height: 1.15;
		transition: opacity 0.2s ease;
	}

	.post-content p {
		max-width: 42rem;
		margin: 1rem 0 0;
		color: color-mix(in srgb, var(--text-color) 64%, transparent);
		line-height: 1.7;
	}

	.post-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.45rem;
		margin-top: 1.25rem;
	}

	.post-tags span {
		padding: 0.35rem 0.65rem;
		border: 1px solid var(--border-color);
		border-radius: 999px;
		color: color-mix(in srgb, var(--text-color) 66%, transparent);
		font-size: 0.75rem;
	}

	.post-arrow {
		margin-top: 0.25rem;
		transition: transform 0.2s ease;
	}

	.post-row a:hover h3 {
		opacity: 0.55;
	}

	.post-row a:hover .post-arrow {
		transform: translate(0.2rem, -0.2rem);
	}

	.empty-state {
		padding: 3rem 0;
		border-bottom: 1px solid var(--border-color);
	}

	.empty-state p {
		margin: 0 0 0.5rem;
		font-size: 1.4rem;
		font-weight: 700;
	}

	.empty-state span {
		color: color-mix(in srgb, var(--text-color) 55%, transparent);
	}

	@media (max-width: 700px) {
		.hero-topline,
		.section-heading {
			align-items: start;
			flex-direction: column;
			gap: 1rem;
		}

		.blog-hero h1 {
			font-size: clamp(3rem, 15vw, 5rem);
		}

		.section-note {
			align-self: start;
		}

		.post-row a {
			grid-template-columns: 2.5rem minmax(0, 1fr) auto;
			gap: 1rem;
			padding: 2.25rem 0;
		}
	}
</style>
