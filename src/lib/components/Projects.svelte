<script lang="ts">
	import Divider from './Divider.svelte';
	import ProjectBlock from './ProjectBlock.svelte';
	import projects from '../projects';
</script>

<div class={`flex flex-col items-start justify-start w-full h-full gap-4 animate-fade`}>
	<Divider height={1} />
	<h2 class="text-[2em] stretch-wide">About me</h2>
	<Divider height={4} />
	{#each projects as project, index}
		<ProjectBlock {project} {index} />
	{/each}
</div>
