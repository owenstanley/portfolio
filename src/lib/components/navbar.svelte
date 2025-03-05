<script lang="ts">
	import { page, navigating } from '$app/stores';
	import HamburgerMenu from './HamburgerMenu.svelte';

	function toggleDarkMode() {
		window.document.body.classList.toggle('dark-mode');
	}
</script>

<header>
	<nav class="items-center flex justify-between w-full">
		<a class="" href="/" aria-current={$page.url.pathname === '/'} data-sveltekit-preload-code
			>owen stanley</a
		>
		<div class="hidden lg:inline-flex justify-around w-ma items-center">
			<nav class="items-center inline-flex justify-between">
				<ul class="items-center gap-8 inline-flex">
					<li>
						<a
							href="/about"
							aria-current={$page.url.pathname === '/about'}
							data-sveltekit-preload-code
							class="items-center no-underline">about</a
						>
					</li>
					<li>
						<a
							href="/blog"
							aria-current={$page.url.pathname === '/blog'}
							data-sveltekit-preload-code
							class="items-center no-underline">blog</a
						>
					</li>
					<li>
						<a
							href="/cv"
							aria-current={$page.url.pathname === '/cv'}
							data-sveltekit-preload-code
							class="items-center no-underline">cv</a
						>
					</li>
					<li>
						<a
							href="/projects"
							aria-current={$page.url.pathname === '/projects'}
							data-sveltekit-preload-code
							class="items-center no-underline">projects</a
						>
					</li>
				</ul>
			</nav>
		</div>
		<div class="items-center justify-between flex gap-4">
			<li class="justify-around w-fit gap-4 hidden lg:inline-flex">
				<a
					href="https://github.com/owenstanley"
					title="View my GitHub!"
					data-sveltekit-preload-code
					class="items-center no-underline"
					><svg width="24" height="24" aria-hidden="true" class="w-6 h-6 fill-black"
						><path
							fill-rule="evenodd"
							d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
							clip-rule="evenodd"
						/></svg
					>
				</a>
				<a
					href="https://www.linkedin.com/in/owen-stanley/"
					title="Say hi on LinkedIn"
					data-sveltekit-preload-code
					class="items-center no-underline"
					><svg width="24" height="24" aria-hidden="true" class="w-6 h-6 fill-black"
						><path
							fill-rule="evenodd"
							d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
							clip-rule="evenodd"
						/><path d="M7.2 8.809H4V19.5h3.2V8.809Z" /></svg
					>
				</a>
				<a
					href="mailto:owentgstanley@gmail.com"
					title="Drop me an email"
					data-sveltekit-preload-code
					class="items-center no-underline"
					><svg
						class="fill-none stroke-black"
						width="24"
						height="24"
						stroke-width="1.5"
						style="--darkreader-inline-color:var(--darkreader-text-000000, #e8e6e3)"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m7 9 5 3.5L17 9"
							style="--darkreader-inline-stroke:#000000"
						/><path
							d="M2 17V7c0-1.1046.8954-2 2-2h16c1.1046 0 2 .8954 2 2v10c0 1.1046-.8954 2-2 2H4c-1.1046 0-2-.8954-2-2Z"
							style="--darkreader-inline-stroke:#000000"
						/></svg
					></a
				>
			</li>
			<button on:click={toggleDarkMode}
				><svg
					class="w-6 h-6 text-gray-800 dark:hidden"
					aria-hidden="true"
					width="24"
					height="24"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						fill-rule="evenodd"
						d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
						clip-rule="evenodd"
					/>
				</svg>
				<svg
					class="hidden w-6 h-6 text-white-800 dark:flex dark:text-white"
					aria-hidden="true"
					width="24"
					height="24"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						fill-rule="evenodd"
						d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<div class="flex lg:hidden pr-3">
				<HamburgerMenu />
			</div>
		</div>
		{#if $navigating}
			navigating to {$navigating.to?.url.pathname}
		{/if}
	</nav>
</header>
