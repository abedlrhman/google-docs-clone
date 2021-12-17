import { useEffect, useState, createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainLayout from '../layouts/mainLayout'
import {userData} from '../redux/ducks/userData'
import Document from './Document'


export const usersData = createContext()

function Home() {

	const [documents, setDocuments] = useState([])
	
	const dispatch = useDispatch()

	const documentsData = useSelector(state => state.userData.data)
	

	useEffect(() => {
		dispatch(userData())
		// axios.get('http://localhost:1337/api/documents/').then(res => {
		// 	setDocuments(res.data.data)
		// })

	}, [dispatch])

	console.log(documentsData)

	return (
		<usersData.Provider value={documents}>
			<MainLayout>
				{documents.map(doc => (
					<Document key={doc.id} id={doc.id} attributes={doc.attributes} />
				))}
			</MainLayout>
		</usersData.Provider>
	)
}

export default Home
