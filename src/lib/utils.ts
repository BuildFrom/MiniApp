import { menu } from '$seeds';

const utils = {
	findById(id: string) {
		return menu.product.find((item) => item.id === id);
	}
};

export default utils;