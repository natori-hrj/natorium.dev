import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const post = await import(`../posts/${params.slug}.md`);

		return {
			slug: params.slug,
			content: post.default,
			metadata: post.metadata
		};
	} catch {
		throw error(404, `Post not found: ${params.slug}`);
	}
}
