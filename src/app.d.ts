// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { Telegram } from '@twa-dev/types';
import type { WebApp as WebAppTypes } from '@twa-dev/types';

declare global {
	namespace App {
		interface Error {
			code?: string;
			errorId?: string;
		}
		interface Locals {
			initData: {
				locale?: string;
			};
		}
	}

	declare interface Document {
		startViewTransition(callback: () => void): void;
	}

	declare interface Window {
		Telegram: Telegram;
	}

	let WebApp: WebAppTypes | undefined;
}

type Type = {
	id: string;
	category: string;
	icon: string;
	name: string;
	description: string;
	price: number;
	tags?: string[];
	kg?: number;
};

type Data = {
	name: string;
	email: string;
	phone?: number | undefined;
	message: string;
};

type Form = Omit<Data, keyof Custom>;

interface Validation {
	nameMissing?: string;
	emailMissing?: string;
	messageMissing?: string;
	emailFormat?: string;
	phoneFormat?: string;
	phoneLimit?: string;
}

export { Data, Type, Telegram, WebApp, Validation, Form, Document };
