<script lang="ts">
	import { Briefcase, Award, BookOpen, MessageCircle, GitPullRequest } from 'lucide-svelte';
</script>

<svelte:head>
	<title>About - natori's Site</title>
	<meta name="description" content="About natori, a backend engineer working with data and AI." />
</svelte:head>

<div class="max-w-3xl">
	<h1 class="mb-8 text-4xl font-bold text-black dark:text-white">About me</h1>

	<div class="prose mb-12 max-w-none prose-neutral dark:prose-invert">
		<p class="text-lg leading-relaxed text-black/75 dark:text-white/80">
			After studying architecture and interior design, I became an engineer through self-study.<br
			/>
			I currently work in the digital transformation division of a major logistics company, building large-scale
			data platforms and evaluating practical applications of data and AI (GraphRAG / RAG).
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

		<h2 class="mt-8 mb-4 text-2xl font-bold text-black dark:text-white">Certifications</h2>
		<div class="space-y-4 text-black/75 dark:text-white/80">
			<div class="flex items-start gap-3">
				<div class="mt-1">
					<Award size={20} class="text-black dark:text-white" />
				</div>
				<div>
					<h3 class="font-bold text-black dark:text-white">12 AWS certifications</h3>
					<p class="text-black/60 dark:text-white/65">
						Professional 2 / Associate 3 / Specialty 6 / Foundational 1
					</p>
				</div>
			</div>

			<div class="flex items-start gap-3">
				<div class="mt-1">
					<Award size={20} class="text-black dark:text-white" />
				</div>
				<div>
					<h3 class="font-bold text-black dark:text-white">
						Python 3 Engineer Certification (Fundamentals, Data Analysis)
					</h3>
				</div>
			</div>

			<div class="flex items-start gap-3">
				<div class="mt-1">
					<Award size={20} class="text-black dark:text-white" />
				</div>
				<div>
					<h3 class="font-bold text-black dark:text-white">
						OSS-DB Silver / Fundamental Information Technology Engineer (FE)
					</h3>
				</div>
			</div>
		</div>

		<h2 class="mt-8 mb-4 text-2xl font-bold text-black dark:text-white">Currently learning</h2>
		<div class="space-y-4 text-black/75 dark:text-white/80">
			<div class="flex items-start gap-3">
				<div class="mt-1">
					<BookOpen size={20} class="text-black dark:text-white" />
				</div>
				<div>
					<h3 class="font-bold text-black dark:text-white">
						Backend development and API design with Go
					</h3>
				</div>
			</div>

			<div class="flex items-start gap-3">
				<div class="mt-1">
					<BookOpen size={20} class="text-black dark:text-white" />
				</div>
				<div>
					<h3 class="font-bold text-black dark:text-white">
						System design and computer science fundamentals (CS50)
					</h3>
				</div>
			</div>

			<div class="flex items-start gap-3">
				<div class="mt-1">
					<BookOpen size={20} class="text-black dark:text-white" />
				</div>
				<div>
					<h3 class="font-bold text-black dark:text-white">
						English — becoming more confident in technical conversations
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
