<script lang="ts">
	import "../app.css";
	let { children } = $props();
</script>

<div
	class="flex flex-row h-20 bg-atom-black border-4 border-atom-bg rounded-b-lg"
>
	<div class="flex-1 text-atom-fg text-4xl">test</div>
</div>

{@render children()}

<style>
	:global(body) {
		background-color: theme("colors.atom.bg");
	}
</style>
