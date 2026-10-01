<script lang="ts">
	import { resolve } from '$app/paths';
	import { Share2 } from 'lucide-svelte';
	import Seo from '$lib/components/Seo.svelte';

	let { data } = $props();
	let shareStatus = $state<'idle' | 'copied' | 'error'>('idle');

	function formatDate(date: string) {
		return new Intl.DateTimeFormat('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		}).format(new Date(`${date}T00:00:00`));
	}

	async function sharePost() {
		const shareData = {
			title: data.metadata.title,
			text: data.metadata.description ?? data.metadata.title,
			url: window.location.href
		};

		try {
			if (navigator.share) {
				await navigator.share(shareData);
			} else if (navigator.clipboard) {
				await navigator.clipboard.writeText(shareData.url);
				shareStatus = 'copied';
			} else {
				shareStatus = 'error';
			}
		} catch (error) {
			if (error instanceof DOMException && error.name === 'AbortError') return;
			shareStatus = 'error';
		}

		if (shareStatus !== 'idle') {
			window.setTimeout(() => (shareStatus = 'idle'), 1800);
		}
	}
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
		<div
			class="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6 text-sm text-black/60 dark:border-white/15 dark:text-white/65"
		>
			<div class="flex flex-wrap items-center gap-2">
				<span>{data.metadata.author ?? 'natori'}</span>
				<span aria-hidden="true">·</span>
				<span>{data.readingTime} min read</span>
				<span aria-hidden="true">·</span>
				<time datetime={data.metadata.date}>{formatDate(data.metadata.date)}</time>
			</div>

			<button
				type="button"
				class="press inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-black/45 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:text-white/45 dark:hover:text-white dark:focus-visible:outline-white"
				aria-label="Share this article"
				title="Share this article"
				onclick={sharePost}
			>
				<Share2 size={20} strokeWidth={1.6} aria-hidden="true" />
			</button>
		</div>
		{#if shareStatus !== 'idle'}
			<p class="mt-3 text-right text-xs text-black/55 dark:text-white/55" aria-live="polite">
				{shareStatus === 'copied' ? 'Link copied.' : 'Sharing is unavailable.'}
			</p>
		{/if}
		{#if data.metadata.tags && data.metadata.tags.length > 0}
			<div class="mt-5 flex flex-wrap gap-2">
				{#each data.metadata.tags as tag (tag)}
					<span
						class="rounded-full border border-black/20 px-2 py-1 text-black/70 dark:border-white/25 dark:text-white/75"
					>
						#{tag}
					</span>
				{/each}
			</div>
		{/if}
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
