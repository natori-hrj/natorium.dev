<script lang="ts">
  import './layout.css';
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
  <link rel="icon" type="image/png" href="/profile.png" />
  <title>natori's Site</title>
</svelte:head>

<header class="glass-bar sticky top-0 z-50">
  <div class="max-w-screen-md mx-auto px-4 py-3 flex justify-between items-center">
    <a
      href="/"
      class="press text-xl font-bold hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
    >
      natori's Site
    </a>
    <nav class="flex items-center space-x-4">
      {#each navLinks as link}
        <a
          href={link.href}
          aria-current={page.url.pathname.startsWith(link.href) ? 'page' : undefined}
          class="press font-bold text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors aria-[current=page]:text-blue-500 dark:aria-[current=page]:text-blue-400"
        >{link.label}</a>
      {/each}
      <ThemeToggle />
    </nav>
  </div>
</header>

<div class="max-w-screen-md mx-auto px-4 py-8 antialiased">
  <main>
    {@render children()}
  </main>
</div>
