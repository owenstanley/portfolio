import { projects } from '../data.ts';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const project = projects.find((project) => project.slug === params.slug);

	if (!project) throw error(404);

	return {
		project
	};
}
