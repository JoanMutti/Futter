//

window.addEventListener('load', () => {
	getTags()
})
// Petición

const getTags = async () => {
	const data = await fetch('https://edu4all-serverless.vercel.app/api/cursos/tags')
	const tags = await data.json()

	return crearTags(tags)
}

const crearTags = (tags) => {
	const divPadre = document.getElementById('tags')

	tags.forEach((element) => {
		let fieldWrap = document.createElement('div')
		fieldWrap.classList.add('field-wrap')
		let checkBox = document.createElement('div')
		// checkBox.classList.add('checkbox')
		let tagOption = document.createElement('p')

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
