import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';

const config = {
	preprocess: preprocess({
		postcss: true
	}),
	kit: {
		adapter: adapter(),
		alias: {
			$source: 'src/',
			$customTypes: 'src/app.d.ts',
			$styles: 'src/styles',
			$components: 'src/lib/components',
			$icons: 'src/lib/icons',
			$seeds: 'src/lib/seeds'
		}
	}
};

export default config;
