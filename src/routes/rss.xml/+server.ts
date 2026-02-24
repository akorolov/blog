import type { RequestHandler } from './$types';

const siteUrl = 'https://blog.akorl.xyz';
const feedTitle = 'akorl.xyz: a blog';
const feedDescription = 'Democracy dies in darkness';

export const prerender = true;

export const GET: RequestHandler = async () => {
	const posts = import.meta.glob('/src/posts/*.svx', { eager: true });

	const allPosts = Object.entries(posts).map(([path, module]) => {
		const slug = path.split('/').pop()?.replace('.svx', '') ?? '';
		const { title, date, description } = (module as Record<string, any>).metadata;
		return { slug, title, date, description };
	});

	allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	const items = allPosts
		.map(
			(post) => `
		<item>
			<title>${escapeXml(post.title)}</title>
			<link>${siteUrl}/blog/${post.slug}</link>
			<guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
			<description>${escapeXml(post.description)}</description>
			<pubDate>${new Date(post.date).toUTCString()}</pubDate>
		</item>`
		)
		.join('');

	const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>${escapeXml(feedTitle)}</title>
		<link>${siteUrl}/blog</link>
		<description>${escapeXml(feedDescription)}</description>
		<atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
		<language>en</language>${items}
	</channel>
</rss>`;

	return new Response(xml.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};

function escapeXml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}
