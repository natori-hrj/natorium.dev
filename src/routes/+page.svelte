<script lang="ts">
	import ContributionGraph from '$lib/components/ContributionGraph.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import { Star, ArrowUpRight } from 'lucide-svelte';

	let { data } = $props();

	const profile = {
		name: 'natori',
		title: 'Backend Engineer · Data & AI',
		description:
			'Building large-scale data platforms and exploring\npractical applications of data and AI.'
	};
</script>

<Seo
	title="natori — Backend Engineer · Data & AI"
	description="natori's personal website and blog about backend engineering, data platforms, and AI."
	path="/"
/>

<div class="rise flex flex-col items-center justify-center py-20 text-center sm:py-28">
	<div
		class="press mb-8 h-24 w-24 overflow-hidden rounded-3xl border border-black transition-opacity hover:opacity-70 dark:border-white"
	>
		<img src="/profile.jpg" alt={profile.name} class="h-full w-full" />
	</div>

	<h1 class="mb-3 font-sans text-4xl font-bold tracking-tight text-black dark:text-white">
		@{profile.name}
	</h1>

	<p class="mb-6 text-sm font-medium tracking-wide text-black/60 dark:text-white/65">
		@{profile.title}
	</p>

	<div class="max-w-md">
		<p class="text-lg leading-relaxed whitespace-pre-line text-black italic dark:text-white">
			"{profile.description}"
		</p>
	</div>
</div>

<section aria-labelledby="featured-heading" class="mb-12">
	<h2
		id="featured-heading"
		class="mb-4 text-xs font-bold tracking-widest text-black/55 uppercase dark:text-white/60"
	>
		Featured Project
	</h2>

	<a
		href={data.featured.url}
		target="_blank"
		rel="external noopener noreferrer"
		class="press group block rounded-2xl border border-black/20 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-white/25 dark:bg-black"
	>
		<div class="mb-2 flex items-center gap-3">
			<h3 class="text-xl font-bold text-black dark:text-white">
				{data.featured.name}
			</h3>

			{#if data.featured.stars !== null}
				<span
					class="inline-flex items-center gap-1 rounded-full border border-black/20 px-2 py-0.5 text-xs font-semibold text-black/70 dark:border-white/25 dark:text-white/75"
				>
					<Star size={12} />
					{data.featured.stars}
				</span>
			{/if}

			<ArrowUpRight
				size={18}
				class="ml-auto text-black/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-white/65"
			/>
		</div>

		<p class="mb-4 text-black/70 dark:text-white/75">
			{data.featured.description}
		</p>

		<div class="flex flex-wrap gap-2">
			<span
				class="rounded-full bg-black px-3 py-1 text-sm text-white dark:bg-white dark:text-black"
			>
				{data.featured.language}
			</span>
			{#each data.featured.topics as topic (topic)}
				<span
					class="rounded-full border border-black/20 px-3 py-1 text-sm text-black/75 dark:border-white/25 dark:text-white/80"
				>
					{topic}
				</span>
			{/each}
		</div>
	</a>
</section>

{#if data.contributions}
	<ContributionGraph
		total={data.contributions.total}
		days={data.contributions.days}
		username={data.username}
	/>
{/if}
