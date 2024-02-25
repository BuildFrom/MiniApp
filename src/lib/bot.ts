type Bot = {
	botToken: string;
	sendMessage: (chatID: string, message: string, parseMode?: string) => Promise<Response>;
	setChatMenuButton: (chatID: string, url: string) => Promise<Response>;
};

type Response = {
	ok: boolean;
	body: Record<string, string | number | boolean>;
	status: number;
};

const newTelegramBot = (botToken: string): Bot => {
	const baseUrl = `https://api.telegram.org/bot${botToken}`;

	// ----------------------------

	const sendMessage: Bot['sendMessage'] = async (chatID, message, parseMode) => {
		const url = `${baseUrl}/sendMessage`;
		const body = {
			chat_id: chatID,
			text: message,
			parse_mode: parseMode
		};

		const res1 = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});

		const res1b = res1.ok ? await res1.json() : { error: await res1.text() };

		return {
			ok: res1.ok,
			body: res1b,
			status: res1.status
		};
	};

	// ----------------------------

	// Improvements needed in this function to create Menu button programmatically, currently it can be done via BotFather

	const setChatMenuButton: Bot['setChatMenuButton'] = async (chatID, url) => {
		const body = {
			chat_id: chatID,
			menu_button: {
				type: 'web_app',
				text: 'Menu',
				web_app: {
					url
				}
			}
		};

		console.log(body);

		const res2 = await fetch(baseUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});

		console.log(res2);

		const res2b = res2.ok ? await res2.json() : { error: await res2.text() };

		return {
			ok: res2.ok,
			body: res2b,
			status: res2.status
		};
	};

	return {
		botToken,
		sendMessage,
		setChatMenuButton
	};

	// ----------------------------
};

export default newTelegramBot;
