import axios from "axios";

export function requestUpdateDocument (newDocument) {
			console.log(newDocument.jwt)
	return axios.put(`http://localhost:1337/api/documents/${newDocument.id}`, {
		data : newDocument.data,
	}, {
		headers: {
    'Authorization': `bearer ${newDocument.jwt}`
  	}
	})
}