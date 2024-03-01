import type { Bot } from '$telegramTypes';

const myCommands = (botToken: string): Bot => {
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
	const setMyCommands: Bot['setMyCommands'] = async (commands, scope, language_code) => {
		const body = {
			commands,
			scope,
			language_code
		};
		return makeRequest('setMyCommands', body);
	};

	return {
		botToken,
		setMyCommands
	};
};

export default myCommands;
