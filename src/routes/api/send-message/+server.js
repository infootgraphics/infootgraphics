import {AIRTABLE_BASE_ID, AIRTABLE_TOKEN} from '$lib/env';

export const POST = async ({ request }) => {
	const formData = await request.formData();

	const name = formData.get('name');
	const email = formData.get('email');
	const message = formData.get('message');

	const AIRTABLE_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/submissions`;

	const data = {
		records: [
			{
				fields: {
					name,
					email,
					message
				}
			}
		]
	};

	const res = await fetch(AIRTABLE_URL, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${AIRTABLE_TOKEN}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	if (!res.ok) return new Response(JSON.stringify({ message: 'failed' }), { status: 404 });

	return new Response(JSON.stringify({ message: 'success' }), { status: 200 });
};
