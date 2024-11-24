import { db } from '$lib/server/db';
import { users } from '$lib/server/db/schema';
import { json, type RequestHandler } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';

export const POST: RequestHandler = async ({ request, params }) => {
	const { username } = params;

	const { password } = await request.json();

	const query = await db.insert(users).values({ username: username!, password: password! });

	return json({ success: query.changes > 0 });
};

export const DELETE: RequestHandler = async ({ request, params }) => {
	const { username } = params;

	const query = await db.delete(users).where(eq(users.username, String(username)));

	return json({ success: query.changes > 0 });
};
