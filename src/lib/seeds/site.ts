import { dev } from '$app/environment';

class Site {
	name: string;
	url: URL;
	ogImage: string;
	description: string;
	links: {
		phone: string;
		email: string;
		instagram: URL;
	};
	keywords: string;
	constructor(
		name: string,
		url: URL,
		ogImage: string,
		description: string,
		links: {
			phone: string;
			email: string;
			instagram: URL;
		},
		keywords: string
	) {
		this.name = name;
		this.url = url;
		this.ogImage = ogImage;
		this.description = description;
		this.links = links;
		this.keywords = keywords;
	}
}

const createSite = new Site(
	'Your Brand',
	new URL(dev ? 'https://127.0.0.1:5173' : 'https://vanillabites.pages.dev/'),
	'pic.jpg',
	'Description ',
	{
		phone: 'tel:1231232132',
		email: 'mailto:yourmail@email.com',
		instagram: new URL('https://instagram.com/yourbrand')
	},
	'telegram, svelte, mini app'
);

const site = {
	createSite
};

export default site;
