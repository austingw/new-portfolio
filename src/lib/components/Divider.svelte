<script lang="ts">
	let { height }: { height?: number } = $props();
</script>

<div class={`bg-cream w-full ${height ? 'h-[' + height + 'px]' : 'h-[1px]'}`}></div>
