<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>natori's Site</title>
</svelte:head>

<div class="max-w-screen-md mx-auto px-4 py-8 antialiased">
  <header class="flex justify-between items-center mb-12">
    <a href="/" class="text-xl font-bold hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
      natori's Site
    </a>
    <nav class="flex items-center space-x-4">
      <a href="/blog" class="hover:underline font-bold text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Blog</a>
      <a href="/projects" class="hover:underline font-bold text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Projects</a>
      <a href="/tech-stack" class="hover:underline font-bold text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Tech</a>
      <a href="/uses" class="hover:underline font-bold text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Uses</a>
      <a href="/about" class="hover:underline font-bold text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</a>
      <ThemeToggle />
    </nav>
  </header>
  
  <main>
    {@render children()}
  </main>
</div>
