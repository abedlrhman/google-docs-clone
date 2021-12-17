import { takeLatest } from 'redux-saga/effects'
import { USER_DATA } from '../ducks/userData'
import { handleGetUserData } from './handlers/userData'

export function* watcherSaga () {
	yield takeLatest(USER_DATA, handleGetUserData)
}