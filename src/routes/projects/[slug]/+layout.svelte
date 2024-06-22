<script lang="ts">
	export let data;
	import { onMount } from 'svelte';

	let Thing: ConstructorOfATypedSvelteComponent;

	onMount(async () => {
		Thing = (await import(`../content/${data.project?.slug}.svelte`)).default;
	})
</script>

<div class="layout">
	<main>
		<slot />
		<svelte:component this={Thing}/>
	</main>
</div>
<aside>
	<a href="/projects/">Back</a>
</aside>

<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns: 1fr 16em;
		}
	}
</style>
