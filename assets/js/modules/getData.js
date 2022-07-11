'use strict'

export default async function (url) {
	const myHeaders = new Headers()
	myHeaders.append('Content-type', 'application/json')
	myHeaders.append('authorization', localStorage.getItem('token'))

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	}
	const result = await fetch(url, requestOptions)
	const data = await result.json()

	return data
}
