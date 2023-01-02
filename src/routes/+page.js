export const load = async ({ fetch }) => {

	const [features, matchday] = await Promise.all([
		fetch('/api/features').then(resp => resp.json()),
		fetch('/api/matchday').then(resp => resp.json()),
	]);

	return {
		features,
		matchday
	};
};
