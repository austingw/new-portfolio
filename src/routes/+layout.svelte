<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';

	let { children }: { children: Snippet } = $props();
</script>

<div
	class="flex flex-col items-center justify-start bg-bgpurp text-cream min-h-screen min-w-screen"
>
	{@render children()}
</div>
