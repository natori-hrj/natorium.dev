<script lang="ts">
	import { ExternalLink, Github } from 'lucide-svelte';
	import Seo from '$lib/components/Seo.svelte';

	const projects = [
		{
			title: 'herdr-lazy',
			description:
				'A declarative, reproducible plugin manager and curated distribution for Herdr. Keep plugins in a plain list, lock exact commits, and sync a setup across machines.',
			technologies: ['Rust', 'Herdr', 'TUI', 'Lockfile'],
			github: 'https://github.com/natori-hrj/herdr-lazy',
			demo: null,
			featured: true
		},
		{
			title: 'RUNIVA',
			description:
				'A runtime-neutral control layer for persistent coding-agent sessions. The Go core and CLI manage sessions without coupling clients to a specific agent runtime.',
			technologies: ['Go', 'CLI', 'Unix socket', 'Herdr'],
			github: 'https://github.com/natori-hrj/runiva',
			demo: null,
			featured: false
		},
		{
			title: 'DataCode',
			description:
				'A coding agent for data work. Ask questions about local CSV or Parquet files in plain language and get both the answer and the SQL behind it.',
			technologies: ['TypeScript', 'Node.js', 'SQL', 'Parquet / CSV'],
			github: 'https://github.com/natori-hrj/datacode',
			demo: null,
			featured: false
		},
		{
			title: 'Vela',
			description:
				'A governed, agent-agnostic data exploration server that turns natural-language questions into safe queries and interactive charts inside MCP Apps.',
			technologies: ['TypeScript', 'MCP', 'MCP Apps', 'Data governance'],
			github: 'https://github.com/natori-hrj/vela-mcp',
			demo: null,
			featured: false
		},
		{
			title: 'herdr-docs',
			description:
				'A Herdr plugin for reading Markdown, PDFs, and office documents in one consistent terminal view.',
			technologies: ['Rust', 'Herdr', 'Markdown / PDF'],
			github: 'https://github.com/natori-hrj/herdr-docs',
			demo: null,
			featured: false
		},
		{
			title: 'herdr-triage',
			description:
				'A read-only Herdr plugin that ranks agents by attention, bringing blocked and completed work to the top.',
			technologies: ['Rust', 'Herdr', 'TUI'],
			github: 'https://github.com/natori-hrj/herdr-triage',
			demo: null,
			featured: false
		},
		{
			title: 'herdr-standup',
			description:
				"A Herdr plugin that summarizes each agent's recent commits and uncommitted work across repositories.",
			technologies: ['Rust', 'Herdr', 'Git'],
			github: 'https://github.com/natori-hrj/herdr-standup',
			demo: null,
			featured: false
		},
		{
			title: 'herdr-green',
			description:
				"A Herdr plugin that runs an agent's project tests when the agent finishes and surfaces the result.",
			technologies: ['Rust', 'Herdr', 'Testing'],
			github: 'https://github.com/natori-hrj/herdr-green',
			demo: null,
			featured: false
		},
		{
			title: 'natorium.dev',
			description:
				'A personal website and blog built with SvelteKit and Tailwind CSS. Blog posts are managed in Markdown.',
			technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'mdsvex'],
			github: 'https://github.com/natori-hrj/natorium.dev',
			demo: null,
			featured: false
		}
	];
</script>

<Seo
	title="Projects - natori's Site"
	description="Selected projects and things I have built."
	path="/projects"
/>

<div class="max-w-4xl">
	<h1 class="mb-4 text-4xl font-bold text-black dark:text-white">Projects</h1>
	<p class="mb-12 text-black/60 dark:text-white/65">Selected projects and things I have built.</p>

	<div class="space-y-8">
		{#each projects as project (project.title)}
			<article
				class="rounded-2xl border border-black/15 p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-white/20"
			>
				<div class="mb-3 flex items-start justify-between">
					<h2 class="text-2xl font-bold text-black dark:text-white">
						{project.title}
					</h2>
					{#if project.featured}
						<span
							class="rounded-full bg-black px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-black"
						>
							Featured
						</span>
					{/if}
				</div>

				<p class="mb-4 text-black/70 dark:text-white/75">
					{project.description}
				</p>

				<div class="mb-4 flex flex-wrap gap-2">
					{#each project.technologies as tech (tech)}
						<span
							class="rounded-full border border-black/20 px-3 py-1 text-sm text-black/75 dark:border-white/25 dark:text-white/80"
						>
							{tech}
						</span>
					{/each}
				</div>

				{#if project.github || project.demo}
					<div class="flex gap-4">
						{#if project.github}
							<a
								href={project.github}
								target="_blank"
								rel="external noopener noreferrer"
								class="inline-flex items-center gap-2 text-black underline-offset-4 hover:underline dark:text-white"
							>
								<Github size={16} />
								GitHub
							</a>
						{/if}
						{#if project.demo}
							<a
								href={project.demo}
								target="_blank"
								rel="external noopener noreferrer"
								class="inline-flex items-center gap-2 text-black underline-offset-4 hover:underline dark:text-white"
							>
								<ExternalLink size={16} />
								Demo
							</a>
						{/if}
					</div>
				{/if}
			</article>
		{/each}
	</div>
</div>
