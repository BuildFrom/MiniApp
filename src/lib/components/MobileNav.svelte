<script lang="ts">
	import { page } from '$app/stores';
	import { nav } from '$seeds';
</script>

<div class="fixed sm:hidden w-full h-28 -translate-x-1/2 bottom-0 left-1/2">
	<div class="grid h-full grid-cols-3 mx-auto">
		{#each nav.mobile as { href, name, icon }}
			<a
				{href}
				data-tooltip-target={'tooltip-' + { href }}
				class={`inline-flex  flex-col secondary-bg border 
				backdrop-blur-sm		 items-center justify-center group
                    ${
											$page.url.pathname === href
												? 'group flex gap-x-3 p-2 text-sm leading-6 font-semibold'
												: ' group flex gap-x-3 p-2 text-sm leading-6 font-semibold'
										}`}
			>
				{#if icon}
					<span class="flex-shrink-0">
						<svelte:component this={icon} />
					</span>
				{/if}
				<span class="truncate">{name}</span>
			</a>

			<div
				id={'tooltip-' + { href }}
				role="tooltip"
				class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 shadow-sm opacity-0 tooltip"
			>
				{name}
				<div class="tooltip-arrow" data-popper-arrow></div>
			</div>
		{/each}
	</div>
</div>
