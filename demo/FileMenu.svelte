<script>
	import FileExplorer from '../src/FileExplorer.svelte'

	export let files
	export let icons
	export let expanded
	export let selected
</script>

<FileExplorer
	{ files }
	{ icons }
	{ expanded }
	{ selected }
/>
