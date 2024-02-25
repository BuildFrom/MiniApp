<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;

	$: title = $page?.status
		? `${$page.status} - ${
				$page.status === 404 ? 'Not Found' : $page.status === 500 ? 'Server Error' : ''
			}`
		: '';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="min-h-screen flex items-center justify-center bg-zing-900">
	<main class="max-w-2xl p-6 rounded-md text-center">
		<button
			class="ml-4 items-center hover:text-purple-400 rounded-full px-3 py-1 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur bg-zinc-800/90 text-zinc-200 ring-white/10"
			on:click={() => history.back()}
		>
			Go Back
		</button>

		{#if $page?.status === 404}
			<h1 class="mt-4 text-2xl font-bold text-red-600">Page Not Found</h1>
		{:else if $page?.status === 500}
			<h1 class="mt-4 text-2xl font-bold text-white">
				Whoops. We weren't expecting that. We're investigating the issue.
			</h1>
		{/if}
	</main>
</div>
