import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		mdsvex({
			extensions: ['.svx'],
			layout: join(__dirname, 'src/lib/components/PostLayout.svelte')
		})
	],
	extensions: ['.svelte', '.svx']
};

export default config;
