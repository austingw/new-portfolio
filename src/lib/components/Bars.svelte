<script lang="ts">
	let { reverse }: { reverse?: boolean } = $props();
</script>

<div
	class={`flex ${reverse ? 'flex-col-reverse' : 'flex-col'} w-full items-center justify-center gap-4 `}
>
	<div class="bg-cream w-full h-[4px]"></div>
	<div class="bg-cream w-full h-[16px]"></div>
	<div class="bg-cream w-full h-[32px]"></div>
	<div class="bg-cream w-full h-[64px]"></div>
	<div class="bg-cream w-full h-[128px]"></div>
</div>
