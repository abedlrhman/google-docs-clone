import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MainLayout from '../layouts/mainLayout'
import {userDocuments} from '../redux/ducks/userDocuments'
import Document from './Document'
import switchCookiesToObjects from '../helpers/switchCookiesToObjects'



function Home() {
	
	const dispatch = useDispatch()

	const documentsData = useSelector(state => state.userDocuments.data.data)
	const userData = useSelector(state => state.userData?.userData?.jwt)
	
	let cookieToken = switchCookiesToObjects.docsCloneToken

	if(!cookieToken) {
		cookieToken = userData
	}

	useEffect(() => {
		if(switchCookiesToObjects.docsCloneToken || userData){
			dispatch(userDocuments({
				cookieToken
			}))
		} else {
			console.log('please login')
		}

	}, [cookieToken, userData, dispatch]);


	return (
		<MainLayout>
			{documentsData?.map(doc => (
				<Document key={doc.id} id={doc.id} attributes={doc.attributes} />
			))}
		</MainLayout>
	)
}

export default Home
