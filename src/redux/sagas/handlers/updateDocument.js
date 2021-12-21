import { call, put} from 'redux-saga/effects'
import { updateUserDocument } from '../../ducks/userDocuments'
import { requestUpdateDocument } from '../requests/updateDocument'

export function* handleUpdateDocument(action) {	
	try {
		const response = yield call(requestUpdateDocument, action.payload)
		const { data } = response
		console.log(data)
		yield put(updateUserDocument(data))
	} catch (err) {
		console.log(err)
	}
}