import { DIRECTORY, FILE } from '../src/types.js'
import { fileExcelO, filePictureO, fileText } from 'svelte-awesome/icons'

const extensionToIconMap = {
	txt: fileText,
	xlsx: fileExcelO,
	png: filePictureO
}

export default {
	icons: extension => extensionToIconMap[extension],
	files: [
		{
			type: FILE,
			name: 'file-1.txt'
		},
		{
			type: FILE,
			name: 'file-2.xlsx'
		},
		{
			type: FILE,
			name: 'file-3.png'
		}
	],
}
