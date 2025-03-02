<script lang="ts">
	import { page, navigating } from '$app/stores';
	import '$lib/styles/style.css';
</script>

<header>
	<nav>
		<ul>
			<li>
				<a href="/" aria-current={$page.url.pathname === '/'} data-sveltekit-preload-code
					>owen stanley</a
				>
			</li>
		</ul>
		<ul>
			<li>
				<a href="/about" aria-current={$page.url.pathname === '/about'} data-sveltekit-preload-code
					>about</a
				>
			</li>
			<li>
				<a href="/blog" aria-current={$page.url.pathname === '/blog'} data-sveltekit-preload-code
					>blog</a
				>
			</li>
			<li>
				<a href="/cv" aria-current={$page.url.pathname === '/cv'} data-sveltekit-preload-code>cv</a>
			</li>
			<li>
				<a
					href="/projects"
					aria-current={$page.url.pathname === '/projects'}
					data-sveltekit-preload-code>projects</a
				>
			</li>
		</ul>
		<ul>
			<li>
				<a href="https://github.com/owenstanley" title="View my GitHub!" data-sveltekit-preload-code
					>github</a
				>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/owen-stanley/"
					title="Say hi on LinkedIn"
					data-sveltekit-preload-code>linkedin</a
				>
			</li>
			<li>
				<a
					href="mailto:owentgstanley@gmail.com"
					title="Drop me an email"
					data-sveltekit-preload-code>email</a
				>
			</li>
		</ul>
		<button>dark mode toggle</button>
		{#if $navigating}
			navigating to {$navigating.to?.url.pathname}
		{/if}
	</nav>
</header>

<style>
	ul {
		list-style-type: none;
		display: flex;
		margin: 0;
		gap: 1rem;
		padding-bottom: 0%;
		align-items: center;
	}
	a {
		text-decoration: none;
		align-items: center;
	}
	nav {
		width: 100%;
		justify-content: space-between;
	}
</style>
