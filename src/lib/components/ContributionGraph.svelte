<script lang="ts">
  type Day = { date: string; count: number; level: number };

  let {
    total,
    days,
    username
  }: { total: number; days: Day[]; username: string } = $props();

  // 53週がPCの本文幅(約704px)に収まるサイズ。狭い画面では横スクロールになる。
  const CELL = 9;
  const GAP = 3;
  // ラベルが重ならないよう、月ラベルはこの列数以上あけて表示する
  const MIN_LABEL_GAP = 3;

  // GitHubのカレンダーは日曜始まりの列。先頭を曜日位置に合わせて詰め、7日ごとの列に分割する。
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

  // 月が変わる列にだけラベルを出す
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

      // 直前のラベルと近すぎる場合、幅の狭い方(＝期間の切れ端になっている前の月)を捨てる
      if (index - lastLabelColumn < MIN_LABEL_GAP) labels.pop();

      labels.push({ column: index, label: `${month + 1}月` });
      lastLabelColumn = index;
    });

    return labels;
  });

  const formatDate = (date: string) => {
    const [year, month, day] = date.split('-');
    return `${year}年${Number(month)}月${Number(day)}日`;
  };
</script>

<section aria-labelledby="contributions-heading">
  <h2
    id="contributions-heading"
    class="mb-4 text-xs font-bold tracking-widest text-gray-500 uppercase dark:text-gray-500"
  >
    GitHub Contributions ·
    <a
      href="https://github.com/{username}"
      target="_blank"
      rel="noopener noreferrer"
      class="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
    >@{username}</a>
  </h2>

  <div
    class="graph rounded-xl border border-gray-200 p-4 dark:border-gray-700"
    style="--cell: {CELL}px;"
  >
    <!-- 53週分は狭い画面に収まらないので、この中だけ横スクロールさせる -->
    <div class="overflow-x-auto">
      <div class="inline-flex gap-2">
        <!-- 曜日ラベル -->
        <div
          class="grid shrink-0 text-[9px] text-gray-500 dark:text-gray-500"
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
          <!-- 月ラベル -->
          <div
            class="mb-1 grid text-[9px] text-gray-500 dark:text-gray-500"
            style="grid-template-columns: repeat({weeks.length}, {CELL}px); gap: {GAP}px;"
            aria-hidden="true"
          >
            {#each monthLabels as { column, label }}
              <span class="leading-none whitespace-nowrap" style="grid-column: {column + 1};">
                {label}
              </span>
            {/each}
          </div>

          <!-- 草本体 -->
          <div
            class="grid"
            style="grid-template-rows: repeat(7, {CELL}px); grid-auto-flow: column; gap: {GAP}px;"
            role="img"
            aria-label="過去1年間のGitHubコントリビューション {total} 件のヒートマップ"
          >
            {#each weeks as week}
              {#each week as day}
                {#if day}
                  <div
                    class="cell"
                    style="background-color: var(--l{day.level});"
                    title="{formatDate(day.date)} · {day.count}件"
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
      class="mt-3 flex items-center justify-between text-[11px] text-gray-600 dark:text-gray-400"
    >
      <span>過去1年間で {total} contributions</span>
      <span class="flex items-center gap-1">
        少ない
        {#each [0, 1, 2, 3, 4] as level}
          <span class="cell" style="background-color: var(--l{level});"></span>
        {/each}
        多い
      </span>
    </div>
  </div>
</section>

<style>
  /* 5段階の濃さ。サイトのアクセントカラー(ブルー)に合わせている。 */
  .graph {
    --l0: #ebedf0;
    --l1: #bfdbfe;
    --l2: #60a5fa;
    --l3: #3b82f6;
    --l4: #1d4ed8;
  }

  :global(.dark) .graph {
    --l0: rgba(255, 255, 255, 0.07);
    --l1: #1e3a8a;
    --l2: #1d4ed8;
    --l3: #3b82f6;
    --l4: #93c5fd;
  }

  .cell {
    width: var(--cell, 9px);
    height: var(--cell, 9px);
    border-radius: 2px;
  }
</style>
