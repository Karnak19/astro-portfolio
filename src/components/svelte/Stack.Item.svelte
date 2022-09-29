<script lang="ts">
	export let title: string;
	export let d: string;
	export let color: string;
	export let bg: string;
	export let desc: string;
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class=" w-full lg:w-1/5 lg:h-80 group lg:hover:w-1/2 transition-all duration-700">
	<article
		class="bg-white/30 hover:bg-white/60 overflow-hidden py-4 lg:py-0 transition-colors duration-700 backdrop-blur-xl h-full flex flex-row px-1 lg:px-0 lg:flex-col gap-2 items-center border-2 border-white/20 rounded-md">
		<div
			class="hidden lg:block overflow-hidden h-1/4 -translate-y-20 group-hover:translate-y-0 transition-transform delay-500">
			<h1 class="text-3xl font-prompt">
				{title}
			</h1>
		</div>
		<div class={`h-1/4 text-white`}>
			<svg
				role="img"
				class={`h-20 w-20 ${color} lg:text-white lg:group-hover:${color} ${bg} lg:bg-transparent lg:group-hover:${bg} transition-colors delay-500 p-2 fill-current rounded-full`}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"><title>{title}</title><path {d} /></svg>
		</div>
		<div class="overflow-hidden flex items-center h-full px-4">
			<p
				class="text-xs text-justify lg:translate-y-80 lg:group-hover:translate-y-0 transition-transform ease-out delay-700">
				{desc}
			</p>
		</div>
	</article>
</div>
