<script lang="ts">
  import './layout.css';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  import Dock from '$lib/components/Dock.svelte';
  import { page } from '$app/state';
  import { onNavigate } from '$app/navigation';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  import github from 'lucide-svelte/icons/github';
  import twitter from 'lucide-svelte/icons/twitter';
  import linkedin from 'lucide-svelte/icons/linkedin';

  let { children } = $props();

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/natori-hrj', icon: github },
    { name: 'X', url: 'https://x.com/nator1_hrj', icon: twitter },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/ryuji-hanato', icon: linkedin }
  ];

  // Vercel Web Analytics。クライアント遷移も含めてページビューを計測する。
  // 本番(Vercel)でのみ送信され、ローカル/dev では何も送らない。
  injectAnalytics();

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
  <!-- 狭い画面ではナビが2行目に折り返す（1行に収めると横幅があふれてページ全体がずれるため） -->
  <div class="max-w-screen-md mx-auto px-4 py-3 flex flex-wrap justify-between items-center gap-y-2">
    <a
      href="/"
      class="press text-lg sm:text-xl font-bold hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
    >
      natori's Site
    </a>
    <nav class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base">
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

  <footer class="flex justify-center pt-16 pb-6" style="view-transition-name: dock;">
    <Dock items={socialLinks} />
  </footer>
</div>
