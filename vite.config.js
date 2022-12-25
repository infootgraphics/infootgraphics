import { sveltekit } from '@sveltejs/kit/vite';
import svg from "vite-plugin-svgstring";
import path from "path";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), svg()],
	resolve: {
		alias: {
			$features: path.resolve("./src/features")
		}
	},
	define: {
		'process.env': process.env,
	}
};

export default config;
