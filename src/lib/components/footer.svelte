<script lang="ts">
	import { navigating } from '$app/stores';
</script>

<footer class="wrapper">
	<nav class="nav nav-footer">
		<a
			href="https://github.com/owenstanley"
			title="View my GitHub!"
			data-sveltekit-preload-code>github</a
		>
		{#if $navigating}
			navigating to {$navigating.to?.url.pathname}
		{/if}
	</nav>
</footer>

<style>
</style>