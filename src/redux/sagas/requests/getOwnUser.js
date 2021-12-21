import axios from "axios";

export function requestGetOwnUser (getUser) {
	return axios.request({
		url: 'http://localhost:1337/api/users/me',
		headers : {
			Authorization : `bearer ${getUser.jwt}`
		}
	})
}