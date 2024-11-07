import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import sendEmail from '$lib/server/sendEmail';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	console.log(data);
	await sendEmail({ name: 'test', email: 'scaremony@gmail.com', message: 'test' });
	return json({ message: 'success' });
};
