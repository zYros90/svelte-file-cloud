<script>
	import Welcome from './login/Welcome.svelte';
	import Home from './dashboard/home.svelte';
	import { userStore } from './props/stores.js';
</script>

{#if $userStore.token === ''}
	<Welcome />
{:else}
	<Home />
{/if}
