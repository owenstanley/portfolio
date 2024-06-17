<script>
	export let data;
</script>

<h1>blog</h1>
<p>this is the blog page</p>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/blog/{slug}">{title}</a></li>
	{/each}
</ul>
