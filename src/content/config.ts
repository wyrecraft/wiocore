import { z, defineCollection } from "astro:content";

const postCollection = defineCollection({
	type: 'content',
    schema: ({image}) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.date(),
			image: image(),
		}),
});

export const collections = {
	'posts': postCollection,
};