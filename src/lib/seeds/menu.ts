import { durgerking } from '../icons';

const jpegs = {
	img1: durgerking
};

class Menu {
	id: string;
	name: string;
	description: string;
	price: number;
	tags: string[];
	category: string;
	icon: string;
	kg?: number;

	constructor({
		name,
		description,
		price,
		tags,
		category,
		icon,
		kg
	}: {
		name: string;
		description: string;
		price: number;
		tags: string[];
		category: string;
		icon: string;
		kg?: number;
	}) {
		this.id = crypto.randomUUID().substring(0, 8);
		this.name = name;
		this.description = description;
		this.price = price;
		this.tags = tags;
		this.category = category;
		this.icon = icon;
		if (kg !== undefined) {
			this.kg = kg;
		}
	}
}
const createProduct: Menu[] = [
	new Menu({
		name: 'Durger King',
		description: 'A delicious burger with a juicy patty',
		price: 43,
		tags: ['burger', 'bun'],
		category: 'food',
		icon: jpegs.img1,
		kg: 0.5
	})
];

const menu = {
	product: createProduct
};

export default menu;
