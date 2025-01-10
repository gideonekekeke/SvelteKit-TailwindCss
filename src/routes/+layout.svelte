<script lang="ts">
	import Header from '$lib/components/blocks/Header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Header />
{@render children()}
