function mostrarContrasena() {
	let tipo = document.getElementById('password')
	let tipo1 = document.getElementById('password-repeat')
	if (tipo.type == 'password') {
		tipo.type = 'text'
		tipo1.type = 'text'
	} else {
		tipo.type = 'password'
		tipo1.type = 'password'
	}
}
function mostrarContrasenaLogin() {
	let tipo = document.getElementById('passwordRegister')
	let tipo1 = document.getElementById('password-repeat')
	if (tipo.type == 'password') {
		tipo.type = 'text'
		tipo1.type = 'text'
	} else {
		tipo.type = 'password'
		tipo1.type = 'password'
	}
}

function seePass() {
	document.getElementById('ver').style.display = 'none'
	document.getElementById('ocultar').style.display = 'block'
}

function noPass() {
	document.getElementById('ver').style.display = 'block'
	document.getElementById('ocultar').style.display = 'none'
}
