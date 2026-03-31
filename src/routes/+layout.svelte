<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import { page } from '$app/state';

  let { children } = $props();

  const navLinks = [
    { href: '/blog', label: 'Blog' },
    { href: '/projects', label: 'Projects' },
    { href: '/tech-stack', label: 'Tech' },
    { href: '/uses', label: 'Uses' },
    { href: '/about', label: 'About' },
  ];
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
      {#each navLinks as link}
        <a
          href={link.href}
          aria-current={page.url.pathname.startsWith(link.href) ? 'page' : undefined}
          class="hover:underline font-bold text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >{link.label}</a>
      {/each}
      <ThemeToggle />
    </nav>
  </header>
  
  <main>
    {@render children()}
  </main>
</div>
