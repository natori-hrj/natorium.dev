<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { Moon, Sun } from 'lucide-svelte';

	let isDark = $state(
		typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
	);

	const getPreferredTheme = () => {
		const savedTheme = localStorage.getItem('theme');
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

		return savedTheme === 'dark' || (!savedTheme && prefersDark);
	};

	onMount(() => {
		isDark = getPreferredTheme();

		if (isDark) {
			document.documentElement.classList.add('dark');
			document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#000000');
		} else {
			document.documentElement.classList.remove('dark');
			document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#ffffff');
		}
	});

	const toggleTheme = () => {
		isDark = !isDark;

		if (isDark) {
			document.documentElement.classList.add('dark');
			document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#000000');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			document.querySelector('meta[name="theme-color"]')?.setAttribute('content', '#ffffff');
			localStorage.setItem('theme', 'light');
		}
	};
</script>

<button
	onclick={toggleTheme}
	class="relative appearance-none overflow-hidden rounded-full border border-black bg-white p-2 text-black transition-colors duration-200 hover:bg-black hover:text-white active:scale-95 dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
	aria-label="Toggle theme"
>
	<div class="relative h-5 w-5">
		{#if isDark}
			<div
				in:fade={{ duration: 200 }}
				out:fade={{ duration: 200 }}
				class="rotate-in absolute inset-0"
			>
				<Moon size={20} />
			</div>
		{:else}
			<div
				in:fade={{ duration: 200 }}
				out:fade={{ duration: 200 }}
				class="rotate-in absolute inset-0"
			>
				<Sun size={20} />
			</div>
		{/if}
	</div>
</button>

<style>
	@keyframes rotateIn {
		from {
			transform: rotate(-180deg) scale(0.8);
			opacity: 0;
		}
		to {
			transform: rotate(0deg) scale(1);
			opacity: 1;
		}
	}

	.rotate-in {
		animation: rotateIn 0.3s ease-out;
	}
</style>
