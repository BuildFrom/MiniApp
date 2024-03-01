<script lang="ts">
	import { Menu } from '$components';
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<form
	class="rounded-2xl mt-10 border p-6 border-zinc-700/40"
	use:enhance={() =>
		({ update }) => {
			update({ reset: true });
		}}
	method="POST"
>
	<Menu source={data.all} />

	<!-- <button type="submit" class="btn btn-primary">Submit</button> -->
</form>

This is a telegram web app.
