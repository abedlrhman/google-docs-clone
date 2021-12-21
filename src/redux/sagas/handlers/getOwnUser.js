import { call, put} from 'redux-saga/effects'
import { setOwnUser } from '../../ducks/userData'
import { requestGetOwnUser } from '../requests/getOwnUser'


export function* handleGetOwnUser(action) {	
	try {
		const response = yield call(requestGetOwnUser, action.payload)
		const { data } = response
		console.log(data)
		yield put(setOwnUser(data))
	} catch (err) {
		console.log(err)
	}
}