<script lang="ts">
	import Arrow from '../icons/Arrow.svelte';
	import type { Project } from '../types';
	let { project, index }: { project: Project; index: number } = $props();
</script>

<div class="flex flex-col items-start justify-start p-4">
	<h2 class="vert-text text-[3em] font-bold stretch-wide pb-2">{`0${index + 1}.`}</h2>
	<div class="flex flex-col gap-2">
		<p class="font-bold stretch-wide">{project.title}</p>
		<p class="stretch-light">{project.description}</p>
		<p class="stretch-light">tech stack: {project.techStack.join(', ')}</p>
		<div class="flex flex-row items-center justify-start gap-2">
			<div class="flex flex-row items-start justify-center gap-1 text-sblue">
				<a
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
					class="hover:opacity-70 active:opacity-35"
				>
					View
				</a>
				<Arrow url={project.url} />
			</div>
			<div class="flex flex-row items-start justify-center gap-1 text-sblue">
				<a
					href={project.url}
					target="_blank"
					rel="noopener noreferrer"
					class="hover:opacity-70 active:opacity-35"
				>
					Repo
				</a>
				<Arrow url={project.repo} />
			</div>
		</div>
	</div>
</div>
