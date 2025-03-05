<script lang="ts">
	import Banner from '$lib/components/Banner.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import "$styles/global.css"
</script>

<Banner />
<Navbar />
<main>
	<slot />
</main>
<Footer />
