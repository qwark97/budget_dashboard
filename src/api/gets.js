const URL = 'http://localhost:9999';


async function getCategories() {
	let response = makeRequest('/api/categories', 'GET')
	return await response
}

async function getMoneyLeft() {
	let response = makeRequest('/api/assets/money', 'GET')
	return await response
}

async function makeRequest(endpoint, method, dataToSend={}) {
	let url = URL + endpoint
	let data = {
		method: method,
		headers: {
			'Content-Type': 'application/json',
		},
	}
	if (method != 'GET') {
		data.data = dataToSend
	}
	const response = await fetch(url, data)

	return response.json()
}


export const api = {
	getCategories,
	getMoneyLeft
};