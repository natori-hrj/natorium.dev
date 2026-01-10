<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
        <link rel="icon" href={favicon} />
        <title>natori's Site</title>
</svelte:head>

<div class="max-w-screen-md mx-auto px-4 py-8 antialiased">
  <header class="flex justify-between items-center mb-12">
    <a href="/" class="text-xl font-bold hover:text-blue-500 transition-colors"> natori's Site</a>
    <nav class="space-x-4">
      <a href="/blog" class="hover:underline">Blog</a>
      <a href="/about" class="hover:underline">About</a>
    </nav>
  </header>

  <main>
    {@render children()}
  </main>
</div>
