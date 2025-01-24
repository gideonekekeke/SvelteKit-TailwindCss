<script>
	import { Menu, X } from 'lucide-svelte';
	let isOpen = false;
</script>

<header class="bg-white shadow-md dark:bg-gray-800">
	<nav class="container mx-auto px-6 py-3">
		<div class="flex items-center justify-between">
			<a href="/" class="text-2xl font-bold text-gray-800 dark:text-white"> GE </a>
			<div class="hidden space-x-4 md:flex">
				<a
					href="#about"
					class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
					>About</a
				>
				<a
					href="#skills"
					class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
					>Skills</a
				>
				<a
					href="#projects"
					class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
					>Projects</a
				>
				<a
					href="#contact"
					class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
					>Contact</a
				>
			</div>
			<div class="md:hidden">
				<button on:click={() => (isOpen = !isOpen)}>
					{#if isOpen}
						<X />
					{:else}
						<Menu />
					{/if}
				</button>
			</div>
		</div>
		{#if isOpen}
			<div class="mt-4 md:hidden">
				<a
					href="#about"
					class="block py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
					>About</a
				>
				<a
					href="#skills"
					class="block py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
					>Skills</a
				>
				<a
					href="#projects"
					class="block py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
					>Projects</a
				>
				<a
					href="#contact"
					class="block py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
					>Contact</a
				>
			</div>
		{/if}
	</nav>
</header>
