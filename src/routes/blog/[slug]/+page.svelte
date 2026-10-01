<script lang="ts">
	import { resolve } from '$app/paths';
	import { Copy, Share2 } from 'lucide-svelte';
	import Seo from '$lib/components/Seo.svelte';

	let { data } = $props();
	let shareMenuOpen = $state(false);
	let shareStatus = $state<'idle' | 'copied' | 'error'>('idle');

	function getPostUrl() {
		return `https://natorium.dev/blog/${data.slug}`;
	}

	function getXShareUrl() {
		const postUrl = getPostUrl();
		return `https://x.com/intent/post?text=${encodeURIComponent(data.metadata.title)}&url=${encodeURIComponent(postUrl)}`;
	}

	function formatDate(date: string) {
		return new Intl.DateTimeFormat('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		}).format(new Date(`${date}T00:00:00`));
	}

	async function copyLink() {
		const postUrl = getPostUrl();

		try {
			if (navigator.clipboard) {
				await navigator.clipboard.writeText(postUrl);
			} else {
				const textArea = document.createElement('textarea');
				textArea.value = postUrl;
				textArea.style.position = 'fixed';
				textArea.style.opacity = '0';
				document.body.appendChild(textArea);
				textArea.select();
				const copied = document.execCommand('copy');
				textArea.remove();

				if (!copied) throw new Error('Copy failed');
			}

			shareStatus = 'copied';
			shareMenuOpen = false;
		} catch (error) {
			console.error('Could not copy article URL.', error);
			shareStatus = 'error';
		}

		window.setTimeout(() => (shareStatus = 'idle'), 1800);
	}

	function closeShareMenuOnEscape(event: KeyboardEvent) {
		if (event.key === 'Escape') shareMenuOpen = false;
	}
</script>

<svelte:window onkeydown={closeShareMenuOnEscape} />

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

			<div class="relative">
				<button
					type="button"
					class="press inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-black/45 transition-colors hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:text-white/45 dark:hover:text-white dark:focus-visible:outline-white"
					aria-label="Share this article"
					aria-controls="share-menu"
					aria-expanded={shareMenuOpen}
					aria-haspopup="menu"
					title="Share this article"
					onclick={() => (shareMenuOpen = !shareMenuOpen)}
				>
					<Share2 size={20} strokeWidth={1.6} aria-hidden="true" />
				</button>

				{#if shareMenuOpen}
					<div
						id="share-menu"
						role="menu"
						class="absolute top-full right-0 z-20 mt-2 min-w-44 rounded-lg border border-black/15 bg-white p-1 text-left text-sm shadow-lg dark:border-white/20 dark:bg-black"
					>
						<button
							type="button"
							role="menuitem"
							class="flex min-h-10 w-full items-center gap-2 rounded-md px-3 text-black/75 transition-colors hover:bg-black/5 hover:text-black dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
							onclick={copyLink}
						>
							<Copy size={16} strokeWidth={1.7} aria-hidden="true" />
							Copy link
						</button>
						<a
							href={getXShareUrl()}
							target="_blank"
							rel="external noopener noreferrer"
							role="menuitem"
							class="flex min-h-10 items-center gap-2 rounded-md px-3 text-black/75 transition-colors hover:bg-black/5 hover:text-black dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
							onclick={() => (shareMenuOpen = false)}
						>
							<span class="text-base leading-none" aria-hidden="true">𝕏</span>
							Post on X
						</a>
					</div>
				{/if}
			</div>
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
