import 'quill/dist/quill.snow.css'
import Quill from 'quill'
import axios from 'axios'
import { useCallback  } from 'react'
import '../styles/textEditor.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { setCurrentDocument, setNewDocument } from '../redux/ducks/userDocuments'
import switchCookiesToObjects from '../helpers/switchCookiesToObjects'

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


	const data = useSelector(state => state.userDocuments.data.data)

	let jwt = useSelector(state => state.userData?.userData?.jwt)
	
	const params = useParams()

	const navigate = useNavigate()

	const dispatch = useDispatch()
	
	let result = data?.filter(doc => doc.id == params.id);

	if(!jwt) {
		jwt = switchCookiesToObjects.docsCloneToken
	}


	const editor = document.createElement('div')

	const wrapperRef = useCallback(wrapper => {

		if (wrapper == null) return
		
		// if(result.length === 0) {
			// 	editor.innerHTML = ''
			// }
		wrapper.innerHTML = ''
		
		if(data) {
			editor.innerHTML = result[0]?.attributes.content
			if(result.length === 0) {
				editor.innerHTML = ''
			}
		}


		wrapper.append(editor)
		
		new Quill(editor, {theme: 'snow', modules: { toolbar: TOOLBAR_OPTIONS}})

		},[])

		const saveHandler = () => {
		
			if(result.length !== 0) {
				dispatch(setCurrentDocument({
					id : result[0].id,
					data : {
						content: editor.innerText,
						title : result[0].attributes.title,
					},
					jwt,
				}))
				navigate('/')

			} else {
				const fileName = prompt('your document name')		
				if(fileName) {
					dispatch(setNewDocument({
					data : {
						content: editor.innerText,
						title : fileName,
					},
					jwt,
					}))
					navigate('/')
				}
			}


		
	}
	
	return (
		<>
			<div className='container' ref={wrapperRef}></div>
			<Button className='saveButton' onClick={saveHandler}>Save</Button>
		</>
	)
}

export default TextEditor
