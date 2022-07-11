window.addEventListener('load', () => {
	
	const submitButton = document.querySelector('#submitProfileData')

	submitButton.addEventListener('click', (e) => {
		e.preventDefault()
		actualizarPersonalData()
	})
})

const actualizarPersonalData = async () => {
	const formPersonalData = document.querySelector('#formPersonalData')
	const inputs = formPersonalData.getElementsByTagName('input')
	const user = JSON.parse(localStorage.getItem('user'))
	const nombre = inputs[1].value
	const apellido = inputs[2].value
	let myHeaders = new Headers()

	myHeaders.append('Content-type', 'application/json')
	myHeaders.append('authorization', localStorage.getItem('token'))

	let raw = JSON.stringify({
		nombre: nombre,
		apellido: apellido,
		nacionalidad: user.nacionalidad,
		fechaNacimiento: user.fechaNacimiento,
		sexo: user.sexo
	})

	var requestOptions = {
		method: 'PUT',
		body: raw,
		headers: myHeaders,
		redirect: 'follow',
	}

	await fetch(
		'https://edu4all-serverless.vercel.app/api/users/personalData/add',
		requestOptions
	)
		.then((response) => response.text())
		.then((result) => {
			// swal({
			// 	title: result,
			// 	width: 500,
			// 	padding: 50,
			// 	background: 'linear-gradient( 325deg, rgba(26, 29, 58, 1) 50%, rgba(33, 39, 82, 1) 50%)'
			// })
			
			location.reload()
		})
		.catch((error) => console.log('error', error))
}
