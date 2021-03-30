import FileMenu from './FileMenu.svelte'

import basic from './example-basic.js'
import customIcons from './example-custom-icons.js'

const make = (name, props) => new FileMenu({
	target: document.getElementById(`example-${name}`),
	props
})

make('basic', basic)
make('custom-icons', customIcons)
