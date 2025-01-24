<script>
	import { Github, Linkedin, Twitter } from 'lucide-svelte';
</script>

<footer class="bg-gray-800 py-8 text-white">
	<div class="container mx-auto px-6">
		<div class="flex flex-col items-center justify-between md:flex-row">
			<div class="mb-4 md:mb-0">
				<p>&copy; 2025 Gideon Ekeke. All rights reserved.</p>
			</div>
			<div class="flex space-x-4">
				<a href="#" class="hover:text-gray-400">
					<Github class="h-6 w-6" />
				</a>
				<a href="#" class="hover:text-gray-400">
					<Linkedin class="h-6 w-6" />
				</a>
				<a href="#" class="hover:text-gray-400">
					<Twitter class="h-6 w-6" />
				</a>
			</div>
		</div>
	</div>
</footer>
