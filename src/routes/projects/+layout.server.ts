import { projects } from './data.ts';

export const load = () => {
	return {
		summaries: projects.map((project) => ({
			slug: project.slug,
			title: project.title
		}))
	};
};
