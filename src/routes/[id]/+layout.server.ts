import type { LayoutServerLoad } from './$types';
import { utils } from '$lib';

export const load: LayoutServerLoad = async ({ params }) => {
	const { id } = params;
	const selected = utils.findById(id);

	return {
		item: selected ? [{ ...selected }] : []
	};
};