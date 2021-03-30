<script>
	import Icon from 'svelte-awesome'
	import { file } from 'svelte-awesome/icons'

	export let name = ''
	export let selected = false
	export let icons

	$: extension = name && name.split('.').pop()
</script>

<style>
	button:hover {
		background-color: lightgray;
	}
	div {
		padding-left: 1rem;
	}
</style>

<div>
	<button class:selected on:click>
		<Icon data={ icons && icons(extension) || file } />
		{ name }
	</button>
</div>
