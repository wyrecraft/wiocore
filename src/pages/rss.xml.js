import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { CONFIG } from "../config";

export async function GET(context) {
	const posts = (await getCollection('posts')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);
	return rss({
		title: CONFIG.title,
		description: CONFIG.description,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/posts/${post.slug}/`,
		})),
	});
}