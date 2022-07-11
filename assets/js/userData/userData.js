'use strict'
export default async function () {
		let user

		let myHeaders = new Headers()

		myHeaders.append('Content-type', 'application/json')
		myHeaders.append('authorization', localStorage.getItem('token'))

		var requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow',
		}
		
		const data = await fetch('https://edu4all-serverless.vercel.app/api/users/profile', requestOptions)
		user = await data.json()
		localStorage.setItem('user', JSON.stringify(user))		

		return user
}
