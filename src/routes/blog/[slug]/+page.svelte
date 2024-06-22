<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.post?.title} - Owen Stanley</title>
</svelte:head>

<h1>{data.post?.title}</h1>
<div>{@html data.post?.content}</div>
