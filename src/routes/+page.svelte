<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Projects from '$lib/components/Projects.svelte';
</script>

<div class={`flex flex-col items-center justify-start w-full h-full px-8 gap-4`}>
	<Header />
	<About />
	<Projects />
	<Contact />
	<Footer />
</div>
