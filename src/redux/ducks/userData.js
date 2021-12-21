export const GET_USER = 'GET_USER';
export const SET_USER = 'SET_USER';
export const CREATE_USER = 'CREATE_USER';
export const GET_NEW_USER = 'GET_NEW_USER';


export const getUser = payload => ({
	type: GET_USER,
	payload
})

export const setUser = payload => ({
	type: SET_USER,
	payload
})

export const createUser = payload => ({
	type: CREATE_USER,
	payload
})

export const getNewUser = payload => ({
	type: GET_NEW_USER,
	payload
})

const initialState = {
	userData: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state= initialState, action) => {
	switch (action.type) {
		case SET_USER : 
			return { ...state, userData: action.payload }
		case CREATE_USER :  
			return { ...state, userData: action.payload }
		default : return state
	}
}