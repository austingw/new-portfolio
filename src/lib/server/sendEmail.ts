import type { Email } from '$lib/types';
import mg from './mg';

export default async function sendEmail(data: Email) {
	let res = false;
	await mg.messages
		.create('mail.freqmob.com', {
			from: 'Freqmob <fm@mail.freqmob.com>',
			to: [data.email],
			subject: "New Message from austingw.com's Contact Form",
			text: `${data.name} left you the following message: ${data.message}`,
			html: `<p>${data.name} left you the following message: ${data.message}</p>`
		})
		.then(() => {
			res = true;
		})
		.catch((err) => {
			res = false;
			console.error(err);
		});

	return res;
}
