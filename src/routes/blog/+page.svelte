<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';

	let { data } = $props();
</script>

<Seo
	title="Blog - natori's Site"
	description="Notes on backend engineering, data platforms, AI, and personal development."
	path="/blog"
/>

<h1 class="mb-8 text-3xl font-bold text-black dark:text-white">Blog</h1>

{#if data.posts.length === 0}
	<p class="text-black/60 dark:text-white/65">No posts yet.</p>
{:else}
	<div class="space-y-8">
		{#each data.posts as post (post.slug)}
			<article class="group border-b border-black/15 pb-6 last:border-0 dark:border-white/20">
				<a href={resolve('/blog/[slug]', { slug: post.slug })} class="block">
					<h2
						class="mb-2 text-2xl font-bold text-black transition-opacity group-hover:opacity-60 dark:text-white"
					>
						{post.title}
					</h2>
					<time class="mb-2 block font-mono text-sm text-black/50 dark:text-white/55">
						{post.date}
					</time>
					{#if post.description}
						<p class="mb-3 text-black/70 dark:text-white/75">
							{post.description}
						</p>
					{/if}
					{#if post.tags && post.tags.length > 0}
						<div class="flex flex-wrap gap-2">
							{#each post.tags as tag (tag)}
								<span
									class="rounded-full border border-black/20 px-2 py-1 text-xs text-black/70 dark:border-white/25 dark:text-white/75"
								>
									#{tag}
								</span>
							{/each}
						</div>
					{/if}
				</a>
			</article>
		{/each}
	</div>
{/if}
