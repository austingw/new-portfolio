<script lang="ts">
	import Email from '$lib/icons/Email.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
</script>

<div class="flex flex-col items-center justify-start w-full h-full px-8 gap-4">
	<h1 class="text-[19.5vw]">austingw</h1>
	<div class="bg-cream w-full h-[1px]"></div>
	<div class="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
		<p>Austin Williams | Full-stack Software Developer</p>
		<div class="flex flex-row items-center justify-end gap-2">
			<GitHub />
			<LinkedIn />
			<Email />
		</div>
	</div>

	<div class="bg-cream w-full h-[4px]"></div>
	<div class="bg-cream w-full h-[16px]"></div>
	<div class="bg-cream w-full h-[32px]"></div>
	<div class="bg-cream w-full h-[64px]"></div>
	<div class="bg-cream w-full h-[128px]"></div>
</div>
