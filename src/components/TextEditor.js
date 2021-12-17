import 'quill/dist/quill.snow.css'
import Quill from 'quill'
import { useCallback  } from 'react'
import '../styles/textEditor.scss'
import { useSelector } from 'react-redux'

const TOOLBAR_OPTIONS = [
	[{header: [1, 2, 3, 4, 5, 6, false]},],
	[{font: []}],
	[{list: 'ordered'}, {list: 'bullet'}],
	['bold', 'italic', 'underline'],
	[{color: []}, { background: [] }],
	[{script: 'sub'}, { script: 'super'}],
	[{align: []}],
	["image", "blockquote", "code-block"],
	["clean"]
]

function TextEditor() {

	const data = useSelector(state => state.userData.data)

	console.log(data)

	const wrapperRef = useCallback(wrapper => {

		if (wrapper == null) return

		// if(data) {
		// 	wrapper.innerHTML = data.attributes.content
		// } else {
		// 	wrapper.innerHTML = ''
		// }

		
		
		const editor = document.createElement('div')

		wrapper.append(editor)
		
		new Quill(editor, {theme: 'snow', modules: { toolbar: TOOLBAR_OPTIONS}})

		},[])
	
	return (
		<div className='container' ref={wrapperRef}></div>
	)
}

export default TextEditor
