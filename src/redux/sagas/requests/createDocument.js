import axios from "axios";

export function requestCreateDocument (newDocument) {
	return axios.post(`http://localhost:1337/api/documents/`, {
		data : newDocument.data,
	}, {
		headers: {
    'Authorization': `bearer ${newDocument.jwt}`
  	}
	})
}