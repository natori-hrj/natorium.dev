<script lang="ts">
  let { data } = $props();
</script>

<svelte:head>
  <title>{data.metadata.title} - natori's Site</title>
  <meta name="description" content={data.metadata.description} />
</svelte:head>

<article class="max-w-3xl">
  <header class="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
    <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
      {data.metadata.title}
    </h1>
    <div class="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
      <time class="font-mono">{data.metadata.date}</time>
      {#if data.metadata.tags && data.metadata.tags.length > 0}
        <div class="flex flex-wrap gap-2">
          {#each data.metadata.tags as tag}
            <span class="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
              #{tag}
            </span>
          {/each}
        </div>
      {/if}
    </div>
  </header>

  <div class="prose prose-gray dark:prose-invert max-w-none
    prose-headings:text-gray-900 dark:prose-headings:text-white
    prose-p:text-gray-700 dark:prose-p:text-gray-300
    prose-a:text-blue-500 dark:prose-a:text-blue-400
    prose-strong:text-gray-900 dark:prose-strong:text-white
    prose-code:text-gray-900 dark:prose-code:text-white
    prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800
    prose-li:text-gray-700 dark:prose-li:text-gray-300">
    <data.content />
  </div>

  <footer class="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
    <a
      href="/blog"
      class="text-blue-500 dark:text-blue-400 hover:underline"
    >
      ← ブログ一覧に戻る
    </a>
  </footer>
</article>
