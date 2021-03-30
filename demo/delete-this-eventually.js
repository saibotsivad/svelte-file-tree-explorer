import FileMenu from './FileMenu.svelte'
import { DIRECTORY, FILE } from '../src/types.js'
import { fileCodeO } from 'svelte-awesome/icons'

// used for the mock data bits
let countGood = 0
let countBad = 0

// configuration

// true to start with all folders expanded
// false to start with all folders closed
// object where key is full path, value true/false, to specify
// function that gets handed a key
let expanded = true

// list of file/directory objects, recursive
let files = [
	// directory with files already loaded
	{
		type: DIRECTORY,
		name: 'dir-with-files-loaded',
		children: [
			{
				type: FILE,
				name: 'file-1.txt'
			},
			{
				type: FILE,
				name: 'file-2.css'
			},
			{
				type: FILE,
				name: 'file-3.js'
			}
		]
	},
	// directory with lazy loaded files
	{
		type: DIRECTORY,
		name: 'dir-with-lazy-loaded-files',
		children: async () => new Promise(resolve => {
			setTimeout(() => {
				countGood++
				resolve([
					{
						type: FILE,
						name: 'file-4.txt'
					},
					{
						type: FILE,
						name: 'file-5.txt'
					},
					{
						type: FILE,
						name: `count-${countGood}.txt`
					}
				])
			}, 1000)
		})
	},
	// lazy load but with errors
	{
		type: DIRECTORY,
		name: 'lazy-load-with-errors',
		children: async () => new Promise((_, reject) => {
			setTimeout(() => {
				countBad++
				reject(`stuffs on fire yo ${countBad}`)
			}, 1000)
		})
	},
	{
		type: DIRECTORY,
		name: 'lazy-load-never-resolves',
		children: async() => new Promise(() => {
			// it never resolves
		})
	},
	// directory with children
	{
		type: DIRECTORY,
		name: 'dir-with-children',
		children: [
			{
				type: DIRECTORY,
				name: 'child-1',
				children: [
					{
						type: FILE,
						name: 'file-6.txt'
					},
					{
						type: FILE,
						name: 'file-7.txt'
					}
				]
			},
			{
				type: DIRECTORY,
				name: 'child-2',
				children: [
					{
						type: FILE,
						name: 'file-8.txt'
					},
					{
						type: FILE,
						name: 'file-9.txt'
					}
				]
			},
			{
				type: FILE,
				name: 'file-10.txt'
			}
		]
	},
]

// provide your own custom file icon mapper function
const myExtensionToIconMap = {
	css: fileCodeO,
	js: fileCodeO,
	html: fileCodeO
}
const icons = extension => {
	return myExtensionToIconMap[extension]
}

// "selected" is the full path+file of the selected file
const selected = 'dir-with-files-loaded/file-2.css'

const app = new FileMenu({
	target: document.body,
	props: {
		expanded,
		files,
		selected,
		icons
	}
})

export default app
