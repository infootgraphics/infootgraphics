export const fetchPosts = async () => {
	const allPostPaths = import.meta.glob('../../features/**/*.md');
	const iterablePostPaths = Object.entries(allPostPaths);

	const allPosts = await Promise.all(
		iterablePostPaths.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.split('/').slice(-2, -1);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};