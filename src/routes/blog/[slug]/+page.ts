import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../posts/${params.slug}.svx`);
		return {
			content: post.default,
			metadata: post.metadata
		};
	} catch {
		error(404, 'Post not found');
	}
};
