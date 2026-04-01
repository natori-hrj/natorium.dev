<script lang="ts">
  import { Briefcase, Award, BookOpen, MessageCircle } from 'lucide-svelte';
</script>

<svelte:head>
  <title>About - natori's Site</title>
  <meta name="description" content="natoriのプロフィールと経歴" />
</svelte:head>

<div class="max-w-3xl">
  <h1 class="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h1>

  <div class="prose prose-gray dark:prose-invert max-w-none mb-12">
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
      建築・インテリアデザイン専攻から独学でエンジニアに転身。<br>
      現在は某大手物流企業のデジタル推進部門にて、大規模データ基盤の開発に従事。
    </p>

    <h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">What I Do</h2>
    <div class="space-y-4 text-gray-700 dark:text-gray-300">
      <div class="flex items-start gap-3">
        <div class="mt-1">
          <Briefcase size={20} class="text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white">大規模データパイプラインの設計・実装</h3>
        </div>
      </div>

      <div class="flex items-start gap-3">
        <div class="mt-1">
          <Briefcase size={20} class="text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white">バックエンドAPI開発（Go・Python）</h3>
        </div>
      </div>

      <div class="flex items-start gap-3">
        <div class="mt-1">
          <Briefcase size={20} class="text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white">Webアプリケーション開発（Next.js・TypeScript）</h3>
        </div>
      </div>

      <div class="flex items-start gap-3">
        <div class="mt-1">
          <Briefcase size={20} class="text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white">AIツールを活用した開発効率化</h3>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Certifications</h2>
    <div class="space-y-4 text-gray-700 dark:text-gray-300">
      <div class="flex items-start gap-3">
        <div class="mt-1">
          <Award size={20} class="text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white">AWS認定資格 12種取得</h3>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Currently Learning</h2>
    <div class="space-y-4 text-gray-700 dark:text-gray-300">
      <div class="flex items-start gap-3">
        <div class="mt-1">
          <BookOpen size={20} class="text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white">Go によるバックエンド開発</h3>
        </div>
      </div>

      <div class="flex items-start gap-3">
        <div class="mt-1">
          <BookOpen size={20} class="text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white">システムデザイン</h3>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Contact</h2>
    <div class="flex items-start gap-3 text-gray-700 dark:text-gray-300">
      <div class="mt-1">
        <MessageCircle size={20} class="text-blue-500 dark:text-blue-400" />
      </div>
      <p>GitHubまたはLinkedInからご連絡ください。</p>
    </div>
  </div>

</div>
