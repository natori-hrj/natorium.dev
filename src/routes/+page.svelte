<script lang="ts">
  import ContributionGraph from '$lib/components/ContributionGraph.svelte';

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

{#if data.contributions}
  <ContributionGraph
    total={data.contributions.total}
    days={data.contributions.days}
    username={data.username}
  />
{/if}
