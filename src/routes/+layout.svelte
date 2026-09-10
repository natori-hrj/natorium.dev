<script lang="ts">
	import './layout.css';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import Dock from '$lib/components/Dock.svelte';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import { onNavigate } from '$app/navigation';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import github from 'lucide-svelte/icons/github';
	import twitter from 'lucide-svelte/icons/twitter';
	import linkedin from 'lucide-svelte/icons/linkedin';
	import ZennIcon from '$lib/components/icons/ZennIcon.svelte';
	import LeetCodeIcon from '$lib/components/icons/LeetCodeIcon.svelte';

	let { children } = $props();

	const socialLinks = [
		{ name: 'GitHub', url: 'https://github.com/natori-hrj', icon: github },
		{ name: 'Zenn', url: 'https://zenn.dev/natori_hrj', icon: ZennIcon },
		{ name: 'LeetCode', url: 'https://leetcode.com/u/natori-hrj/', icon: LeetCodeIcon },
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
		{ href: '/about', label: 'About' }
	] as const;
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/profile.png" />
	<title>natori's Site</title>
</svelte:head>

<header class="glass-bar sticky top-0 z-50" style="view-transition-name: header;">
	<!-- 狭い画面ではナビが2行目に折り返す（1行に収めると横幅があふれてページ全体がずれるため） -->
	<div
		class="mx-auto flex max-w-screen-md flex-wrap items-center justify-between gap-y-2 px-4 py-3"
	>
		<a
			href={resolve('/')}
			class="press text-lg font-bold transition-colors hover:text-blue-500 sm:text-xl dark:hover:text-blue-400"
		>
			natori's Site
		</a>
		<nav class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base">
			{#each navLinks as link (link.href)}
				<a
					href={resolve(link.href)}
					aria-current={page.url.pathname.startsWith(link.href) ? 'page' : undefined}
					class="press font-bold text-gray-700 transition-colors hover:text-blue-500 aria-[current=page]:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 dark:aria-[current=page]:text-blue-400"
					>{link.label}</a
				>
			{/each}
			<ThemeToggle />
		</nav>
	</div>
</header>

<!-- 下端に固定。Dockの高さぶんはコンテンツ側に余白を確保して隠れないようにする。 -->
<div class="mx-auto max-w-screen-md px-4 pt-8 pb-32 antialiased">
	<main style="view-transition-name: page;">
		{@render children()}
	</main>
</div>

<!-- ラッパーは操作を透過させ、Dock本体だけクリックできるようにする -->
<footer
	class="dock-bar pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center"
	style="view-transition-name: dock;"
>
	<div class="pointer-events-auto">
		<Dock items={socialLinks} />
	</div>
</footer>
