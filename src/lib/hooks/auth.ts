import { SvelteKitAuth } from '@auth/sveltekit';
import Credentials from '@auth/sveltekit/providers/credentials';

export const { handle, signIn, signOut } = SvelteKitAuth({
	providers: [
		Credentials({
			credentials: {
				username: { label: 'Username' },
				password: { label: 'Password', type: 'password' }
			},
			async authorize(credentials) {
				// Put logic in finding the user

				if (credentials) {
					return { id: '1', email: 'test@mail.com', name: 'Name Test' };
				} else {
					return null;
				}
			}
		})
	],
	secret: 'random12319a009a0s9d0ad'
});
