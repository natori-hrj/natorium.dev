<script lang="ts">
  import github from 'lucide-svelte/icons/github';
  import twitter from 'lucide-svelte/icons/twitter';
  import linkedin from 'lucide-svelte/icons/linkedin';
  
  const profile = {
    name: "natori",
    title: "Backend Enginer (大規模データ処理/ アジャイル開発)",
    description: "某大手物流企業で大規模なデータ処理をしたり、\n webアプリ開発に携わったりしてます。",
    links: [
      { name: "Github", url: "https://github.com/natori-hrj", icon: github },
      { name: "X", url: "https://x.com/nator1_hrj", icon: twitter },
      { name: "Linkedin", url: "https://linkedin.com/in/ryuji-hanato", icon: linkedin },
    ]
  };
</script>

<div class="flex flex-col items-center justify-center py-20 text-center">
  <div class="mb-8 overflow-hidden rounded-full w-32 h-32 border-2 border-gray-200 dark:border-gray-700 shadow-sm hover:scale-105 transition-transform">
    <img src="/profile.png" alt={profile.name} class="w-full h-full object-cover" />
  </div>
  
  <h1 class="font-sans text-4xl font-extrabold tracking-tight mb-2 text-gray-900 dark:text-white">
    @{profile.name}
  </h1>

  <p class="text-gray-600 dark:text-gray-400 font-medium mb-6">
    @{profile.title}
  </p>

  <div class="flex space-x-6 mb-12">
    {#each profile.links as link}
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        class="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        <svelte:component this={link.icon} size={24} />
      </a>
    {/each}
  </div>

  <div class="max-w-md">
    <p class="text-lg text-gray-900 dark:text-gray-300 leading-relaxed italic whitespace-pre-line">
      "{profile.description}"
    </p>
  </div>
</div>
