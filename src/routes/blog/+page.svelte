<script lang="ts">
  let { data } = $props();
</script>

<h1 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Blog</h1>

{#if data.posts.length === 0}
  <p class="text-gray-600 dark:text-gray-400">記事はまだありません。</p>
{:else}
  <div class="space-y-8">
    {#each data.posts as post}
      <article class="group border-b border-gray-200 dark:border-gray-700 pb-6 last:border-0">
        <a href="/blog/{post.slug}" class="block">
          <h2 class="text-2xl font-bold mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors text-gray-900 dark:text-white">
            {post.title}
          </h2>
          <time class="text-sm text-gray-500 dark:text-gray-400 font-mono block mb-2">
            {post.date}
          </time>
          {#if post.description}
            <p class="text-gray-700 dark:text-gray-300 mb-3">
              {post.description}
            </p>
          {/if}
          {#if post.tags && post.tags.length > 0}
            <div class="flex flex-wrap gap-2">
              {#each post.tags as tag}
                <span class="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
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
