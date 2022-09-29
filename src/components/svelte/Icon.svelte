<script lang="ts">
	export let title: string;
</script>

<svg
	role="img"
	class="w-8 h-8 transition-colors text-white hover:text-indigo-600 fill-current"
	viewBox="0 0 24 24"
	xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<slot />
</svg>
