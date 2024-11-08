<script lang="ts">
	import { z } from 'zod';
	import Divider from './Divider.svelte';

	const emailSchema = z.object({
		name: z.string().min(1).max(255),
		email: z.string().email(),
		message: z.string().min(2)
	});

	let contact = $state({ name: '', email: '', message: '' });
	let notifications: string[] = $state([]);
	let showNotification = $state(false);

	async function sendEmail() {
		const parser = emailSchema.safeParse(contact);
		if (!parser.success) {
			const errors = parser.error.issues.map((issue) => {
				return `${String(issue.path[0]).toUpperCase()} Error: ${issue.message}`;
			});
			notifications = errors;
			showNotification = true;
			setTimeout(() => {
				showNotification = false;
			}, 5000);
		}

		// if (!validate.success) {
		// 	notifications = validate.error.errors;
		// 	showNotification = true;
		// 	setTimeout(() => {
		// 		showNotification = false;
		// 	}, 5000);
		// 	return;
		// }
		//
		// const response = await fetch('/api', {
		// 	method: 'POST',
		// 	body: JSON.stringify(contact),
		// 	headers: {
		// 		'content-type': 'application/json'
		// 	}
		// });
		//
		// const res = await response.json();
		// console.log(res);
	}
</script>

<div class={`flex flex-col items-start justify-start w-full h-full gap-4 animate-fade`}>
	<Divider height={1} />
	<h2 class="text-[2em] stretch-wide">Contact</h2>
	<Divider height={4} />
	<p>Please feel free to contact me via the form below.</p>
	<div class="relative flex flex-col items-start justify-center w-full gap-4">
		<input
			bind:value={contact.name}
			type="text"
			placeholder="Name"
			class="w-full p-2 bg-bgpurp border-2 border-cream placeholder:text-cream placeholder:opacity-50 focus:outline-none"
		/>
		<input
			bind:value={contact.email}
			type="email"
			placeholder="Email"
			class="w-full p-2 bg-bgpurp border-2 border-cream placeholder:text-cream placeholder:opacity-50 focus:outline-none"
		/>
		<textarea
			bind:value={contact.message}
			placeholder="Message"
			class="w-full p-2 bg-bgpurp border-2 border-cream placeholder:text-cream placeholder:opacity-50 focus:outline-none"
		></textarea>
		<div class="flex flex-row items-center justify-end w-full">
			<button
				onclick={sendEmail}
				class="border-2 border-cream py-2 px-8 hover:opacity-70 active:opacity-35"
			>
				Send
			</button>
		</div>
		{#if showNotification}
			<div
				class="border-2 bg-cream text-bgpurp border-bgpurp w-fit h-fit absolute bottom-0 right-0 p-2 animate-fade"
			>
				{#each notifications as n}
					<p>{n}</p>
				{/each}
			</div>
		{/if}
	</div>
</div>
