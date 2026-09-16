<script lang="ts">
	type Day = { date: string; count: number; level: number };

	let { total, days, username }: { total: number; days: Day[]; username: string } = $props();

	// 53 weeks fit within the desktop content width (~704px); narrow screens scroll horizontally.
	const CELL = 9;
	const GAP = 3;
	// Keep this many columns between month labels to prevent overlap.
	const MIN_LABEL_GAP = 3;

	// GitHub's calendar starts on Sunday. Pad the first week and split the data into seven-day columns.
	const weeks = $derived.by(() => {
		if (days.length === 0) return [];

		const cells: (Day | null)[] = [];
		const firstWeekday = new Date(`${days[0].date}T00:00:00Z`).getUTCDay();

		for (let i = 0; i < firstWeekday; i++) cells.push(null);
		cells.push(...days);
		while (cells.length % 7 !== 0) cells.push(null);

		const columns: (Day | null)[][] = [];
		for (let i = 0; i < cells.length; i += 7) columns.push(cells.slice(i, i + 7));
		return columns;
	});

	// Show a label only when the month changes.
	const monthLabels = $derived.by(() => {
		const labels: { column: number; label: string }[] = [];
		let previousMonth = -1;
		let lastLabelColumn = -Infinity;

		weeks.forEach((week, index) => {
			const firstDay = week.find((day) => day !== null);
			if (!firstDay) return;

			const month = new Date(`${firstDay.date}T00:00:00Z`).getUTCMonth();
			if (month === previousMonth) return;
			previousMonth = month;

			// If labels are too close, drop the narrower one at the edge of the range.
			if (index - lastLabelColumn < MIN_LABEL_GAP) labels.pop();

			labels.push({
				column: index,
				label: new Intl.DateTimeFormat('en-US', {
					month: 'short',
					timeZone: 'UTC'
				}).format(new Date(`${firstDay.date}T00:00:00Z`))
			});
			lastLabelColumn = index;
		});

		return labels;
	});

	const formatDate = (date: string) => {
		return new Intl.DateTimeFormat('en-US', {
			dateStyle: 'medium',
			timeZone: 'UTC'
		}).format(new Date(`${date}T00:00:00Z`));
	};
</script>

<section aria-labelledby="contributions-heading">
	<h2
		id="contributions-heading"
		class="mb-4 text-xs font-bold tracking-widest text-black/55 uppercase dark:text-white/60"
	>
		GitHub contributions ·
		<a
			href="https://github.com/{username}"
			target="_blank"
			rel="noopener noreferrer"
			class="transition-opacity hover:opacity-60">@{username}</a
		>
	</h2>

	<div
		class="graph rounded-2xl border border-black/15 p-4 dark:border-white/20"
		style="--cell: {CELL}px;"
	>
		<!-- Fifty-three weeks do not fit on narrow screens, so only this region scrolls horizontally. -->
		<div class="overflow-x-auto">
			<div class="inline-flex gap-2">
				<!-- Weekday labels -->
				<div
					class="grid shrink-0 text-[9px] text-black/55 dark:text-white/60"
					style="grid-template-rows: repeat(7, {CELL}px); gap: {GAP}px;"
					aria-hidden="true"
				>
					<span></span>
					<span class="leading-none">Mon</span>
					<span></span>
					<span class="leading-none">Wed</span>
					<span></span>
					<span class="leading-none">Fri</span>
					<span></span>
				</div>

				<div>
					<!-- Month labels -->
					<div
						class="mb-1 grid text-[9px] text-black/55 dark:text-white/60"
						style="grid-template-columns: repeat({weeks.length}, {CELL}px); gap: {GAP}px;"
						aria-hidden="true"
					>
						{#each monthLabels as { column, label } (column)}
							<span class="leading-none whitespace-nowrap" style="grid-column: {column + 1};">
								{label}
							</span>
						{/each}
					</div>

					<!-- Contribution cells -->
					<div
						class="grid"
						style="grid-template-rows: repeat(7, {CELL}px); grid-auto-flow: column; gap: {GAP}px;"
						role="img"
						aria-label="GitHub contributions over the past year: {total} contributions"
					>
						{#each weeks as week, weekIndex (weekIndex)}
							{#each week as day, dayIndex (dayIndex)}
								{#if day}
									<div
										class="cell"
										style="background-color: var(--l{day.level});"
										title="{formatDate(day.date)} · {day.count} contributions"
									></div>
								{:else}
									<div></div>
								{/if}
							{/each}
						{/each}
					</div>
				</div>
			</div>
		</div>

		<div
			class="mt-3 flex items-center justify-between text-[11px] text-black/65 dark:text-white/70"
		>
			<span>{total} contributions in the past year</span>
			<span class="flex items-center gap-1">
				Less
				{#each [0, 1, 2, 3, 4] as level (level)}
					<span class="cell" style="background-color: var(--l{level});"></span>
				{/each}
				More
			</span>
		</div>
	</div>
</section>

<style>
	/* Five intensity levels using only black and white opacity. */
	.graph {
		--l0: #ffffff;
		--l1: rgba(0, 0, 0, 0.12);
		--l2: rgba(0, 0, 0, 0.3);
		--l3: rgba(0, 0, 0, 0.58);
		--l4: #000000;
	}

	:global(.dark) .graph {
		--l0: #000000;
		--l1: rgba(255, 255, 255, 0.16);
		--l2: rgba(255, 255, 255, 0.34);
		--l3: rgba(255, 255, 255, 0.62);
		--l4: #ffffff;
	}

	.cell {
		width: var(--cell, 9px);
		height: var(--cell, 9px);
		border-radius: 3px;
	}
</style>
