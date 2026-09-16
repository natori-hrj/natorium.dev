<script lang="ts">
	import { onMount } from 'svelte';
	import type { Component, ComponentType } from 'svelte';

	// lucide-svelte uses legacy class components while custom icons use Svelte 5 components.
	// Accept both through a union type.
	type IconComponent = ComponentType | Component<{ size?: number }>;
	type DockItem = { name: string; url: string; icon: IconComponent };

	let { items }: { items: DockItem[] } = $props();

	// Magnification and cursor influence radius, tuned to feel similar to the macOS Dock.
	const MAX_SCALE = 1.45;
	const SIGMA = 55;

	let slotEls = $state<HTMLElement[]>([]);
	// Use a scale of one until the slots have been measured and the pointer enters the dock.
	let scales = $state<number[]>([]);
	let hovered = $state<number | null>(null);

	// Magnify only for mouse input when motion is allowed; disable it on touch devices.
	let canMagnify = false;

	onMount(() => {
		canMagnify =
			window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
			!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	});

	const handlePointerMove = (event: PointerEvent) => {
		if (!canMagnify) return;

		scales = slotEls.map((el) => {
			if (!el) return 1;
			const rect = el.getBoundingClientRect();
			const distance = event.clientX - (rect.left + rect.width / 2);
			// Use a Gaussian curve so the scale falls off smoothly away from the pointer.
			return 1 + (MAX_SCALE - 1) * Math.exp(-(distance * distance) / (2 * SIGMA * SIGMA));
		});
	};

	const reset = () => {
		scales = [];
		hovered = null;
	};
</script>

<nav
	class="dock"
	onpointermove={handlePointerMove}
	onpointerleave={reset}
	aria-label="Social links"
>
	{#each items as item, index (item.name)}
		{@const Icon = item.icon}
		<div class="dock-slot" bind:this={slotEls[index]}>
			{#if hovered === index}
				<span class="dock-label">{item.name}</span>
			{/if}
			<a
				href={item.url}
				target="_blank"
				rel="external noopener noreferrer"
				class="dock-item"
				style="transform: scale({scales[index] ?? 1});"
				aria-label={item.name}
				onpointerenter={() => (hovered = index)}
				onfocus={() => (hovered = index)}
				onblur={() => (hovered = null)}
			>
				<Icon size={22} />
			</a>
		</div>
	{/each}
</nav>

<style>
	.dock {
		--dock-size: 44px;
		/* Keep enough space between icons at maximum magnification. */
		--dock-gap: 14px;

		display: inline-flex;
		align-items: flex-end;
		gap: var(--dock-gap);
		padding: 10px 14px;
		border-radius: 9999px;
		background-color: var(--surface-color);
		border: 1px solid var(--border-color);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
	}

	.dock-slot {
		position: relative;
		width: var(--dock-size);
		height: var(--dock-size);
	}

	/* Fit all five icons on narrow screens by reducing their size slightly. */
	@media (max-width: 420px) {
		.dock {
			--dock-size: 38px;
			--dock-gap: 10px;
			padding: 8px 10px;
		}
	}

	.dock-item {
		position: absolute;
		inset: 0;
		display: grid;
		place-items: center;
		border: 0;
		border-radius: 12px;
		color: var(--text-color);
		background-color: transparent;
		/* Scaling from the bottom makes the icons appear to lift from the dock. */
		transform-origin: bottom center;
		transition:
			transform 0.12s cubic-bezier(0.22, 1, 0.36, 1),
			background-color 0.2s,
			color 0.2s;
	}

	.dock-item:hover {
		color: var(--bg-color);
		background-color: var(--text-color);
	}

	/* Keep labels outside the scaled element so the text never distorts. */
	.dock-label {
		position: absolute;
		bottom: calc(100% + 12px);
		left: 50%;
		transform: translateX(-50%);
		padding: 4px 10px;
		border-radius: 9999px;
		font-size: 12px;
		white-space: nowrap;
		pointer-events: none;
		border: 1px solid var(--border-color);
		background-color: var(--text-color);
		color: var(--bg-color);
	}

	@media (prefers-reduced-motion: reduce) {
		.dock-item {
			transition:
				color 0.2s,
				background-color 0.2s;
		}
	}
</style>
