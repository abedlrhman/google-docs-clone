import React, {createContext} from 'react'
import {HiDocumentText} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import '../styles/document.scss'

export const userData = createContext()

function Document(props) {

	const {id, attributes} = props

	const { title } = attributes

	const navigate = useNavigate()

	let newTitle =  ''

	if(title.length > 10) {
		// eslint-disable-next-line no-unused-expressions
		newTitle = title.slice(0,10) + "..."
	}

	const clickHandler = () => {
		navigate(`edit/${id}`)
	}

	
	
	return (
		<userData.Provider value={attributes}>
			<div className='doc-container' onClick={clickHandler}>
				<HiDocumentText fontSize="2.5em"/>
				{ title.length > 10 ? (
					<span className='doc-title'>{newTitle}</span>
				) : (
					<span className='doc-title'>{title}</span>
				)}
			</div>
		</userData.Provider>
	)
}

export default Document
