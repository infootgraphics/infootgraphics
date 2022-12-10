export const load = async ({ fetch }) => {
	const response = await fetch('/api/features');
	const features = await response.json();

	return {
		features
	};
};
