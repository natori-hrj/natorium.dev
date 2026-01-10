<script lang="ts">
  import github from 'lucide-svelte/icons/github';
  import twitter from 'lucide-svelte/icons/twitter';
  import linkedin from 'lucide-svelte/icons/linkedin';
  // 自分の情報
  const profile = {
      name: "natori",
      title: "Backend Enginer (大規模データ処理/ アジャイル開発)",
      description: "某大手物流企業で大規模なデータ処理をしたり、webアプリ開発に携わったりしてます。",
      links: [
      { name: "Github", url: "https://github.com/natori-hrj", icon: github },
      { name: "X", url: "https://x.com/nator1_hrj", icon: twitter },
      { name: "Linkedin", url: "https://linkedin.com/in/ryuji-hanato", icon: linkedin },
      ]
    };
</script>

<div class="flex flex-col items-center justify-center py-20 text-center">
  <div class="mb-8 overflow-hidden rounded-full w-32 h-32 border-2 border-gray=200 shadow-sm hover:scale-105 transition-transform">
    <img src="/profile.png" alt={profile.name} class="w-full h-full object-cover" />
  </div>

  <h1 class="text-4xl fint-extrabold tracking-tight mb-2">
    @{profile.name}
  </h1>
  <p class="text-gray-500 font-medium mb-6">
    @{profile.title}
  </p>

  <div class="flex space-x-6 mb-12">
    {#each profile.links as link}
      <a href={link.url} target="_blank" rel="noopener noerferrer"
        class="text-gray-400 hover:text-black transition-colors"
        >
        <link.icon size={24} color="currentColor" />
      </a>
    {/each}
  </div>

  <div class="max-w-md">
    <p class="text-lg text-gray-700 leading-relaxed italic">
      "{profile.description}"
    </p>
  </div>
</div>




