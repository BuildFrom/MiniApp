import type { Bot } from '$telegramTypes';

const menuButton = (botToken: string): Bot => {
	const baseUrl = `https://api.telegram.org/bot${botToken}`;

	// ----------------------------
	const setChatMenuButton: Bot['setChatMenuButton'] = async (chatID, menu_button) => {
		const body = {
			chat_id: chatID,
			menu_button: menu_button
		};
		const res = await fetch(`${baseUrl}/setChatMenuButton`, {
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

	return {
		botToken,
		setChatMenuButton
	};
};

export default menuButton;
