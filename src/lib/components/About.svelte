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
				Hi there, I'm Austin Williams, a seasoned Software Developer. From making my first website
				in middle school to learning how to wire guitar electronics last weekend, I've always had a
				passion for learning, DIY, and solving problems. I love software development, because it
				gives me the opportunity to use those passions to make engaging, feature-rich applications
				that positively impact users.
			</p>
			<Divider />
		</div>
		<div class="hidden md:inline md:self-end m-0">
			<Divider />
		</div>
		<div class="hidden md:inline"></div>
		<div class="hidden md:inline"></div>
		<p class="self-start">
			I have years of experience in front-end and backend development, across a variety of languages
			like Go, Typescript, Python, Java, and Lua, along with frameworks like Next.js, Svelte,
			Express, Django, and Spring. That being said, I am always looking to learn something new and
			expand my repertoire!
		</p>
	</div>
</div>
