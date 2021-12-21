import { call, put} from 'redux-saga/effects'
import { setUserDocuments } from '../../ducks/userDocuments'
import { requestGetUserDocuments } from '../requests/userDocuments'

export function* handleGetUserDocuments(action) {
	try {
		const response = yield call(requestGetUserDocuments, action.payload)
		const { data } = response
		yield put(setUserDocuments(data))
	} catch (err) {
		console.log(err)
	}
}