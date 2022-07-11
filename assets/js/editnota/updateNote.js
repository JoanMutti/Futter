const updateNota = (nota) => {
	const myHeaders = new Headers()
	myHeaders.append('Content-type', 'application/json')
	myHeaders.append('authorization', localStorage.getItem('token'))
	let raw = JSON.stringify({ nota })
	let requestOptions = {
		method: 'PUT',
		body: raw,
		headers: myHeaders,
		redirect: 'follow',
	}
	fetch(
		`https://edu4all-serverless.vercel.app/api/notas/${idNote}`,
		requestOptions
	)
		.then((response) => response.text())
		.then((result) => console.log(result))
}

window.addEventListener('load', () => {
	const divNota = document.getElementById('textBox')
	const buttonUpdate = document.getElementById('Actualizar')
	buttonUpdate.addEventListener('click', () => {
		updateNota(divNota.innerHTML)
	})
})
