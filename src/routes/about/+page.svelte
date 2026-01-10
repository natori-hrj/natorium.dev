<script lang="ts">
  import { Mail, MapPin, Briefcase } from 'lucide-svelte';
</script>

<svelte:head>
  <title>About - natori's Site</title>
  <meta name="description" content="natorのプロフィールと経歴" />
</svelte:head>

<div class="max-w-3xl">
  <h1 class="text-4xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h1>

  <div class="prose prose-gray dark:prose-invert max-w-none mb-12">
    <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
      はじめまして、natoriと申します。<br>
      某大手物流企業でBackend Engineerとして働いています。
    </p>

    <h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">What I Do</h2>
    <div class="space-y-4 text-gray-700 dark:text-gray-300">
      <div class="flex items-start gap-3">
        <div class="mt-1">
          <Briefcase size={20} class="text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white">大規模データ処理</h3>
          <p>物流業界の大量データを効率的に処理するシステムの設計・開発を担当しています。</p>
        </div>
      </div>

      <div class="flex items-start gap-3">
        <div class="mt-1">
          <Briefcase size={20} class="text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white">アジャイル開発</h3>
          <p>スクラムを用いたチーム開発で、Webアプリケーションの開発・運用を行っています。</p>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Interests</h2>
    <ul class="text-gray-700 dark:text-gray-300">
      <li>バックエンド開発とアーキテクチャ設計</li>
      <li>データエンジニアリング</li>
      <li>パフォーマンスチューニング</li>
      <li>開発プロセスの改善</li>
    </ul>

    <h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Contact</h2>
    <p class="text-gray-700 dark:text-gray-300">
      お仕事のご依頼やご相談は、GitHubまたはLinkedInからご連絡ください。
    </p>
  </div>

  <div class="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
    <h3 class="text-lg font-bold mb-2 text-gray-900 dark:text-white">編集方法</h3>
    <p class="text-sm text-gray-600 dark:text-gray-400">
      このページの内容を編集するには、<code class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">src/routes/about/+page.svelte</code> を直接編集してください。
    </p>
  </div>
</div>
