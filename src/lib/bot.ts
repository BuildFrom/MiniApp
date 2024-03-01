import type { Bot } from '$telegramTypes';
import { menuButton, sendMessage, myDescription, myCommands } from '$setup';
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '$env/static/private';
import { site } from '$seeds';

const newTelegramBot = (botToken: string): Bot => {
	const bot: Bot = {
		...menuButton(botToken),
		...sendMessage(botToken),
		...myDescription(botToken),
		...myCommands(botToken)
	};

	return bot;
};

const telegramBotMiddleware = async () => {
	const telegramBot = newTelegramBot(TELEGRAM_BOT_TOKEN);
	await telegramBot.setChatMenuButton?.(TELEGRAM_CHAT_ID, {
		type: 'web_app',
		text: '📱 Test',
		web_app: {
			url: site.createSite.url.href
		}
	});
	await telegramBot.setMyName?.('setMyName', 'en');
	await telegramBot.setMyDescription?.('setMyDescription', 'en');
	await telegramBot.setMyShortDescription?.('setMyShortDescription', 'en');
	await telegramBot.setMyImage?.(site.createSite.ogImage);

	await telegramBot.setMyCommands?.(
		[
			{ command: 'start', description: 'Start using the bot' },
			{ command: 'help', description: 'Get help' }
		],
		{ type: 'default', chat_id: parseInt(TELEGRAM_CHAT_ID) },
		'en'
	);
};

export default telegramBotMiddleware;
