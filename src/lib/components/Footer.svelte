<script>
	export let currentYear = new Date().getFullYear();
	import { link } from '$seeds';
	import { page } from '$app/stores';
</script>

<footer class="flex-none mx-10">
	<div class="border-t pb-36 sm:pb-5">
		<div class="flex flex-col items-center mt-5 justify-between gap-2 sm:flex-row">
			<div class="flex flex-wrap justify-center gap-y-1 text-sm font-medium text-zinc-400">
				{#each link as { href, name }}
					<li
						aria-current={$page.url.pathname === href ? 'page' : undefined}
						class="inline-block py-2 px-2"
					>
						<a {href} class="hover:text-yellow-950">{name}</a>
						{#if name !== 'Phone'}
							<span class="ml-2">•</span>
						{/if}
					</li>
				{/each}
			</div>
			<p class="text-sm text-zinc-500">
				&copy; {currentYear} Your brand. All rights reserved
			</p>
		</div>
	</div>
</footer>
