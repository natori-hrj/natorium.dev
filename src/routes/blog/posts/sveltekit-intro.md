---
title: "SvelteKitで個人サイトを作った話"
date: "2026-01-09"
description: "SvelteKitを使って個人サイトを構築した経験を共有します。"
tags: ["SvelteKit", "Web開発", "フロントエンド"]
published: true
---

# SvelteKitで個人サイトを作成

個人サイトをSvelteKitで構築しました。この記事では、その過程で学んだことを共有します。

## SvelteKitとは？

SvelteKitは、Svelteフレームワークのための**フルスタックWebアプリケーションフレームワーク**です。

### 主な特徴

1. **ファイルベースルーティング** - `src/routes/`ディレクトリにファイルを配置するだけでルーティングが自動生成されます
2. **SSR・SSG対応** - サーバーサイドレンダリングと静的サイト生成の両方をサポート
3. **高速なビルド** - Viteを使用した高速な開発体験
4. **型安全** - TypeScriptとの統合が優れている

## このサイトの技術スタック

- **フレームワーク**: SvelteKit
- **スタイリング**: Tailwind CSS v4
- **ブログ**: mdsvex (Markdown)
- **デプロイ**: (お好みのプラットフォーム)

### なぜSvelteKitを選んだか

- シンプルで学習コストが低い
- パフォーマンスが高い
- モダンな開発体験

## Markdownブログの実装

mdsvexを使うことで、Markdownファイルから簡単にブログ記事を生成できます。

```bash
npm install -D mdsvex
```

設定も簡単です:

```javascript
// svelte.config.js
import { mdsvex } from 'mdsvex';

export default {
  extensions: ['.svelte', '.md'],
  preprocess: [mdsvex()]
};
```

## まとめ

SvelteKitは個人サイト構築に最適なフレームワークだと感じました。
ぜひ試してみてください！
