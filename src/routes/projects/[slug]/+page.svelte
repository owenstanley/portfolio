<script lang="ts">
	export let data
</script>

<svelte:head>
	<title>{data.project?.title} - Owen Stanley</title>
</svelte:head>

<h1>{data.project?.title}</h1>