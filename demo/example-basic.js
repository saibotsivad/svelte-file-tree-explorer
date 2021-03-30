import { DIRECTORY, FILE } from '../src/types.js'

export default {
	files: [
		{
			type: DIRECTORY,
			name: 'dir',
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
		{
			type: DIRECTORY,
			name: 'has-sub-folders',
			children: [
				{
					type: DIRECTORY,
					name: 'children',
					children: [
						{
							type: FILE,
							name: 'file4-txt'
						},
						{
							type: FILE,
							name: 'file5-txt'
						},
						{
							type: FILE,
							name: 'file6-txt'
						},
					]
				},
				{
					type: FILE,
					name: 'file-3.txt'
				},
			]
		},
	]
}
