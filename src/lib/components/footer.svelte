<script lang="ts">
	import '$lib/styles/style.css';
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

<style>
    ul {
        list-style-type: none;
        display: flex;
        margin: 0;
        gap: 1rem;
    }
    a {
        text-decoration: none;
    }
    nav {
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
</style>

