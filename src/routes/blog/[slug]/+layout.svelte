<script lang="ts">
	export let data;
</script>

<div class="layout">
	<main>
		<slot />
	</main>
</div>

<aside>
	<p>more posts</p>
	<ul>
		{#each data.summaries as { slug, title }}
			<li>
				<a href="/blog/{slug}">{title}</a>
			</li>
		{/each}
	</ul>
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
