export const UPDATE_DOCUMENT_CONTENT = 'UPDATE_DOCUMENT_CONTENT';
export const SET_DOCUMENT_CONTENT = 'SET_DOCUMENT_CONTENT';
export const USER_DOCUMENTS = 'USER_DOCUMENTS';
export const SET_USER_DOCUMENTS = 'SET_USER_DOCUMENTs';
export const CREATE_DOCUMENT = 'CREATE_DOCUMENT';
export const SET_NEW_DOCUMENT = 'GET_NEW_DOCUMENT';

export const userDocuments = payload => ({
	type: USER_DOCUMENTS,
	payload
})

export const setUserDocuments = payload => ({
	type: SET_USER_DOCUMENTS,
	payload
})

export const updateUserDocument = payload => ({
	type: UPDATE_DOCUMENT_CONTENT,
	payload,
})

export const setCurrentDocument = payload => ({
	type: SET_DOCUMENT_CONTENT,
	payload,
})

export const createDocument = payload => ({
	type: CREATE_DOCUMENT,
	payload,
})

export const setNewDocument = payload => ({
	type: SET_NEW_DOCUMENT,
	payload,
})

const initialState = {
	data : [],
	currentDocument : undefined,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state= initialState, action) => {
	switch (action.type) {
		case SET_USER_DOCUMENTS : 
			return { ...state, data: action.payload }
		case UPDATE_DOCUMENT_CONTENT : 
			return { ...state, currentDocument: action.payload, }
		case CREATE_DOCUMENT : 
			return { ...state, currentDocument: action.payload, }
		default : return state
	}
}