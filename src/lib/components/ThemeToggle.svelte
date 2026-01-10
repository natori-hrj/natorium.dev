<script lang="ts">
  import { onMount } from 'svelte';
  
  let isDark = $state(false);
  
  onMount(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
  
  const toggleTheme = () => {
    isDark = !isDark;

    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
</script>

<button onclick={toggleTheme} class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors border border-gray-300 dark:border-gray-700" aria-label="テーマ切り替え">
  {#if isDark}🌙{:else}☀️{/if}
</button>
