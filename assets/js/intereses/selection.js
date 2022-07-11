'use strict'

import putInterests from '../modules/putInterests.js'

$('#btn').click((e) => {
	putInterests($('.checked'))
	// const interesesCheckedElements = $('.checked')
	// if (interesesCheckedElements.length < 1) {
	// 	console.log('ningun interes seleccionado')
	// } else {
	// 	let interesesChecked = []
	// 	for (let i = 0; i < interesesCheckedElements.length; i++) {
	// 		let interes = interesesCheckedElements[i].childNodes[1].innerHTML
	// 		interesesChecked.push(interes)
	// 	}

	// 	console.log(interesesChecked)

	// 	//Fetch to save interests
	// 	let myHeaders = new Headers()

	// 	myHeaders.append('Content-type', 'application/json')
	// 	myHeaders.append('authorization', localStorage.getItem('token'))

	// 	var raw = JSON.stringify({ intereses: interesesChecked })

	// 	var requestOptions = {
	// 		method: 'PUT',
	// 		body: raw,
	// 		headers: myHeaders,
	// 		redirect: 'follow',
	// 	}

	// 	fetch('https://edu4all-serverless.vercel.app/api/users/intereses', requestOptions)
	// 		.then((response) => response.text())
	// 		.then(() => {
	// 			window.location = './cursos.html'
	// 		})
	// 		.catch((error) => console.log('error', error))
	// }
})
