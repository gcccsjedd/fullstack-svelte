import { handle as authHandle } from '$lib/hooks/auth';
import { error } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(authHandle, async ({ event, resolve }) => {
	const auth = await event.locals.auth();

	if (event.url.pathname.startsWith('/protected') && !auth) {
		error(500, 'Login Required!');
	}

	return resolve(event);
});
