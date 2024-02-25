import type { ComponentType } from 'svelte';
// Add icons

class Navigation {
	name: string;
	href: string;
	icon?: ComponentType | null;

	constructor(name: string, href: string, icon?: ComponentType | null) {
		this.name = name;
		this.href = href;
		this.icon = icon;
	}

	getName(): string {
		return this.name;
	}

	getHref(): string {
		return this.href;
	}

	getIcon(): ComponentType | null | undefined {
		return this.icon;
	}
}

// use icons here as Component remove '/' from second parameter
const createCategory = [
	new Navigation('/', '/'), 
	new Navigation('/url', '/'),
	new Navigation('/newurl', '/'),
];

const category = {
	desktop: createCategory.map(({ ...$restProps }) => ({ ...$restProps, icon: undefined })),
	mobile: createCategory
};

export default category;
