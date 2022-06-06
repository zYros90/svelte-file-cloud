<!-- import { onMount } from "svelte"; -->
<!-- The onMount hook in Svelte is a lifecycle method used
     to define instructions that should be carried out once
      the component where it’s used is first rendered in 
      the DOM tree. -->

<script>
    import Header from '$lib/header/Header.svelte';
</script>

<Header />

<svelte:head>
      <title>Home</title>
</svelte:head>

<h1>Home</h1>

