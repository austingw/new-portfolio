<script lang="ts">
	import Arrow from '../icons/Arrow.svelte';
	import type { Project } from '../types';
	let { project, index }: { project: Project; index: number } = $props();
</script>

<div class="flex flex-col items-start justify-start">
	<h2 class="vert-text text-[3em] font-bold stretch-wide">{`0${index + 1}.`}</h2>
	<div>
		<p class="text-[2em] stretch-light">{project.title}</p>
		<p class="stretch-light">{project.description}</p>
		<p class="stretch-thin italic">tech stack: {project.techStack.join(', ')}</p>
		<div class="flex flex-row items-center justify-start gap-2">
			<a
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				class="text-sblue flex flex-row items-start justify-center gap-1 hover:opacity-70 active:opacity-35"
			>
				View <Arrow url={project.url} />
			</a>
			<a
				href={project.repo}
				target="_blank"
				rel="noopener noreferrer"
				class="text-sblue flex flex-row items-start justify-center gap-1 hover:opacity-70 active:opacity-35"
			>
				Repo <Arrow url={project.repo} />
			</a>
		</div>
	</div>
</div>
