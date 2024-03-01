<script lang="ts">
	import { Link } from '$icons';
	import { page } from '$app/stores';
	import type { Type } from '$customTypes';
	export let source: Type[] = [];
</script>

{#if $page.url.pathname !== '/'}
	<div class="mt-10 px-20 sm:px-10 max-w-5xl mx-auto">
		<a class="text-zinc-400" href="/">Menu</a> /
		<!-- <span class="text-yellow-950">
			{#if source.length > 0 && source[0].category !== undefined}
				{source[0].category === 'desserts'
					? 'Desserts'
					: source[0].category === 'drinks'
						? 'Drinks'
						: source[0].category}
			{/if}
		</span> -->
	</div>
{/if}

<div class="px-20 sm:px-10 max-w-5xl mx-auto">
	<div class="grid grid-cols-1 py-10 gap-x-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		{#each source as { id, category, icon, name, description, price, kg }}
			<ul
				class="group my-3 rounded-xl px-3 py-3
                border hover:border-amber-400 border-2"
			>
				<a href="{id}" class="group flex flex-col h-full">
					<img src={icon} alt={name} class="w-full h-40 object-cover rounded-xl" />

					<h1 class="mt-5 text-zinc-600 justify-between flex">
						<div class="max-w-[200px]">{name}</div>
						<div class="flex flex-wrap">${price}</div>
					</h1>

					{#if kg}
						<p class="text-zinc-500 mt-2">Weight: {kg}kg.</p>
					{/if}

					<h2 class="text-sm mt-5 text-zinc-500 line-clamp-3 flex-grow">
						{description}
					</h2>

					<div
						class="flex justify-between items-end flex items-center mt-5 text-zinc-600 transition-colors group-hover:text-red-900"
					>
						<div class="flex items-center">
							<Link />
							<span class="ml-2">Read more</span>
						</div>
					</div>
				</a>
			</ul>
		{/each}
	</div>
</div>