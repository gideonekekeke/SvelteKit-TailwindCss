<!-- src/routes/dashboard/+layout.svelte -->
<script>
	export let data;
</script>

<div class="dashboard-layout">
	<aside class="sidebar">
		<h2>Dashboard Sidebar</h2>
		<ul>
			<li><a href="/dashboard">Overview</a></li>
			<li><a href="/dashboard/settings">Settings</a></li>
			<li><a href="/dashboard/profile">Profile</a></li>
		</ul>
	</aside>
	<main class="dashboard-content">
		<slot />
		<!-- Render child pages here -->
	</main>
</div>

<style>
	.dashboard-layout {
		display: flex;
		height: 100vh;
	}
	.sidebar {
		width: 250px;
		background: #f4f4f4;
		padding: 1rem;
	}
	.dashboard-content {
		flex: 1;
		padding: 2rem;
	}
</style>
