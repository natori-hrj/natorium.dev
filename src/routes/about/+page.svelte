<script lang="ts">
  import { Briefcase, Award, BookOpen, MessageCircle, GitPullRequest } from 'lucide-svelte';
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
      現在は某大手物流企業のデジタル推進部門にて、大規模データ基盤の開発と、
      データ×AIの活用・実証（GraphRAG / RAG）に取り組んでいます。
    </p>

    <h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">What I Do</h2>
    <div class="space-y-4 text-gray-700 dark:text-gray-300">
      <div class="flex items-start gap-3">
        <div class="mt-1">
          <Briefcase size={20} class="text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white">大規模データパイプラインの設計・実装（年間50億件規模）</h3>
        </div>
      </div>

      <div class="flex items-start gap-3">
        <div class="mt-1">
          <Briefcase size={20} class="text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white">バックエンド・BFF / API・認証認可の設計（Hono・tRPC / OpenAPI・Drizzle / Go・Python）</h3>
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
          <h3 class="font-bold text-gray-900 dark:text-white">データ×AIの実証（GraphRAG / RAG のベースライン比較・検証）</h3>
        </div>
      </div>
    </div>

    <h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Open Source</h2>
    <div class="space-y-4 text-gray-700 dark:text-gray-300">
      <div class="flex items-start gap-3">
        <div class="mt-1">
          <GitPullRequest size={20} class="text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white">
            <a href="https://github.com/pingcap/tidb/pull/68697" target="_blank" rel="noopener noreferrer" class="hover:underline text-blue-500 dark:text-blue-400">TiDB #68697</a>
            をマージ達成
          </h3>
          <p class="text-gray-600 dark:text-gray-400">Go製の分散SQLデータベースへのバグ修正PR。初のOSSコントリビュート。</p>
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
          <h3 class="font-bold text-gray-900 dark:text-white">AWS認定資格 12冠</h3>
          <p class="text-gray-600 dark:text-gray-400">Professional 2 / Associate 3 / Specialty 6 / Foundational 1</p>
        </div>
      </div>

      <div class="flex items-start gap-3">
        <div class="mt-1">
          <Award size={20} class="text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white">Python 3 エンジニア認定（基礎・データ分析）</h3>
        </div>
      </div>

      <div class="flex items-start gap-3">
        <div class="mt-1">
          <Award size={20} class="text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white">OSS-DB Silver / 基本情報技術者試験（FE）</h3>
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
          <h3 class="font-bold text-gray-900 dark:text-white">Go によるバックエンド開発・API設計</h3>
        </div>
      </div>

      <div class="flex items-start gap-3">
        <div class="mt-1">
          <BookOpen size={20} class="text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white">システム設計 / CSの基礎（CS50）</h3>
        </div>
      </div>

      <div class="flex items-start gap-3">
        <div class="mt-1">
          <BookOpen size={20} class="text-blue-500 dark:text-blue-400" />
        </div>
        <div>
          <h3 class="font-bold text-gray-900 dark:text-white">英語（技術的な会話に自信を持つレベルへ）</h3>
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
