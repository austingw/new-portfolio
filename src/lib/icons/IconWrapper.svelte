<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children, url }: { children: Snippet; url: string } = $props();
</script>

<a href={url}>
	<button class="hover:opacity-70 active:opacity-35">
		{@render children()}
	</button>
</a>
