import axios from "axios";

export function requestGetUserData () {
	return axios.request({
		method: 'get',
		url: 'http://localhost:1337/api/documents/',
		
	})
}