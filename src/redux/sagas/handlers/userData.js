import { call, put} from 'redux-saga/effects'
import { setUser } from '../../ducks/userData'
import { requestGetUserData } from '../requests/userData'

export function* handleGetUserData(action) {	
	try {
		const response = yield call(requestGetUserData, action.payload)
		const { data } = response
		document.cookie=`docsCloneToken=${data.jwt}`;  
		yield put(setUser(data))
	} catch (err) {
		console.log(err)
	}
}