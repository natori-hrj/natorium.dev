<script lang="ts">
  import { page } from '$app/state';
</script>

<svelte:head>
  <title>{page.status} - natori's Site</title>
</svelte:head>

<div class="flex flex-col items-center justify-center py-20 text-center">
  <h1 class="text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
    {page.status}
  </h1>
  <p class="text-xl text-gray-600 dark:text-gray-400 mb-8">
    {page.error?.message ?? 'ページが見つかりませんでした'}
  </p>
  <a
    href="/"
    class="text-blue-500 dark:text-blue-400 hover:underline font-bold transition-colors"
  >
    トップページに戻る
  </a>
</div>
