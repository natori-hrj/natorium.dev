---
title: 'Building a personal site with SvelteKit'
date: '2026-01-10'
description: 'What I learned while building a personal site with SvelteKit.'
tags: ['SvelteKit', 'Web development', 'Frontend']
published: true
---

# Building a personal site with SvelteKit

I built this personal site with SvelteKit. This post shares what I learned along the way.

## Why I built it

I did not have a specific technical project in mind outside work as 2026 began.
I simply wanted to build something.

I considered posting on Zenn or Qiita, but discussions around those platforms on X at the start of the year
felt intimidating as a newcomer, so I decided to start with my own site instead.

## What is SvelteKit?

SvelteKit is a **full-stack web application framework** for Svelte.

### Key features

1. **File-based routing** — Routes are generated from files in `src/routes/`
2. **SSR and SSG support** — Both server-side rendering and static generation are available
3. **Fast builds** — Vite provides a fast development experience
4. **Type safety** — The TypeScript integration is excellent

## This site's stack

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS v4
- **Blog**: mdsvex (Markdown)
- **Deployment**: Vercel

### Why SvelteKit?

- It is simple and has a low learning curve
- It offers strong performance
- It provides a modern development experience

## Implementing a Markdown blog

With mdsvex, blog posts can be generated directly from Markdown files.

```bash
npm install -D mdsvex
```

The configuration is simple:

```javascript
// svelte.config.js
import { mdsvex } from 'mdsvex';

export default {
	extensions: ['.svelte', '.md'],
	preprocess: [mdsvex()]
};
```

## Closing

SvelteKit felt like a great fit for a personal site.
Give it a try!
