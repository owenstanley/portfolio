<script>
	import Navbar from "$lib/components/navbar.svelte";
	import Footer from "$lib/components/footer.svelte";
	import "$lib/styles/style.css"
</script>

<Navbar></Navbar>
<main>
	<slot />
</main>
<Footer></Footer>
