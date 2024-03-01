<script lang="ts">
	export let data: PageData;
	import type { PageData } from './$types';
	import { Item } from '$components';
</script>

<Item source={data.item} />