import { env } from '$env/dynamic/private';
import Mailgun from 'mailgun.js';
const mailgun = new Mailgun.default(FormData);
const mg = mailgun.client({
	username: env.MG_USERNAME!,
	key: env.MG_API_KEY!
});

export default mg;
