import { promises as fs } from 'fs';
import { error } from '@sveltejs/kit';

export const GET = async ({ params }) => {
	const coverPath = `./src/features/${params.slug}/cover.png`;

	let asset;

	try {
		asset = await fs.readFile(coverPath);
	} catch (err) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return new Response(asset, {
		headers: {
			'Content-Type': 'image/jpg'
		}
	});
};
