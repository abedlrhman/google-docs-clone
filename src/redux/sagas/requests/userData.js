import axios from "axios";

export function requestGetUserData (userInfo) {
	console.log(userInfo)
	return axios.post('http://localhost:1337/api/auth/local/', {
		identifier: userInfo.userName,
		password: userInfo.password,
	})
}