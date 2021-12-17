export const DOCUMENT_ID = 'DOCUMENT_ID';
export const USER_DATA = 'USER_DATA';
export const SET_USER_DATA = 'SET_USER_DATA';

export const documentId = payload => ({
	type: DOCUMENT_ID,
	payload
})

export const userData = () => ({
	type: USER_DATA
})

export const setUserData = payload => ({
	type: SET_USER_DATA,
	payload
})

const initialState = {
	data : [],
	id: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state= initialState, action) => {
	switch (action.type) {
		case DOCUMENT_ID : 
			return { ...state, id: action.payload }
		case SET_USER_DATA : 
			return { ...state, data: action.payload }
		default : return state
	}
}