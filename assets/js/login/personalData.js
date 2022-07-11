window.addEventListener('load', () => {
	const $btnSaveData = document.querySelector('#saveData')

	$btnSaveData.addEventListener('click', (e) => {
		e.preventDefault()
		let nombre = document.querySelector('#nombre').value
		let apellido = document.querySelector('#apellido').value
		let fechaNacimiento = document.querySelector('#fechaNacimiento').value
		let nacionalidad = document.querySelector('#nacionalidad').value
		let sexo = document.querySelector('#sexo').value

		let myHeaders = new Headers()

		myHeaders.append('Content-type', 'application/json')
		myHeaders.append('authorization', localStorage.getItem('token'))

		let raw = JSON.stringify({
			nombre: nombre,
			apellido: apellido,
			fechaNacimiento: fechaNacimiento,
			nacionalidad: nacionalidad,
			sexo: sexo
		})

		var requestOptions = {
			method: 'PUT',
			body: raw,
			headers: myHeaders,
			redirect: 'follow',
		}

		if(!nombre || !apellido || !fechaNacimiento || !nacionalidad || !sexo){
			swal({
				title: 'Por favor completar todos los datos antes de continuar',
				width: 500,
				padding: 50,
				background: 'linear-gradient( 325deg, rgba(26, 29, 58, 1) 50%, rgba(33, 39, 82, 1) 50%)'
			})
		}else{
			fetch('https://edu4all-serverless.vercel.app/api/users/personalData/add', requestOptions)
			.then((response) => response.text())
			.then((result) => {
				window.location = 'selection.html'
			})
			.catch((error) => console.log('error', error))
		}
		
	})
})
