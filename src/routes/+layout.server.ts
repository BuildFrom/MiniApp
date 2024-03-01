import type { LayoutServerLoad } from './$types';
import { menu } from '$seeds';

export const load: LayoutServerLoad = async () => {
	const { product } = menu;
	const all = product.map((mi) => ({ ...mi }));
	return {
		all: all || []
	};
};