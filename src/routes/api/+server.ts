import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import type { Email } from '$lib/types';
import sendEmail from '$lib/server/sendEmail';

export const POST: RequestHandler = async ({ request }) => {
	const data: Email = await request.json();
	const success = await sendEmail(data);
	return json({ success });
};
