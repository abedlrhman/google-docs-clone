import axios from "axios";

export function requestGetUserDocuments (cookieToken) {
	return axios.request({
		method: 'get',
		url: 'http://localhost:1337/api/documents/',
		headers: {
			'content-type': 'application/json',
			Authorization: `Bearer ${cookieToken.cookieToken}`
		}		
	})
}