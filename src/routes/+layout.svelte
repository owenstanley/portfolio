<script lang="ts">
	import { page, navigating } from '$app/stores';
</script>

<nav>
	<a href="/" aria-current={$page.url.pathname === '/'} data-sveltekit-preload-code>home</a>
	<a href="/about" aria-current={$page.url.pathname === '/about'} data-sveltekit-preload-code
		>about</a
	>
	<a href="/projects" aria-current={$page.url.pathname === '/projects'} data-sveltekit-preload-code
		>projects</a
	>
	<a href="/blog" aria-current={$page.url.pathname === '/blog'} data-sveltekit-preload-code>blog</a>
	<a href="/contact" aria-current={$page.url.pathname === '/contact'} data-sveltekit-preload-code
		>contact</a
	>
	{#if $navigating}
		navigating to {$navigating.to?.url.pathname}
	{/if}
</nav>

<slot />
