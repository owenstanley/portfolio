<script lang="ts">
	import { page } from '$app/stores';
</script>

<li class="">
	<a
		href="/"
		aria-current={$page.url.pathname === '/'}
		data-sveltekit-preload-code
		class=""
		><svg
			width="24px"
			height="24px"
			stroke-width="1.5"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			color="#000000"
			style="--darkreader-inline-color: var(--darkreader-text-000000, #e8e6e3);"
			data-darkreader-inline-color=""
			class=""
			><path
				d="M3 5H21"
				stroke="#000000"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				style="--darkreader-inline-stroke: #000000;"
				data-darkreader-inline-stroke=""
			></path><path
				d="M3 12H21"
				stroke="#000000"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				style="--darkreader-inline-stroke: #000000;"
				data-darkreader-inline-stroke=""
			></path><path
				d="M3 19H21"
				stroke="#000000"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				style="--darkreader-inline-stroke: #000000;"
				data-darkreader-inline-stroke=""
			></path></svg
		></a
	>
</li>
