<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>projects - Owen Stanley</title>
</svelte:head>

<h1>projects</h1>
<p>this is the projects page</p>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/projects/{slug}">{title}</a></li>
	{/each}
</ul>
