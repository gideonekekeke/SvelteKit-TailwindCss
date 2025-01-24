<script lang="ts">
	import Footer from '$lib/components/blocks/Footer.svelte';
	import Header from '$lib/components/blocks/Header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Header />
{@render children()}
<Footer />
