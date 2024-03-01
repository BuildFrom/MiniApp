declare global {
	namespace App {
		interface Error {
			code?: string;
			errorId?: string;
		}
	}

	declare interface Document {
		startViewTransition(callback: () => void): void;
	}
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

export { Data, Type, Validation, Form, Document };
