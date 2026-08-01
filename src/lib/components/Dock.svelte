<script lang="ts">
  import { onMount } from 'svelte';
  import type { ComponentType } from 'svelte';

  // lucide-svelte のアイコンはクラスコンポーネントなので ComponentType で受ける
  type DockItem = { name: string; url: string; icon: ComponentType };

  let { items }: { items: DockItem[] } = $props();

  // 拡大率とカーソルの影響範囲。macOSのDockに近い効き方になる値。
  const MAX_SCALE = 1.45;
  const SIGMA = 55;

  let slotEls: HTMLElement[] = [];
  // 未計測のうちは等倍。ポインタが乗った時点で各スロットの拡大率が入る。
  let scales = $state<number[]>([]);
  let hovered = $state<number | null>(null);

  // マウス操作かつモーション許可時のみ拡大する。タッチ端末では誤作動するため無効。
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
      // ガウス分布で中心から離れるほどなだらかに小さくする
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
  aria-label="ソーシャルリンク"
>
  {#each items as item, index}
    {@const Icon = item.icon}
    <div class="dock-slot" bind:this={slotEls[index]}>
      {#if hovered === index}
        <span class="dock-label">{item.name}</span>
      {/if}
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
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
    display: inline-flex;
    align-items: flex-end;
    /* 最大拡大時に隣のアイコンと重ならない間隔 */
    gap: 16px;
    padding: 10px 14px;
    border-radius: 22px;
    background-color: var(--glass-bg);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid var(--glass-border);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  .dock-slot {
    position: relative;
    width: 44px;
    height: 44px;
  }

  .dock-item {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    border-radius: 12px;
    color: rgb(55 65 81);
    background-color: rgba(0, 0, 0, 0.05);
    /* 下端を軸に拡大すると、Dockのアイコンが持ち上がるように見える */
    transform-origin: bottom center;
    transition:
      transform 0.12s cubic-bezier(0.22, 1, 0.36, 1),
      background-color 0.2s,
      color 0.2s;
  }

  .dock-item:hover {
    color: rgb(59 130 246);
  }

  :global(.dark) .dock-item {
    color: rgb(209 213 219);
    background-color: rgba(255, 255, 255, 0.08);
  }

  :global(.dark) .dock-item:hover {
    color: rgb(96 165 250);
  }

  /* ラベルは拡大対象の外に置き、文字が歪まないようにする */
  .dock-label {
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    padding: 4px 10px;
    border-radius: 9px;
    font-size: 12px;
    white-space: nowrap;
    pointer-events: none;
    background-color: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    color: var(--text-color);
  }

  @media (prefers-reduced-motion: reduce) {
    .dock-item {
      transition: color 0.2s, background-color 0.2s;
    }
  }

  @media (prefers-reduced-transparency: reduce) {
    .dock,
    .dock-label {
      background-color: var(--bg-color);
      backdrop-filter: none;
      -webkit-backdrop-filter: none;
    }
  }
</style>
