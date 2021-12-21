import { call, put} from 'redux-saga/effects'
import { createUser } from '../../ducks/userData'
import { requestCreateUser } from '../requests/createUser'

export function* handleCreateUser(action) {	
	try {
		const response = yield call(requestCreateUser, action.payload)
		const { data } = response
		document.cookie=`docsCloneToken=${data.jwt}`;  
		yield put(createUser(data))
	} catch (err) {
		console.log(err)
	}
}