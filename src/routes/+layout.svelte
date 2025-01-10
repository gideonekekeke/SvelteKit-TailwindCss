<!-- src/routes/+layout.svelte -->
<script>
	import Header from '$lib/components/blocks/Header.svelte';

	export let data;
</script>

<main>
	<Header />
	<slot />
	<!-- Render child pages here -->
</main>
