function toggleSignup() {
	document.getElementById('login-toggle').style.backgroundColor = '#fff'
	document.getElementById('login-toggle').style.color = '#222'
	document.getElementById('signup-toggle').style.backgroundColor = '#37B3F3'
	document.getElementById('signup-toggle').style.color = '#fff'
	document.getElementById('login-form').style.display = 'none'
	document.getElementById('signup-form').style.display = 'block'
}

function toggleLogin() {
	document.getElementById('login-toggle').style.backgroundColor = '#37B3F3'
	document.getElementById('login-toggle').style.color = '#fff'
	document.getElementById('signup-toggle').style.backgroundColor = '#fff'
	document.getElementById('signup-toggle').style.color = '#222'
	document.getElementById('signup-form').style.display = 'none'
	document.getElementById('login-form').style.display = 'block'
}
//Seleccion de formularios
const formularioLogin = document.querySelector('#login')
const formularioRegister = document.querySelector('#register')

//Eventos Login y Register

formularioLogin.addEventListener('submit', (e) => {
	e.preventDefault()
	let email = document.querySelector('#email').value.toLowerCase()
	let password = document.querySelector('#password').value

	let myHeaders = new Headers()
	myHeaders.append('Content-type', 'application/json')
	myHeaders.append('Access-Control-Allow-Origin', '*')

	let raw = JSON.stringify({ email: email, password: password })

	let requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
	}

	fetch('https://edu4all-serverless.vercel.app/api/auth/login/', requestOptions)
		.then((response) => response.text())
		.then((result) => {
			if (result.indexOf('token') === -1) {
				return swal({
					title: result,
					width: 500,
					padding: 50,
					background: 'linear-gradient( 325deg, rgba(26, 29, 58, 1) 50%, rgba(33, 39, 82, 1) 50%)'
				})
			}
			console.log(result.split(':')[1].split('"')[1])
			localStorage.setItem('token', result.split(':')[1].split('"')[1])
			window.location.href = 'cursos.html'
		})
		.catch((error) => console.log('error', error))
})

//registracion 

formularioRegister.addEventListener('submit', (e) => {
	e.preventDefault()
	let emailRegister = document.querySelector('#emailRegister').value.toLowerCase()
	let passwordRegister = document.querySelector('#passwordRegister').value
	let repeatPassword = document.querySelector('#password-repeat').value	

	if ( passwordRegister === repeatPassword ) {
		let myHeaders = new Headers()
		myHeaders.append('Content-type', 'application/json')

		let raw = JSON.stringify({ email: emailRegister, password: passwordRegister })

		let requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
		}

		

		fetch('https://edu4all-serverless.vercel.app/api/auth/register', requestOptions)
		.then((response) => response.text())
		.then((result) => {
			if (result != 'Usuario ya existe') {
				fetch('https://edu4all-serverless.vercel.app/api/auth/login', requestOptions)
					.then((response) => response.text())
					.then((result) => {
						if (result.indexOf('token') === -1) {
							return swal({
								title: result,
								width: 500,
								padding: 50,
								background: 'linear-gradient( 325deg, rgba(26, 29, 58, 1) 50%, rgba(33, 39, 82, 1) 50%)'
							})
							
						}
						localStorage.setItem('token', result.split(':')[1].split('"')[1])
						window.location.href = 'personalData.html'
					})
					.catch((error) => console.log('error', error))
			}
			swal({
				title: result,
				width: 500,
				padding: 50,
				background: 'linear-gradient( 325deg, rgba(26, 29, 58, 1) 50%, rgba(33, 39, 82, 1) 50%)'
			})
			
		})
		.catch((error) => console.log('error', error))

	}
	else{
		swal({
		title: 'Las contraseñas deben ser iguales.',
		width: 500,
		padding: 50,
		background: 'linear-gradient( 325deg, rgba(26, 29, 58, 1) 50%, rgba(33, 39, 82, 1) 50%)'
	})
		
	}
	

	
})


