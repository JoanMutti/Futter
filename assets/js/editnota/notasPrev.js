'use strict'

import getData from '../modules/getData.js'

var contentLineDiv = document.getElementById('containerPrincipal')

const creaNotaitem = (cursos) => {
	const blockDiv = document.createElement('div')
	blockDiv.classList.add('blocks')
	blockDiv.setAttribute('id', 'block1')

	const tituloDiv = document.createElement('p')
	tituloDiv.setAttribute('id', 'list')
	tituloDiv.classList.add('list')

	const noteList = document.createElement('ul')
	noteList.setAttribute('id', 'note-list')
	tituloDiv.addEventListener('click', () => {
		if (noteList.style.display == 'none') {
			noteList.style.display = 'block'
		} else {
			noteList.style.display = 'none'
		}

		noteList.style.transition = 'all 0.5s'
	})
	noteList.style.display = 'none'
	blockDiv.appendChild(tituloDiv)
	blockDiv.appendChild(noteList)

	tituloDiv.innerHTML = cursos.curso

	cursos.notas.forEach((element) => {
		console.log(element)
		const itemListNote = document.createElement('li')
		itemListNote.classList.add('note-list-li')
		const noteLink = document.createElement('a')
		noteLink.href = `./editNota.html?${element.idNota}`
		noteList.appendChild(itemListNote)
		itemListNote.appendChild(noteLink)
		noteLink.innerHTML = element.video
	})

	console.log(blockDiv)
	return blockDiv
}

function openList1() {
	var list = document.getElementById('note-list')

	if (list.style.display == 'none') {
		list.style.display = 'block'
	} else {
		list.style.display = 'none'
	}

	document.getElementById('note-list')
	list.style.transition = 'all 0.5s'
}

const getInfoNotas = async () => {
	let infoNotas = await getData(
		'https://edu4all-serverless.vercel.app/api/users/Notas/all'
	)
	if(infoNotas.length > 0){
		
		let cursos = []
		for (let i = 0; i < infoNotas.length; i++) {
			if (
				cursos.findIndex((element) => element.curso === infoNotas[i].curso) === -1
			) {
				let infoPorCurso = {
					curso: infoNotas[i].curso,
					notas: [infoNotas[i]],
				}
				cursos.push(infoPorCurso)
			} else {
				let index = cursos.findIndex(
					(element) => element.curso === infoNotas[i].curso
				)
				cursos[index].notas.push(infoNotas[i])
			}
		}
		cursos.forEach((curso) => {
			contentLineDiv.appendChild(creaNotaitem(curso))
		})
	}else{
		document.querySelector('.dinamic-no-notes').style.display = 'block'
		document.querySelector('.go-to-courses').addEventListener('click', () => window.location = '/exploreCursos.html')
	}
	
}

getInfoNotas()


// // // function for accordion 2
// // function openList2() {
// var list = document.getElementById("ollist_2");
// var pos = 0;
// if (list.style.display == "none") {
//     list.style.display = "block";
// } else {
//     list.style.display = "none";

// }

// document.getElementById("ollist_2")
// list2.style.transition = "all 0.5s";

// }

// // function for accordion 3
// function openList3() {
//     var list = document.getElementById("ollist_3");

//     if (list.style.display == "block") {
//         list.style.display = "none";
//     } else {
//         list.style.display = "block";
//     }

//     document.getElementById("ollist_3")
//     list3.style.transition = "all 0.5s";
// }
