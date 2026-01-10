<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { Moon, Sun } from 'lucide-svelte';

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

<button
  onclick={toggleTheme}
  class="relative p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-110 active:scale-95 transition-all duration-200 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 overflow-hidden"
  aria-label="テーマ切り替え"
>
  <div class="relative w-5 h-5">
    {#if isDark}
      <div
        in:fade={{ duration: 200 }}
        out:fade={{ duration: 200 }}
        class="absolute inset-0 rotate-in"
      >
        <Moon size={20} />
      </div>
    {:else}
      <div
        in:fade={{ duration: 200 }}
        out:fade={{ duration: 200 }}
        class="absolute inset-0 rotate-in"
      >
        <Sun size={20} />
      </div>
    {/if}
  </div>
</button>

<style>
  @keyframes rotateIn {
    from {
      transform: rotate(-180deg) scale(0.8);
      opacity: 0;
    }
    to {
      transform: rotate(0deg) scale(1);
      opacity: 1;
    }
  }

  .rotate-in {
    animation: rotateIn 0.3s ease-out;
  }
</style>
