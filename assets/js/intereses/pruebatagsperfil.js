'use strict'

import putInterests from '../modules/putInterests.js'
import getDataUser from '../userData/userData.js'

window.addEventListener('load', async () => {
	await getTags()
	document.querySelector('#btn-save-interests').addEventListener('click', () => {
		putInterests(document.querySelectorAll('.checked')).then(() => {
			localStorage.removeItem('user')
			getDataUser().then(() => {
				if (document.querySelectorAll('.checked').length > 0){
					location.reload()
				}else{
					swal({
						title: 'No seleccionaste ningun interes',
						width: 500,
						padding: 50,
						background: 'linear-gradient( 325deg, rgba(26, 29, 58, 1) 50%, rgba(33, 39, 82, 1) 50%)'
					})
				}
			})

		})
	})
})
// Petición

const getTags = async () => {
	const data = await fetch('https://edu4all-serverless.vercel.app/api/cursos/tags')
	const tags = await data.json()

	return crearTags(tags)
}

const crearTags = (tags) => {
	const divPadre = document.getElementById('change-int')


	tags.forEach((element) => {
		let fieldWrap = document.createElement('div')
		fieldWrap.classList.add('field-wrap')
		let checkBox = document.createElement('div')
		// checkBox.classList.add('checkbox')
		let tagOption = document.createElement('p')

		if(JSON.parse(localStorage.getItem('user')).intereses.includes(element.nombre)){
			fieldWrap.classList.toggle('checked')
		}

		fieldWrap.addEventListener('click', (e) => {
			e.preventDefault()
			fieldWrap.classList.toggle('checked')
		})

		tagOption.innerHTML = element.nombre

		fieldWrap.appendChild(checkBox)
		fieldWrap.appendChild(tagOption)
		divPadre.appendChild(fieldWrap)
	})
}
//recibir tags
