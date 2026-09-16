<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>{page.status} - natori's Site</title>
</svelte:head>

<div class="flex flex-col items-center justify-center py-20 text-center">
	<h1 class="mb-4 text-6xl font-extrabold text-black dark:text-white">
		{page.status}
	</h1>
	<p class="mb-8 text-xl text-black/60 dark:text-white/65">
		{page.error?.message ?? 'Page not found'}
	</p>
	<a
		href={resolve('/')}
		class="font-bold text-black underline-offset-4 transition-opacity hover:underline hover:opacity-60 dark:text-white"
	>
		Back to home
	</a>
</div>
