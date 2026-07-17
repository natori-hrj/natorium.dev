<script lang="ts">
  import './layout.css';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import { page } from '$app/state';
  import { onNavigate } from '$app/navigation';

  let { children } = $props();

  // iOS風のプッシュ/ポップ遷移。戻る操作(popstate, delta<0)は逆方向にスライド。
  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    const isBack = navigation.delta !== undefined && navigation.delta < 0;
    document.documentElement.dataset.nav = isBack ? 'back' : 'forward';

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

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

<header class="glass-bar sticky top-0 z-50" style="view-transition-name: header;">
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
  <main style="view-transition-name: page;">
    {@render children()}
  </main>
</div>
