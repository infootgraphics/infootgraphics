import {AIRTABLE_BASE_ID, AIRTABLE_TOKEN} from '$lib/env';

export const POST = async ({ request }) => {
	const formData = await request.formData();

	const name = formData.get('name');
	const email = formData.get('email');
	const message = formData.get('message');

	let airtableToken;
	let airtableBaseID;

	if (process.env.NODE_ENV === 'production') {
		airtableToken = process.env.AIRTABLE_TOKEN
		airtableBaseID = process.env.AIRTABLE_BASE_ID
	} else {
		airtableToken = AIRTABLE_TOKEN
		airtableBaseID = AIRTABLE_BASE_ID
	}

	const AIRTABLE_URL = `https://api.airtable.com/v0/${airtableBaseID}/submissions`;

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
			Authorization: `Bearer ${airtableToken}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	if (!res.ok) return new Response(JSON.stringify({ message: 'failed' }), { status: 404 });

	return new Response(JSON.stringify({ message: 'success' }), { status: 200 });
};
