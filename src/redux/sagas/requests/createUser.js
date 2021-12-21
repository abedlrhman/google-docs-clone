import axios from "axios";

export function requestCreateUser (userInfo) {
	console.log(userInfo)
	return axios.post('http://localhost:1337/api/auth/local/register', {
		username: userInfo.userName,
		email: userInfo.email,
		password: userInfo.password,
	})
}