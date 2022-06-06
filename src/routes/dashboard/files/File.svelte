<script>
	export let name;
	$: type = name.slice(name.lastIndexOf('.') + 1);
    console.log(type)
</script>

<span style="background-image: url(../../../static/tabler/icons/{type}.svg)">{name}</span>

<style>
	span {
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
	}
</style>
