<script lang="ts">
	import Divider from './Divider.svelte';
</script>

<div class={`flex flex-col items-start justify-start w-full h-full gap-4 animate-fade`}>
	<Divider height={1} />
	<h2 class="text-[2em] stretch-wide">Contact</h2>
	<Divider height={4} />
	<p>Please feel free to contact me via the form below.</p>
	<div class="flex flex-col items-start justify-center w-full gap-4">
		<input
			type="text"
			placeholder="Name"
			class="w-full p-2 bg-bgpurp border-2 border-cream placeholder:text-cream focus:outline-none"
		/>
		<input
			type="email"
			placeholder="Email"
			class="w-full p-2 bg-bgpurp border-2 border-cream placeholder:text-cream focus:outline-none"
		/>
		<textarea
			placeholder="Message"
			class="w-full p-2 bg-bgpurp border-2 border-cream placeholder:text-cream focus:outline-none"
		></textarea>
		<div class="flex flex-row items-center justify-end w-full">
			<button class="border-2 border-cream py-2 px-8 hover:opacity-70 active:opacity-35">
				Send
			</button>
		</div>
	</div>
</div>
