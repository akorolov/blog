import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = import.meta.glob('/src/posts/*.svx', { eager: true });

	const allPosts = Object.entries(posts).map(([path, module]) => {
		const slug = path.split('/').pop()?.replace('.svx', '') ?? '';
		const { title, date, description } = (module as Record<string, any>).metadata;
		return { slug, title, date, description };
	});

	allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return { posts: allPosts };
};
