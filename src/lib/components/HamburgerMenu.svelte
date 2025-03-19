<script lang="ts">
	import { page } from '$app/stores';
	import { toggleMenu } from '$lib/toggleMenu';
</script>

<div id="hamburger-menu" class="visually-hidden visually-hidden-transition nav nav-hamburger">
	<ul class="centred features nav-hamburger-content">
		<a
			href="/"
			aria-current={$page.url.pathname === '/'}
			data-sveltekit-preload-code
			class=""
			on:click={toggleMenu}>home</a
		>
		<a
			href="/about"
			aria-current={$page.url.pathname === '/about'}
			data-sveltekit-preload-code
			class=""
			on:click={toggleMenu}>about</a
		>
		<a
			href="/blog"
			aria-current={$page.url.pathname === '/blog'}
			data-sveltekit-preload-code
			class=""
			on:click={toggleMenu}>blog</a
		>
		<a
			href="/cv"
			aria-current={$page.url.pathname === '/cv'}
			data-sveltekit-preload-code
			class=""
			on:click={toggleMenu}>cv</a
		>
		<a
			href="/projects"
			aria-current={$page.url.pathname === '/projects'}
			data-sveltekit-preload-code
			class=""
			on:click={toggleMenu}>projects</a
		>
	</ul>
</div>
<!--
<svg id="plus" width="24" height="24" fill="none" stroke-width="1.5" color="#000"
			><path
				stroke="#000"
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M6 12h6m6 0h-6m0 0V6m0 6v6"
			/></svg
		>
-->
