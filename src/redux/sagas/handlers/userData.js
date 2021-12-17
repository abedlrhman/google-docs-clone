import { call, put} from 'redux-saga/effects'
import { setUserData } from '../../ducks/userData'
import { requestGetUserData } from '../requests/userData'

export function* handleGetUserData(action) {
	try {
		const response = yield call(requestGetUserData)
		const { data } = response
		yield put(setUserData(data))
	} catch (err) {
		console.log(err)
	}
}