'use strict'

var contenedor = document.getElementById('contenedor').getElementsByTagName('a')

const getData = async () => {
	const result = await fetch('https://edu4all-serverless.vercel.app/api/cursos')
	const datos = await result.json()
	console.log(contenedor)
	for (let element of contenedor) {
		let nodos = element.childNodes
		nodos[1].innerHTML = datos[0].nombre
	}
}

getData()
