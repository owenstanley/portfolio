<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>blog - Owen Stanley</title>
</svelte:head>

<div class="">
	<h1>blog</h1>
	<p>this is the blog page</p>

	<ul>
		{#each data.summaries as { slug, title }}
			<li><a href="/blog/{slug}">{title}</a></li>
		{/each}
	</ul>
</div>
