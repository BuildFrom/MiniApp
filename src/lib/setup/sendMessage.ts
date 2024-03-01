import type { Bot } from '$telegramTypes';

const sendMessage = (botToken: string): Bot => {
	const baseUrl = `https://api.telegram.org/bot${botToken}`;

	const sendMessage: Bot['sendMessage'] = async (chatID, message, parseMode) => {
		const url = `${baseUrl}/sendMessage`;
		const body = {
			chat_id: chatID,
			text: message,
			parse_mode: parseMode
		};

		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});

		const response = res.ok ? await res.json() : { error: await res.json() };

		return {
			ok: response.ok,
			body: response,
			status: response.status
		};
	};

	return {
		botToken,
		sendMessage
	};
};

export default sendMessage;
