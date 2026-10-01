<script lang="ts">
	import { resolve } from '$app/paths';
	import { Copy, MessageCircle, Share2, X } from 'lucide-svelte';
	import Seo from '$lib/components/Seo.svelte';

	let { data } = $props();
	let shareDialogOpen = $state(false);
	let shareStatus = $state<'idle' | 'copied' | 'error'>('idle');

	function getPostUrl() {
		return `https://natorium.dev/blog/${data.slug}`;
	}

	function getXShareUrl() {
		const postUrl = getPostUrl();
		return `https://x.com/intent/post?text=${encodeURIComponent(data.metadata.title)}&url=${encodeURIComponent(postUrl)}`;
	}

	function getWhatsAppShareUrl() {
		return `https://wa.me/?text=${encodeURIComponent(`${data.metadata.title} ${getPostUrl()}`)}`;
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
		} catch (error) {
			console.error('Could not copy article URL.', error);
			shareStatus = 'error';
		}

		window.setTimeout(() => (shareStatus = 'idle'), 1800);
	}

	function closeShareDialog() {
		shareDialogOpen = false;
	}

	function closeShareDialogOnEscape(event: KeyboardEvent) {
		if (event.key === 'Escape' && shareDialogOpen) closeShareDialog();
	}
</script>

<svelte:window onkeydown={closeShareDialogOnEscape} />

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
					aria-haspopup="dialog"
					title="Share this article"
					onclick={() => {
						shareStatus = 'idle';
						shareDialogOpen = true;
					}}
				>
					<Share2 size={20} strokeWidth={1.6} aria-hidden="true" />
				</button>
			</div>
		</div>
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

{#if shareDialogOpen}
	<button
		type="button"
		class="fixed inset-0 z-40 cursor-default bg-black/35 dark:bg-black/60"
		aria-label="Close share dialog"
		onclick={closeShareDialog}
	></button>
	<div class="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4">
		<div
			role="dialog"
			aria-modal="true"
			aria-labelledby="share-dialog-title"
			class="pointer-events-auto w-full max-w-sm rounded-2xl bg-white p-5 text-black shadow-2xl dark:bg-neutral-950 dark:text-white"
		>
			<div class="flex items-center justify-between gap-4">
				<h2 id="share-dialog-title" class="text-base font-semibold tracking-tight">
					Share this post
				</h2>
				<button
					type="button"
					class="inline-flex h-9 w-9 items-center justify-center rounded-full text-black/40 transition-colors hover:bg-black/5 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:text-white/45 dark:hover:bg-white/10 dark:hover:text-white dark:focus-visible:outline-white"
					aria-label="Close share dialog"
					onclick={closeShareDialog}
				>
					<X size={18} strokeWidth={1.6} aria-hidden="true" />
				</button>
			</div>

			<input
				class="mt-4 h-10 w-full rounded-lg bg-black/[0.03] px-3 text-sm text-black/45 outline-none dark:bg-white/[0.06] dark:text-white/45"
				value={getPostUrl()}
				readonly
				aria-label="Article URL"
				onclick={(event) => event.currentTarget.select()}
			/>

			{#if shareStatus !== 'idle'}
				<p class="mt-2 text-xs text-black/55 dark:text-white/55" aria-live="polite">
					{shareStatus === 'copied' ? 'Link copied.' : 'Could not copy the link.'}
				</p>
			{/if}

			<div class="mt-4 space-y-1">
				<button
					type="button"
					class="flex min-h-14 w-full items-center gap-4 rounded-xl px-3 text-left transition-colors hover:bg-black/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:hover:bg-white/[0.08] dark:focus-visible:outline-white"
					onclick={copyLink}
				>
					<span
						class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/[0.04] text-black/70 dark:bg-white/[0.08] dark:text-white/75"
					>
						<Copy size={17} strokeWidth={1.7} aria-hidden="true" />
					</span>
					<span class="text-sm font-medium">Copy link</span>
				</button>

				<a
					href={getXShareUrl()}
					target="_blank"
					rel="external noopener noreferrer"
					class="flex min-h-14 w-full items-center gap-4 rounded-xl px-3 text-left transition-colors hover:bg-black/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:hover:bg-white/[0.08] dark:focus-visible:outline-white"
					onclick={closeShareDialog}
				>
					<span
						class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/[0.04] text-base text-black/70 dark:bg-white/[0.08] dark:text-white/75"
						aria-hidden="true"
					>
						𝕏
					</span>
					<span class="text-sm font-medium">Share on X</span>
				</a>

				<a
					href={getWhatsAppShareUrl()}
					target="_blank"
					rel="external noopener noreferrer"
					class="flex min-h-14 w-full items-center gap-4 rounded-xl px-3 text-left transition-colors hover:bg-black/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:hover:bg-white/[0.08] dark:focus-visible:outline-white"
					onclick={closeShareDialog}
				>
					<span
						class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/[0.04] text-black/70 dark:bg-white/[0.08] dark:text-white/75"
					>
						<MessageCircle size={17} strokeWidth={1.7} aria-hidden="true" />
					</span>
					<span class="text-sm font-medium">Share on WhatsApp</span>
				</a>
			</div>
		</div>
	</div>
{/if}
