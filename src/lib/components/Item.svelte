<script lang="ts">
	import type { Type } from '$customTypes';
	export let source: Type[] = [];
</script>

<div class="px-20 sm:px-10 max-w-5xl mx-auto">
	<div class="pb-10">
		{#each source as { category, icon, name, kg, description, price, tags }}
			<!-- Path -->
			<div class="my-10 text-zinc-400">
				<a href="/">Menu</a> /
				<!-- <a href="/{category}">
					{category === 'desserts' ? 'Desserts' : category === 'drinks' ? 'Drinks' : category}
				</a>
				/ -->
				<span class="text-yellow-950">{name}</span>
			</div>
			<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-bold text-zinc-900">
				{name}
			</h1>
			<ul class="group rounded-xl">
				<img src={`..${icon}`} alt={name} class="max-w-[500px] h-60 object-cover rounded-xl" />
				<!-- Label -->
				{#if kg}
					<p class="text-2xl pt-5 text-zinc-500">
						Weight: {kg}
					</p>
				{:else}
					<div class="pt-5" />
				{/if}
				<p class="text-2xl text-zinc-500">
					{description}
				</p>
				<h3 class="text-2xl text-zinc-900">
					<span class="text-red-400">Price: {price}$.</span>
				</h3>
				<h3 class="text-2xl text-zinc-900">
					{#if tags}
						<span>Nutrition List : {`${tags.join(', ')} `}</span>
					{/if}
				</h3>
			</ul>
		{/each}
	</div>
</div>
