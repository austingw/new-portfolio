<script lang="ts">
	import Bars from './Bars.svelte';
	import Divider from './Divider.svelte';
	import Email from '../icons/Email.svelte';
	import GitHub from '../icons/GitHub.svelte';
	import LinkedIn from '../icons/LinkedIn.svelte';
</script>

<div class={`flex flex-col items-center justify-start w-full h-full gap-4 animate-fade`}>
	<h1 class="text-[19.5vw] stretch-wide">austingw</h1>
	<Divider />
	<div class="flex flex-col sm:flex-row items-end sm:items-center justify-between w-full gap-2">
		<p class="font-light stretch-light hidden sm:block">Austin Williams | Software Developer</p>
		<p class="font-light stretch-light sm:hidden">Austin Williams</p>
		<p class="font-light stretch-light sm:hidden">Software Developer</p>
		<div class="flex flex-row items-center justify-end gap-2">
			<GitHub />
			<LinkedIn />
			<Email />
		</div>
	</div>
	<Bars />
</div>
