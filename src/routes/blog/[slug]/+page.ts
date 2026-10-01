import { calculateReadingTime, type BlogPostMetadata } from '$lib/blog';
import { error } from '@sveltejs/kit';
import type { Component } from 'svelte';

type BlogPostModule = {
	default: Component;
	metadata: BlogPostMetadata;
};

const posts = import.meta.glob<BlogPostModule>('../posts/*.md', { eager: true });
const rawPosts = import.meta.glob<string>('../posts/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
});

export async function load({ params }) {
	const path = `../posts/${params.slug}.md`;
	const post = posts[path];

	if (!post) {
		throw error(404, `Post not found: ${params.slug}`);
	}

	return {
		slug: params.slug,
		content: post.default,
		metadata: post.metadata,
		readingTime: calculateReadingTime(rawPosts[path] ?? '')
	};
}
