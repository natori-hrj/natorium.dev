<script lang="ts">
	import { Code2, Server, Cloud, Bot, Wrench } from 'lucide-svelte';

	const techStack = [
		{
			category: 'Languages',
			icon: Code2,
			items: ['TypeScript / JavaScript', 'Rust']
		},
		{
			category: 'Web & frontend',
			icon: Server,
			items: ['SvelteKit / Svelte', 'Tailwind CSS', 'Vite', 'mdsvex']
		},
		{
			category: 'AI & coding agents',
			icon: Bot,
			items: ['Codex', 'Grok Build']
		},
		{
			category: 'Development environment',
			icon: Wrench,
			items: ['Neovim', 'Ghostty', 'herdr', 'Git / GitHub', 'npm']
		},
		{
			category: 'Deployment',
			icon: Cloud,
			items: ['Vercel']
		}
	];
</script>

<svelte:head>
	<title>Tech Stack - natori's Site</title>
	<meta name="description" content="Recent technologies I use in personal projects." />
</svelte:head>

<div class="max-w-4xl">
	<h1 class="mb-4 text-4xl font-bold text-black dark:text-white">Tech Stack</h1>
	<p class="mb-12 text-black/60 dark:text-white/65">
		Recent technologies I use in personal projects.
	</p>

	<div class="grid gap-6 md:grid-cols-2">
		{#each techStack as { category, icon, items } (category)}
			<div class="rounded-2xl border border-black/15 p-6 shadow-sm dark:border-white/20">
				<div class="mb-4 flex items-center gap-3">
					<div
						class="rounded-xl border border-black/15 p-2 text-black dark:border-white/20 dark:text-white"
					>
						<svelte:component this={icon} size={20} />
					</div>
					<h2 class="text-xl font-bold text-black dark:text-white">
						{category}
					</h2>
				</div>
				<ul class="space-y-2">
					{#each items as item (item)}
						<li class="flex items-center gap-2 text-black/75 dark:text-white/80">
							<span class="h-1.5 w-1.5 rounded-full bg-black dark:bg-white"></span>
							{item}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</div>
