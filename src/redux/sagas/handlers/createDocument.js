import { call, put} from 'redux-saga/effects'
import { createDocument } from '../../ducks/userDocuments'
import { requestCreateDocument } from '../requests/createDocument'

export function* handleCreateDocument(action) {	
	try {
		const response = yield call(requestCreateDocument, action.payload)
		const { data } = response
		console.log(data)
		yield put(createDocument(data))
	} catch (err) {
		console.log(err)
	}
}