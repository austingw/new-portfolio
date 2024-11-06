<script lang="ts">
	import Bars from './Bars.svelte';
</script>

<div class={`flex flex-col items-start justify-start w-full h-full gap-4 animate-fade`}>
	<Bars reverse />
	<div class="flex flex-col md:flex-row items-start justify-center gap-2 pb-4">
		<p>© {new Date().getFullYear()} Austin Williams</p>
		<p class="hidden md:inline">|</p>
		<a
			href="https://github.com/austingw/new-portfolio"
			target="_blank"
			rel="noopener noreferrer"
			class="text-sblue hover:opacity-70 active:opacity-35"
		>
			Check out the code for my portfolio on GitHub :)
		</a>
	</div>
</div>
