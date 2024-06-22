import { posts } from './data.ts';

export const load = () => {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
}
