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
	import LeetCodeIcon from '$lib/components/icons/LeetCodeIcon.svelte';

	let { children } = $props();

	const socialLinks = [
		{ name: 'GitHub', url: 'https://github.com/natori-hrj', icon: github },
		{ name: 'LeetCode', url: 'https://leetcode.com/u/natori-hrj/', icon: LeetCodeIcon },
		{ name: 'X', url: 'https://x.com/nator1_hrj', icon: twitter },
		{ name: 'LinkedIn', url: 'https://linkedin.com/in/ryuji-hanato', icon: linkedin }
	];

	// Vercel Web Analytics. Tracks page views, including client-side navigation.
	// Events are sent only in production; local development sends nothing.
	injectAnalytics();

	// iOS-style push/pop transitions. Back navigation (popstate, delta<0) slides in the opposite direction.
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
		{ href: '/tech-stack', label: 'Tech Stack' },
		{ href: '/uses', label: 'Uses' },
		{ href: '/about', label: 'About' }
	] as const;
</script>

<svelte:head>
	<title>natorium.dev</title>
</svelte:head>

<header class="site-header sticky top-0 z-50" style="view-transition-name: header;">
	<!-- Allow the navigation to wrap on narrow screens so the page never overflows horizontally. -->
	<div
		class="mx-auto flex max-w-screen-md flex-wrap items-center justify-between gap-y-2 px-4 py-3"
	>
		<a
			href={resolve('/')}
			class="press inline-flex items-center gap-2 text-sm font-bold tracking-[0.18em] uppercase transition-opacity hover:opacity-60 sm:text-base"
		>
			<img src="/profile.jpg" alt="" aria-hidden="true" class="h-6 w-6" />
			<span>natori</span>
		</a>
		<nav class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base">
			{#each navLinks as link (link.href)}
				<a
					href={resolve(link.href)}
					aria-current={page.url.pathname.startsWith(link.href) ? 'page' : undefined}
					class="press font-medium text-black/60 transition-opacity hover:opacity-100 aria-[current=page]:text-black aria-[current=page]:underline aria-[current=page]:underline-offset-4 dark:text-white/65 dark:aria-[current=page]:text-white"
					>{link.label}</a
				>
			{/each}
			<ThemeToggle />
		</nav>
	</div>
</header>

<!-- Keep the dock fixed to the bottom and reserve space so content is not hidden behind it. -->
<div class="mx-auto max-w-screen-md px-4 pt-8 pb-32 antialiased">
	<main style="view-transition-name: page;">
		{@render children()}
	</main>
</div>

<!-- Let pointer events pass through the wrapper; only the dock itself is interactive. -->
<footer
	class="dock-bar pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center"
	style="view-transition-name: dock;"
>
	<div class="pointer-events-auto">
		<Dock items={socialLinks} />
	</div>
</footer>
