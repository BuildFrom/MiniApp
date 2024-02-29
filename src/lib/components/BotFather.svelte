<svelte:head>
	<script src="https://telegram.org/js/telegram-web-app.js"></script>

	<script>
		Telegram.WebApp.ready();



		Telegram.WebApp.MainButton.setParams({
			text: 'Expand'
		});

		Telegram.WebApp.BackButton.setParams({
			text: 'Back'
		});

		Telegram.WebApp.SettingsButton.setParams({
			text: 'Settings', isVisible: true
		});

		Telegram.WebApp.MainButton.onClick(function () {
			Telegram.WebApp.expand();
		});

		Telegram.WebApp.MainButton.show();
		Telegram.WebApp.SettingsButton.show();

		Telegram.WebApp.enableClosingConfirmation();
	</script>
</svelte:head>
