<script lang="ts">
	import { page, navigating } from '$app/stores';
</script>

<footer>
	<nav class="footer">
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
