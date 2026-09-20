<script lang="ts">
	import { resolve } from '$app/paths';
	import Seo from '$lib/components/Seo.svelte';

	let { data } = $props();
</script>

<Seo
	title={`${data.metadata.title} - natori's Site`}
	description={data.metadata.description ?? data.metadata.title}
	path={`/blog/${data.slug}`}
	type="article"
	publishedTime={data.metadata.date}
	tags={data.metadata.tags}
/>

<article class="max-w-3xl">
	<header class="mb-8 border-b border-black/15 pb-6 dark:border-white/20">
		<h1 class="mb-4 text-4xl font-bold text-black dark:text-white">
			{data.metadata.title}
		</h1>
		<div class="flex items-center gap-4 text-sm text-black/60 dark:text-white/65">
			<time class="font-mono">{data.metadata.date}</time>
			{#if data.metadata.tags && data.metadata.tags.length > 0}
				<div class="flex flex-wrap gap-2">
					{#each data.metadata.tags as tag (tag)}
						<span
							class="rounded-full border border-black/20 px-2 py-1 text-black/70 dark:border-white/25 dark:text-white/75"
						>
							#{tag}
						</span>
					{/each}
				</div>
			{/if}
		</div>
	</header>

	<div
		class="prose max-w-none prose-neutral dark:prose-invert
    prose-headings:text-black dark:prose-headings:text-white
    prose-p:text-black/75 dark:prose-p:text-white/80
    prose-a:text-black prose-a:underline-offset-4 dark:prose-a:text-white
    prose-strong:text-black dark:prose-strong:text-white
    prose-code:text-black dark:prose-code:text-white
    prose-pre:bg-black prose-pre:text-white dark:prose-pre:bg-white dark:prose-pre:text-black
    prose-li:text-black/75 dark:prose-li:text-white/80"
	>
		<data.content />
	</div>

	<footer class="mt-12 border-t border-black/15 pt-6 dark:border-white/20">
		<a
			href={resolve('/blog')}
			class="text-black underline-offset-4 hover:underline dark:text-white"
		>
			← Back to all posts
		</a>
	</footer>
</article>
