<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<form
	class="rounded-2xl mt-10 border p-6 border-zinc-700/40"
	use:enhance={() =>
		({ update }) => {
			update({ reset: true });
		}}
	method="POST"
>
	<button type="submit" class="btn btn-primary">Submit</button>
</form>

This is a telegram web app.
