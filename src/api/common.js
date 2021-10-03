const URL = 'http://localhost:9999';


async function makeRequest(endpoint, method, dataToSend={}) {
	let url = URL + endpoint
	let data = {
		method: method,
		headers: {
			'Content-Type': 'application/json',
		},
	}
	if (method != 'GET') {
		data.body = JSON.stringify(dataToSend)
	}
	const response = await fetch(url, data)

	return response.json()
}


export const commonApi = {
	makeRequest
};