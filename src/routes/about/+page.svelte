<script lang="ts">
	import { Briefcase, GitPullRequest, MessageCircle, Shield } from 'lucide-svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="About - natori's Site"
	description="About natori, a backend engineer broadly interested in security, data, and AI."
	path="/about"
/>

<div class="max-w-3xl">
	<h1 class="mb-8 text-4xl font-bold text-black dark:text-white">About me</h1>

	<div class="prose mb-12 max-w-none prose-neutral dark:prose-invert">
		<p class="text-lg leading-relaxed text-black/75 dark:text-white/80">
			After studying architecture and interior design, I became an engineer through self-study.<br
			/>
			I currently work in the digital transformation division of a major logistics company, building large-scale
			data platforms and evaluating practical applications of data and AI (GraphRAG / RAG).<br />
			I’m broadly interested in security. I previously built herdr-lazy and contributed to TiDB.
		</p>

		<h2 class="mt-8 mb-4 text-2xl font-bold text-black dark:text-white">What I do</h2>
		<div class="space-y-4 text-black/75 dark:text-white/80">
			<div class="flex items-start gap-3">
				<div class="mt-1">
					<Briefcase size={20} class="text-black dark:text-white" />
				</div>
				<div>
					<h3 class="font-bold text-black dark:text-white">
						Designing and building large-scale data pipelines (5B records per year)
					</h3>
				</div>
			</div>

			<div class="flex items-start gap-3">
				<div class="mt-1">
					<Briefcase size={20} class="text-black dark:text-white" />
				</div>
				<div>
					<h3 class="font-bold text-black dark:text-white">
						Designing backends, BFFs, APIs, and authorization (Hono, tRPC, OpenAPI, Drizzle, Go,
						Python)
					</h3>
				</div>
			</div>

			<div class="flex items-start gap-3">
				<div class="mt-1">
					<Briefcase size={20} class="text-black dark:text-white" />
				</div>
				<div>
					<h3 class="font-bold text-black dark:text-white">
						Building web applications (Next.js, TypeScript)
					</h3>
				</div>
			</div>

			<div class="flex items-start gap-3">
				<div class="mt-1">
					<Briefcase size={20} class="text-black dark:text-white" />
				</div>
				<div>
					<h3 class="font-bold text-black dark:text-white">
						Evaluating data and AI use cases (GraphRAG / RAG baseline comparisons)
					</h3>
				</div>
			</div>
		</div>

		<h2 class="mt-8 mb-4 text-2xl font-bold text-black dark:text-white">Open source</h2>
		<div class="space-y-4 text-black/75 dark:text-white/80">
			<div class="flex items-start gap-3">
				<div class="mt-1">
					<GitPullRequest size={20} class="text-black dark:text-white" />
				</div>
				<div>
					<h3 class="font-bold text-black dark:text-white">
						<a
							href="https://github.com/pingcap/tidb/pull/68697"
							target="_blank"
							rel="noopener noreferrer"
							class="text-black underline-offset-4 hover:underline dark:text-white">TiDB #68697</a
						>
						merged
					</h3>
					<p class="text-black/60 dark:text-white/65">
						A bug-fix PR for a Go-based distributed SQL database. My first open-source contribution.
					</p>
				</div>
			</div>
		</div>

		<h2 class="mt-8 mb-4 text-2xl font-bold text-black dark:text-white">Current interest</h2>
		<div class="space-y-4 text-black/75 dark:text-white/80">
			<div class="flex items-start gap-3">
				<div class="mt-1">
					<Shield size={20} class="text-black dark:text-white" />
				</div>
				<div>
					<h3 class="font-bold text-black dark:text-white">
						Security across a broad range of areas
					</h3>
				</div>
			</div>
		</div>

		<h2 class="mt-8 mb-4 text-2xl font-bold text-black dark:text-white">Contact</h2>
		<div class="flex items-start gap-3 text-black/75 dark:text-white/80">
			<div class="mt-1">
				<MessageCircle size={20} class="text-black dark:text-white" />
			</div>
			<p>Reach me via GitHub or X.</p>
		</div>
	</div>
</div>
