<script lang="ts">
  import ContributionGraph from '$lib/components/ContributionGraph.svelte';
  import { Star, ArrowUpRight } from 'lucide-svelte';

  let { data } = $props();

  const profile = {
    name: "natori",
    title: "Backend Engineer (大規模データ基盤 / データ×AI)",
    description: "某大手物流企業で大規模データ基盤の開発や、\n データ×AIの活用・実証に取り組んでいます。",
  };
</script>

<svelte:head>
  <meta name="description" content="natori - Backend Engineer. 大規模データ処理やWebアプリ開発に携わっています。" />
</svelte:head>

<div class="rise flex flex-col items-center justify-center py-16 text-center">
  <div class="press mb-8 overflow-hidden rounded-full w-32 h-32 border-2 border-gray-200 dark:border-gray-700 shadow-sm hover:scale-105 transition-transform">
    <img src="/profile.png" alt={profile.name} class="w-full h-full object-cover" />
  </div>

  <h1 class="font-sans text-4xl font-extrabold tracking-tight mb-2 text-gray-900 dark:text-white">
    @{profile.name}
  </h1>

  <p class="text-gray-600 dark:text-gray-400 font-medium mb-6">
    @{profile.title}
  </p>

  <div class="max-w-md">
    <p class="text-lg text-gray-900 dark:text-gray-300 leading-relaxed italic whitespace-pre-line">
      "{profile.description}"
    </p>
  </div>
</div>

<section aria-labelledby="featured-heading" class="mb-12">
  <h2
    id="featured-heading"
    class="mb-4 text-xs font-bold tracking-widest text-gray-500 uppercase dark:text-gray-500"
  >
    Featured Project
  </h2>

  <a
    href={data.featured.url}
    target="_blank"
    rel="noopener noreferrer"
    class="press group block rounded-xl border border-gray-200 p-5 transition-colors hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600"
  >
    <div class="mb-2 flex items-center gap-3">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white">
        {data.featured.name}
      </h3>

      {#if data.featured.stars !== null}
        <span
          class="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300"
        >
          <Star size={12} />
          {data.featured.stars}
        </span>
      {/if}

      <ArrowUpRight
        size={18}
        class="ml-auto text-gray-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </div>

    <p class="mb-4 text-gray-700 dark:text-gray-300">
      {data.featured.description}
    </p>

    <div class="flex flex-wrap gap-2">
      <span
        class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900 dark:text-blue-300"
      >
        {data.featured.language}
      </span>
      {#each data.featured.topics as topic}
        <span
          class="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
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
