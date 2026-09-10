<script lang="ts">
	import { resolve } from '$app/paths';

	let { data } = $props();
</script>

<h1 class="mb-8 text-3xl font-bold text-gray-900 dark:text-white">Blog</h1>

{#if data.posts.length === 0}
	<p class="text-gray-600 dark:text-gray-400">記事はまだありません。</p>
{:else}
	<div class="space-y-8">
		{#each data.posts as post (post.slug)}
			<article class="group border-b border-gray-200 pb-6 last:border-0 dark:border-gray-700">
				<a href={resolve('/blog/[slug]', { slug: post.slug })} class="block">
					<h2
						class="mb-2 text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-500 dark:text-white dark:group-hover:text-blue-400"
					>
						{post.title}
					</h2>
					<time class="mb-2 block font-mono text-sm text-gray-500 dark:text-gray-400">
						{post.date}
					</time>
					{#if post.description}
						<p class="mb-3 text-gray-700 dark:text-gray-300">
							{post.description}
						</p>
					{/if}
					{#if post.tags && post.tags.length > 0}
						<div class="flex flex-wrap gap-2">
							{#each post.tags as tag (tag)}
								<span
									class="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
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
