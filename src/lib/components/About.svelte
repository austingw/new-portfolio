<script lang="ts">
	import Divider from './Divider.svelte';
</script>

<div class={`flex flex-col items-start justify-start w-full h-full gap-4 animate-fade`}>
	<h2 class="text-[2em] stretch-wide">About me</h2>
	<Divider />
	<div class="grid grid-cols-4 grid-rows-1 w-full gap-2">
		<div></div>
		<div>
			<p class="pb-4">
				Hi there, I'm Austin Williams, a seasoned Software Developer. From making my first website
				in middle school to learning how to wire guitar electronics last weekend, I've always had a
				passion for learning, DIY, and creative problem-solving. I love software development,
				because it allows me the opportunity to use those passions to make engaging, feature-rich
				applications that resonate with users.
			</p>
			<Divider />
		</div>
		<div></div>
		<div>
			<div class="h-64"></div>
			<Divider />
			<p class="pt-4">
				I have years of experience in front-end and backend development, across a variety of
				languages like Go, Typescript, Python, Java, and Lua. Frameworks and libraries I've used
				include React, Svelte, Express, Django, and Spring, but I am always interested to picking up
				something new!
			</p>
		</div>
	</div>
</div>
