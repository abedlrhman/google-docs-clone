import { takeLatest } from 'redux-saga/effects'
import { SET_DOCUMENT_CONTENT, SET_NEW_DOCUMENT, USER_DOCUMENTS } from '../ducks/userDocuments'
import { GET_NEW_USER, GET_USER } from '../ducks/userData'
import { handleGetUserDocuments } from './handlers/userDocuments'
import { handleGetUserData } from './handlers/userData'
import { handleCreateUser } from './handlers/createUser'
import { handleUpdateDocument } from './handlers/updateDocument'
import { handleCreateDocument } from './handlers/createDocument'

export function* watcherSaga () {
	yield takeLatest(USER_DOCUMENTS, handleGetUserDocuments)
	yield takeLatest(GET_USER, handleGetUserData)
	yield takeLatest(GET_NEW_USER, handleCreateUser)
	yield takeLatest(SET_DOCUMENT_CONTENT, handleUpdateDocument)
	yield takeLatest(SET_NEW_DOCUMENT, handleCreateDocument)
}