import adapter from '@sveltejs/adapter-auto';
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			extensions: ['.svelte', '.md'],
			preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] })],
			adapter: adapter(),
			csp: {
				mode: 'nonce',
				directives: {
					'default-src': ['self'],
					'base-uri': ['self'],
					'connect-src': ['self'],
					'font-src': ['self', 'https://fonts.gstatic.com'],
					'form-action': ['self'],
					'frame-ancestors': ['none'],
					'img-src': ['self', 'data:'],
					'object-src': ['none'],
					'script-src': ['self', 'https://va.vercel-scripts.com'],
					'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com']
				}
			}
		})
	]
});
