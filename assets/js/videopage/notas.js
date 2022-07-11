'use strict'

//Variables globales
const cursoId = window.location.search.substr(1).split('=')[1].split('&')[0]
let videoId = window.location.search.substr(1).split('=')[2]

window.addEventListener('load', () => {
	getNota()
})

// function validateMode() {
//     if (!document.compForm.switchMode.checked) { return true; }
//     alert("Uncheck \"Show HTML\".");
//     oDoc.focus();
//     return false;
// }

// Funciones para notas
const getNota = async () => {
	const myHeaders = new Headers()
	myHeaders.append('Content-type', 'application/json')
	myHeaders.append('authorization', localStorage.getItem('token'))

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	}

	const curso = JSON.parse(localStorage.getItem('curso'))

	if (!videoId) {
		videoId = curso.videos[0].videoId
	}

	const result = await fetch(`https://edu4all-serverless.vercel.app/api/notas/${videoId}`, requestOptions)
	const data = await result.json()

	if (data.length > 0) {
		const divNota = document.getElementById('textBox')
		divNota.innerHTML = data[0].nota
	}
	return addEventNote(data)
}

const addEventNote = (data) => {
	const divNota = document.getElementById('textBox')
	const formNota = document.getElementById('compForm')
	formNota.addEventListener('submit', (e) => {
		e.preventDefault()
		const myHeaders = new Headers()
		myHeaders.append('Content-type', 'application/json')
		myHeaders.append('authorization', localStorage.getItem('token'))
		if (data.length > 0) {
			let raw = JSON.stringify({ nota: divNota.innerHTML })
			let requestOptions = {
				method: 'PUT',
				body: raw,
				headers: myHeaders,
				redirect: 'follow',
			}
			fetch(`https://edu4all-serverless.vercel.app/api/notas/${data[0]._id}`, requestOptions)
				.then((response) => response.text())
				.then((result) => console.log(result))
		} else {
			let raw = JSON.stringify({
				cursoId: cursoId,
				videoId: videoId,
				title: '',
				nota: divNota.innerHTML,
			})
			let requestOptions = {
				method: 'POST',
				body: raw,
				headers: myHeaders,
				redirect: 'follow',
			}

			fetch(`https://edu4all-serverless.vercel.app/api/notas/`, requestOptions)
				.then((response) => response.text())
				.then((result) => console.log(result))
		}
	})
}
