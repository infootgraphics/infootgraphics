import { sveltekit } from '@sveltejs/kit/vite';
import svg from "vite-plugin-svgstring";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), svg()],
	server: {
		fs: {
			allow: ['..']
		}
	}
};

export default config;
