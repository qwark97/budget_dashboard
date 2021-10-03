import { commonApi } from './common'

async function getCategories() {
	let response = commonApi.makeRequest('/api/categories', 'GET')
	return await response
}

async function getMoneyLeft() {
	let response = commonApi.makeRequest('/api/assets/money', 'GET')
	return await response
}


export const getsApi = {
	getCategories,
	getMoneyLeft
};