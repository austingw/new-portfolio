<script lang="ts">
	import About from '$lib/components/About.svelte';
	import Header from '$lib/components/Header.svelte';
	import Projects from '$lib/components/Projects.svelte';
</script>

<div class={`flex flex-col items-center justify-start w-full h-full px-8 gap-4 animate-fade`}>
	<Header />
	<About />
	<Projects />
</div>
