<script>
	import GenericTablePager from 'svelte-generic-table-pager/src/GenericTablePager.svelte';
	import {
		handleDelete,
		handleUpdate,
		handleDetails,
		handleCreate,
		handleSort
	} from './test-handler';

	export let expanded = false;
	function toggle() {
		expanded = !expanded;
	}
	export let myObjectArray;

	let pager_config = {
		name: 'logs',
		lines: 20,
		steps: [0, 1, 2, 3, 4, 5, 10, 15, 20, 30],
		width: '350px'
	};

	const table_config = {
		name: 'log',
		options: ['CREATE', 'EDIT', 'DELETE', 'DETAILS'],
		columns_setting: [
			{ name: 'name', show: true, edit: true, size: '200px' },
			{ name: 'type', show: true, edit: false, size: '200px' }
		]
	};
</script>

<span class:expanded on:click={toggle}></span>
<GenericTablePager
	on:delete={handleDelete}
	on:update={handleUpdate}
	on:create={handleCreate}
	on:details={handleDetails}
	on:sort={handleSort}
	{table_config}
	{pager_config}
	bind:pager_data={myObjectArray}
/>
