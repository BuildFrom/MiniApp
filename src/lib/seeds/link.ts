import { Email, Instagram, Phone } from '$icons';
import type { ComponentType } from 'svelte';
import { site } from '$seeds';

class Link {
	name: string;
	href: string;
	icon: ComponentType | null;

	constructor(name: string, href: string, icon: ComponentType | null) {
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

const link: Link[] = [
	new Link('Email', site.createSite.links.email, Email),
	new Link('Instagram', site.createSite.links.instagram.href, Instagram),
	new Link('Phone', site.createSite.links.phone, Phone)
];

export default link;
