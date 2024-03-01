import type { Bot } from '$telegramTypes';

const myDescription = (botToken: string): Bot => {
	const baseUrl = `https://api.telegram.org/bot${botToken}`;

	const makeRequest = async (path: string, body: object) => {
		const res = await fetch(`${baseUrl}/${path}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});

		const response = res.ok ? await res.json() : { error: await res.text() };

		return {
			ok: res.ok,
			body: response,
			status: res.status
		};
	};

	const setMyName: Bot['setMyName'] = async (name, language_code) => {
		const body = {
			name,
			language_code
		};
		return makeRequest('setMyName', body);
	};

	const setMyDescription: Bot['setMyDescription'] = async (description, language_code) => {
		const body = {
			description,
			language_code
		};
		return makeRequest('setMyDescription', body);
	};

	const setMyShortDescription: Bot['setMyShortDescription'] = async (
		short_description,
		language_code
	) => {
		const body = {
			short_description,
			language_code
		};
		return makeRequest('setMyShortDescription', body);
	};

	const setMyImage: Bot['setMyImage'] = async (photo, language_code) => {
		const body = {
			photo,
			language_code
		};
		return makeRequest('setMyDescriptionImage', body);
	};

	return {
		botToken,
		setMyName,
		setMyDescription,
		setMyShortDescription,
		setMyImage
	};
};

export default myDescription;
