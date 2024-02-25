<script lang="ts">
	import { nav } from '$seeds';
	import { page } from '$app/stores';
</script>

<header
	class="p-4 shadow flex items-center text-center justify-center relative block px-3 py-2 transition"
>
	<div class="flex justify-between items-center flex-col ml-10 sm:ml-16 text-3xl font-bold">
		<h1 class="text-yellow-950">Your Brand </h1>
		<h2 class="text-base text-yellow-900">description</h2>
		<nav
			class="my-2 sm:mr-5 ring-2 ring-zinc-600 ring-inset hidden sm:flex items-center flex rounded-full bg-white/90 px-3 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1
			 ring-white/10 text-zinc-400 bg-amber-50/90
			ring-zinc-900/5 backdrop-blur"
		>
			<ul class="flex text-center items-center space-x-4">
				{#each nav.desktop as { href, name }}
					<li
						aria-current={$page.url.pathname === href ? 'page' : undefined}
						class="inline-block py-2 px-4"
					>
						<a
							{href}
							class={$page.url.pathname === href ? 'text-yellow-900' : 'hover:text-yellow-900'}
							>{name}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	<div class="flex items-center space-x-4"></div>
</header>
