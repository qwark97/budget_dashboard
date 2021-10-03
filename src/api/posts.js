import { commonApi } from './common'

async function postOperation(operation) {
	let response = commonApi.makeRequest('/api/operations', 'POST', operation)
	return await response
}

async function postCategory(categoryName) {
	let response = commonApi.makeRequest('/api/categories/' + categoryName, 'POST')
	return await response
}

export const postsApi = {
	postOperation,
    postCategory
};