<script>
	import { Code, Server, Palette, ExternalLink, Github, Send } from 'lucide-svelte';
	import Hero from '$lib/components/blocks/Hero.svelte';
	const skillsData = [
		{
			title: 'Frontend Development',
			skills: ['Svelte', 'SvelteKit', 'TypeScript', 'Tailwind CSS'],
			icon: Code
		},
		{
			title: 'Backend Development',
			skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
			icon: Server
		},
		{
			title: 'UI/UX Design',
			skills: ['Figma', 'Adobe XD', 'Responsive Design'],
			icon: Palette
		}
	];

	const projectsData = [
		{
			title: 'E-commerce Platform',
			description: 'A full-stack e-commerce solution with Svelte, Node.js, and MongoDB.',
			image: '/placeholder.svg?height=200&width=300',
			liveLink: '#',
			githubLink: '#'
		},
		{
			title: 'Task Management App',
			description: 'A Svelte-powered mobile app for managing tasks and projects.',
			image: '/placeholder.svg?height=200&width=300',
			liveLink: '#',
			githubLink: '#'
		},
		{
			title: 'Weather Dashboard',
			description: 'A weather dashboard using Svelte and a third-party weather API.',
			image: '/placeholder.svg?height=200&width=300',
			liveLink: '#',
			githubLink: '#'
		}
	];

	let formData = {
		name: '',
		email: '',
		message: ''
	};

	function handleSubmit(event) {
		event.preventDefault();
		// Here you would typically send the form data to your backend or a service like Formspree
		console.log('Form submitted:', formData);
		// Reset form after submission
		formData = { name: '', email: '', message: '' };
	}
	// import AccordionComp from '$lib/components/AccordionComp.svelte';

	// import Accordion from '$lib/components/Accordion.svelte';
	// import { Button } from '$lib/components/ui/button';
</script>

<div>
	<Hero />
	<section id="about" class="bg-white py-20 dark:bg-gray-900">
		<div class="container mx-auto px-6">
			<h2 class="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-white">About Me</h2>
			<div class="flex flex-col items-center md:flex-row">
				<div class="mb-8 md:mb-0 md:w-1/2">
					<img
						src="/placeholder.svg?height=300&width=300"
						alt="John Doe"
						class="mx-auto rounded-full"
						width="300"
						height="300"
					/>
				</div>
				<div class="md:w-1/2 md:pl-12">
					<p class="mb-4 text-lg text-gray-600 dark:text-gray-300">
						Hi, I'm John Doe, a passionate Full Stack Developer with over 5 years of experience in
						creating web applications. I specialize in Svelte, Node.js, and modern web technologies.
					</p>
					<p class="mb-4 text-lg text-gray-600 dark:text-gray-300">
						My journey in web development started with a curiosity for creating interactive user
						experiences. Since then, I've worked on various projects, from small business websites
						to large-scale enterprise applications.
					</p>
					<p class="text-lg text-gray-600 dark:text-gray-300">
						When I'm not coding, you can find me exploring new technologies, contributing to
						open-source projects, or enjoying a good book on software architecture.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section id="skills" class="bg-gray-50 py-20 dark:bg-gray-800">
		<div class="container mx-auto px-6">
			<h2 class="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-white">My Skills</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				{#each skillsData as category}
					<div class="rounded-lg bg-white p-6 shadow-md dark:bg-gray-700">
						<div class="mb-4 flex items-center">
							<svelte:component this={category.icon} class="h-6 w-6" />
							<h3 class="ml-2 text-xl font-semibold">{category.title}</h3>
						</div>
						<ul class="list-inside list-disc">
							{#each category.skills as skill}
								<li class="text-gray-600 dark:text-gray-300">{skill}</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="projects" class="bg-white py-20 dark:bg-gray-900">
		<div class="container mx-auto px-6">
			<h2 class="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-white">My Projects</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each projectsData as project}
					<div class="overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
						<img src={project.image} alt={project.title} class="h-48 w-full object-cover" />
						<div class="p-6">
							<h3 class="mb-2 text-xl font-semibold">{project.title}</h3>
							<p class="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
							<div class="flex space-x-4">
								<a
									href={project.liveLink}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
								>
									<ExternalLink class="mr-2 h-4 w-4" />
									Live Demo
								</a>
								<a
									href={project.githubLink}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
								>
									<Github class="mr-2 h-4 w-4" />
									GitHub
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<section id="contact" class="bg-gray-50 py-20 dark:bg-gray-800">
		<div class="container mx-auto px-6">
			<h2 class="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-white">
				Get In Touch
			</h2>
			<form on:submit={handleSubmit} class="mx-auto max-w-md">
				<div class="mb-4">
					<input
						type="text"
						name="name"
						placeholder="Your Name"
						bind:value={formData.name}
						required
						class="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
					/>
				</div>
				<div class="mb-4">
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						bind:value={formData.email}
						required
						class="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
					/>
				</div>
				<div class="mb-4">
					<textarea
						name="message"
						placeholder="Your Message"
						bind:value={formData.message}
						required
						class="h-32 w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
					></textarea>
				</div>
				<button
					type="submit"
					class="w-full rounded-md bg-blue-600 px-3 py-4 text-white hover:bg-blue-700 focus:bg-blue-700 focus:outline-none"
				>
					<Send class="mr-2 inline-block h-4 w-4" />
					Send Message
				</button>
			</form>
		</div>
	</section>
</div>
