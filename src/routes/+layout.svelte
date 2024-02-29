<script lang="ts">
	import '$styles/app.css';
	import { onNavigate } from '$app/navigation';
	import { DesktopNav, MobileNav, Metadata, Footer, BotFather } from '$components';
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

</script>

<Metadata />
<BotFather />

<div class="flex bg-zinc-50 overflow-y-scroll font-sfo">
	<div class="fixed inset-0 flex bg-stone-900 justify-center sm:px-8 overflow-y-scroll">
		<div class="flex w-full max-w-7xl lg:px-8">
			<div class="w-full h-max ring-1 ring-zinc-100 bg-amber-50 ring-zinc-300/20">
				<DesktopNav />
				<div class="relative flex w-full flex-col">
					<main>
						<slot {data} />
						<Footer />
						<MobileNav />
					</main>
				</div>
			</div>
		</div>
	</div>
</div>
