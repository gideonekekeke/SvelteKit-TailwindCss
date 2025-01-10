// src/hooks.server.ts
import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
	// const user = event.locals.user;
	const user = null;
	// const user = {
	// name: 'gideon'
	// }; // Assume user is stored in locals

	if (event.route.id === '/' && user) {
		// Redirect home route to dashboard if user exists
		throw redirect(302, '/dashboard');
	}

	if (event.route.id?.startsWith('/dashboard') && !user) {
		// Redirect dashboard routes to home if no user exists
		throw redirect(302, '/');
	}

	return resolve(event);
}
