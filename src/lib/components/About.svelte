<script lang="ts">
	import Divider from './Divider.svelte';
</script>

<div class={`flex flex-col items-start justify-start w-full h-full gap-4 animate-fade`}>
	<h2 class="text-[2em] stretch-wide">About me</h2>
	<Divider height={4} />
	<div
		class="flex flex-col items-center justify-start md:grid md:grid-cols-3 md:grid-rows-2 w-full gap-4 self-end"
	>
		<div class="hidden md:inline"></div>
		<div>
			<p class="pb-4">
				Hi there, I'm Austin Williams, a seasoned Software Developer. From building my first website
				in middle school to wiring guitar electronics last weekend, I've always had a passion for
				research and solutioning. I love software development because it allows me to channel this
				drive into creating innovative applications that positively impact users.
			</p>
			<Divider />
		</div>
		<div class="hidden md:inline md:self-end m-0">
			<Divider />
		</div>
		<div class="hidden md:inline"></div>
		<div class="hidden md:inline"></div>
		<p class="self-start">
			I have extensive experience in both frontend and backend development, working with languages
			like Go, Typescript, Python, Java, and Lua, along with frameworks and libraries like React,
			Next.js, Svelte, Express, Django, and Spring. However, I am always open to learning something
			new!
		</p>
	</div>
</div>
