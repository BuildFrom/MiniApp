import { newTelegramBot } from '$lib';
import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } from '$env/static/private';
import { site } from '$seeds';
import type { Actions } from '@sveltejs/kit';

export const actions = {
	default: async () => {
		await telegramBotMiddleware();
	}
} satisfies Actions;

const telegramBotMiddleware = async () => {
	const telegramBot = newTelegramBot(TELEGRAM_BOT_TOKEN);
	// const textBuilder = ``;
	// await telegramBot.sendMessage(TELEGRAM_CHAT_ID, textBuilder, 'Markdown');
	await telegramBot.setChatMenuButton(TELEGRAM_CHAT_ID, site.createSite.url.host);
};
