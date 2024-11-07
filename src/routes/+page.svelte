<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Projects from '$lib/components/Projects.svelte';

	async function test() {
		const response = await fetch('/api', {
			method: 'POST',
			body: JSON.stringify({ test: 'test' }),
			headers: {
				'content-type': 'application/json'
			}
		});

		const res = await response.json();
		console.log(res);
	}
</script>

<div class={`flex flex-col items-center justify-start w-full h-full px-8 gap-4 animate-fade`}>
	<button onclick={test}>Test</button>
	<Header />
	<About />
	<Projects />
	<Contact />
	<Footer />
</div>
