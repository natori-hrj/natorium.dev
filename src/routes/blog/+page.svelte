<script lang="ts">
  // とりあえず仮のデータ
  const posts = [
  { title: '自己紹介', date: '2026-01-10', slug: 'first-post' },
  { title: '個人サイト開設の話', date: '2026-01-11', slug: 'test' }
  ];
</script>

<h1 class="text-2xl font-bold mb-8">Blog</h1>

<div class="space-y-6">
  {#each posts as post}
    <article class="group">
      <a href="/blog/{post.slug}" class="flex items-baseline justify-between">
        <h2 class="text-lg group-hover:text-blue-500 transition-colors">{post.title}</h2>
        <span class="text-sm text-gray-500 font-mono">{post.date}</span>
      </a>
    </article>
  {/each}
</div>
