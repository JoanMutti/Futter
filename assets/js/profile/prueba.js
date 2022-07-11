'use strict'


const putDataOnDom = (user) => {
	try {
		document.querySelector('#userImg span').innerHTML = `${user.nombre[0]}${user.apellido[0]}`
	} catch (error) {
		console.log(error)
	}
	const $email = document.getElementById('email')
	const $name = document.getElementById('name')
	const $lastName = document.getElementById('lastName')
	const $region = document.getElementById('Region')
	const $fechaNacimiento = document.getElementById('fechaNacimiento')
	try {
		$email.value = user.email
	} catch (error) {
		console.log(error)
	}
	try {
		$name.value = user.nombre
	} catch (error) {
		console.log(error)
	}
	try {
		$lastName.value = user.apellido
	} catch (error) {
		console.log(error)
	}
	try {
		$region.value = user.nacionalidad
	} catch (error) {
		console.log(error)
	}
	try {
		console.log(user)
		$fechaNacimiento.value = user.fechaNacimiento.split('T')[0]
	} catch (error) {
		console.log(error)
	}
	
	// const $sobreMi = document.getElementById('textExample')
	// $sobreMi.value = user.descripcion
	// user.skills.forEach((element) => {
	// 	skilltag.appendChild(CrearItems(element.skill, element.nivel))
	// 	diseñoSkill()
	// })
}

const getUsuario = async () => {
	let myHeaders = new Headers()

	myHeaders.append('Content-type', 'application/json')
	myHeaders.append('authorization', localStorage.getItem('token'))

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	}

	const data = await fetch(
		'https://edu4all-serverless.vercel.app/api/users/profile',
		requestOptions
	)
	const user = await data.json()

	return putDataOnDom(user)
}
getUsuario()

// const eligeSkills = (container, SkillsArray) => {
// 	//zona elegir puntaje
// 	const divContainer = document.createElement('div')
// 	divContainer.classList.add('div-select-skills-p')
// 	const spanFirst = document.createElement('span')
// 	spanFirst.classList.add('custom-dropdown', 'big')
// 	const selectFirst = document.createElement('select')
// 	selectFirst.setAttribute('id', 'select')
// 	selectFirst.classList.add('select')

// 	//zona elegir puntaje
// 	const divScore = document.createElement('div')
// 	divScore.classList.add('custom-dropdown', 'big')
// 	const selectSecondary = document.createElement('select')
// 	selectSecondary.setAttribute('id', 'puntaje')
// 	selectSecondary.classList.add('select')

// 	const buttonplus = document.createElement('button')
// 	buttonplus.setAttribute('id', 'Agregarskills')
// 	const iconplus = document.createElement('i')
// 	iconplus.classList.add('far', 'fa-plus-square')

// 	SkillsArray.forEach((element) => {
// 		const SkillOption = document.createElement('option')
// 		SkillOption.innerHTML = element
// 		selectFirst.appendChild(SkillOption)
// 	})

// 	for (let i = 1; i < 11; i++) {
// 		const scoreOption = document.createElement('option')
// 		scoreOption.innerHTML = i
// 		selectSecondary.appendChild(scoreOption)
// 	}

// 	spanFirst.appendChild(selectFirst)

// 	divScore.appendChild(selectSecondary)

// 	buttonplus.appendChild(iconplus)

// 	divContainer.appendChild(selectFirst)
// 	divContainer.appendChild(selectSecondary)
// 	divContainer.appendChild(buttonplus)

// 	container.appendChild(divContainer)
// }

// eligeSkills(skillSelects, SkillsArray)

// const deleteSkill = (item) => {
// 	const iconDelete = item.getElementsByTagName('i')[0]
// 	console.log(iconDelete)
// 	iconDelete.addEventListener('click', () => {
// 		item.remove()
// 		updateSkills()
// 	})
// }

// const CrearItems = (skill, puntaje) => {
// 	const item = document.createElement('li')
// 	item.setAttribute('data-percent', String(puntaje * 10))
// 	const itemSpan = document.createElement('span')
// 	itemSpan.innerHTML = skill
// 	const itemDiv = document.createElement('div')
// 	itemDiv.classList.add('skills-bar')
// 	const itemInDiv = document.createElement('div')
// 	itemInDiv.classList.add('bar')
// 	const itemSpanPuntaje = document.createElement('span')
// 	itemSpanPuntaje.classList.add('barspan')
// 	itemSpanPuntaje.innerHTML = String(puntaje * 10) + '%'
// 	const iconDelete = document.createElement('i')
// 	iconDelete.classList.add('fas', 'fa-times')

// 	itemDiv.appendChild(itemInDiv)
// 	item.appendChild(itemSpan)
// 	item.appendChild(itemDiv)
// 	item.appendChild(itemSpanPuntaje)
// 	item.appendChild(iconDelete)

// 	deleteSkill(item)
// 	return item
// }

// const updateSkills = async () => {
// 	let skills = []
// 	const $listSkills = document
// 		.getElementById('skill-tag')
// 		.getElementsByTagName('li')
// 	for (let i = 0; i < $listSkills.length; i++) {
// 		let skill = {
// 			skill: $listSkills[i].childNodes[0].innerHTML,
// 			nivel: $listSkills[i].childNodes[2].innerHTML.slice(0, -2),
// 		}
// 		skills.push(skill)
// 	}
// 	console.log(skills)
// 	let myHeaders = new Headers()

// 	myHeaders.append('Content-type', 'application/json')
// 	myHeaders.append('authorization', localStorage.getItem('token'))

// 	let raw = JSON.stringify({ skills: skills })

// 	var requestOptions = {
// 		method: 'PUT',
// 		body: raw,
// 		headers: myHeaders,
// 		redirect: 'follow',
// 	}

// 	const peticion = await fetch(
// 		'https://edu4all-serverless.vercel.app/api/users/skills',
// 		requestOptions
// 	)
// 	const respuesta = await peticion.text()

// 	return console.log(respuesta)
// }



// skilltag.innerHTML = ` <ul>
// <li data-percent="95"><span>HTML5</span>
//     <div class="skills-bar">
//         <div class="bar"></div>
//     </div>
//     <span class="barspan">95%</span>
// </li>
// </ul>`
//     // function agregaSkill(element){

// // }
