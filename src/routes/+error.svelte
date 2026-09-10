<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>{page.status} - natori's Site</title>
</svelte:head>

<div class="flex flex-col items-center justify-center py-20 text-center">
	<h1 class="mb-4 text-6xl font-extrabold text-gray-900 dark:text-white">
		{page.status}
	</h1>
	<p class="mb-8 text-xl text-gray-600 dark:text-gray-400">
		{page.error?.message ?? 'ページが見つかりませんでした'}
	</p>
	<a
		href={resolve('/')}
		class="font-bold text-blue-500 transition-colors hover:underline dark:text-blue-400"
	>
		トップページに戻る
	</a>
</div>
