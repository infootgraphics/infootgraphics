export async function load({ params }) {
	const post = await import(`../../../features/${params.slug}/post.md`);
	const { title, description, date } = post.metadata;
	const content = post.default;

	return {
		date,
		title,
		description,
		content
	};
}
