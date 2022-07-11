const idNote = window.location.search.substr(1)

window.addEventListener('load', () => {
	recoverNote(idNote)
})

const recoverNote = async (idNote) => {
	const myHeaders = new Headers()
	myHeaders.append('Content-type', 'application/json')
	myHeaders.append('authorization', localStorage.getItem('token'))

	const requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	}

	const result = await fetch(
		`https://edu4all-serverless.vercel.app/api/notas/single/${idNote}`,
		requestOptions
	)
	const data = await result.json()

	document.getElementById('textBox').innerHTML = data.nota
}
