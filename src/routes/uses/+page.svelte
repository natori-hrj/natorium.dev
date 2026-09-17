<script lang="ts">
	const uses = [
		{
			category: 'Editor',
			items: [
				{
					name: 'Neovim',
					description: 'My primary editor for fast, keyboard-driven development.'
				}
			]
		},
		{
			category: 'Terminal',
			items: [
				{
					name: 'Ghostty',
					description: 'My current terminal for personal development.'
				}
			]
		},
		{
			category: 'AI & development assistance',
			items: [
				{
					name: 'Codex',
					description: 'For implementation, review, and repository maintenance.'
				},
				{
					name: 'Grok Build',
					description: 'For exploring and prototyping personal projects.'
				}
			]
		},
		{
			category: 'Development tools',
			items: [
				{
					name: 'herdr',
					description: 'For managing a declarative and reproducible terminal plugin setup.'
				}
			]
		},
		{
			category: 'Services',
			items: [
				{
					name: 'GitHub',
					description: 'For project management, code, and CI/CD.'
				},
				{
					name: 'Vercel',
					description: 'For hosting, preview deployments, and production releases.'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Uses - natori's Site</title>
	<meta name="description" content="The tools I use for recent personal development." />
</svelte:head>

<div class="max-w-4xl">
	<h1 class="mb-4 text-4xl font-bold text-black dark:text-white">Uses</h1>
	<p class="mb-12 text-black/60 dark:text-white/65">
		The tools I use for recent personal development.
	</p>

	<div class="space-y-10">
		{#each uses as section (section.category)}
			<section>
				<h2 class="mb-6 flex items-center gap-2 text-2xl font-bold text-black dark:text-white">
					<span class="h-2 w-2 rounded-full bg-black dark:bg-white"></span>
					{section.category}
				</h2>
				<div class="space-y-4">
					{#each section.items as item (item.name)}
						<div class="rounded-l-lg border-l-2 border-black py-2 pl-4 dark:border-white">
							<h3 class="mb-1 text-lg font-bold text-black dark:text-white">
								{item.name}
							</h3>
							<p class="text-black/60 dark:text-white/65">
								{item.description}
							</p>
						</div>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>
