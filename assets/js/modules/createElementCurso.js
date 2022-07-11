'use strict'

export default function crearElementos(curso, user){
	const item = document.createElement('div')
	item.classList.add('item', 'video-box-wrapper')
	const divImg = document.createElement('div')
	divImg.classList.add('img-preview')
	divImg.style.height = '130px'
	const img = document.createElement('img')
	try {
		if(curso.hasOwnProperty('videos')) {
			img.src = curso.videos[0].imagen
			img.alt = curso.nombre
		}else{
			img.src = curso.idVideo.imagen
			img.alt = curso.idCurso.nombre
		}
	} catch (err) {
		img.src = curso.idCurso.videos[0].imagen
		img.alt = curso.idCurso.nombre
	}
	const divDescription = document.createElement('div')
	divDescription.classList.add('video-description-wrapper')
	const header = document.createElement('p')
	header.classList.add('video-description-header')
	curso.hasOwnProperty('nombre') ? (header.innerHTML = curso.nombre) : (header.innerHTML = curso.idCurso.nombre)
	const subHeader = document.createElement('p')
	curso.hasOwnProperty('autor') ? (subHeader.innerHTML = curso.autor) : (subHeader.innerHTML = curso.idCurso.autor)
	subHeader.classList.add('video-description-subheader')

	//desde aca
	const divFavStar = document.createElement('div')
	divFavStar.classList.add('cont-fav-star')
	const info = document.createElement('div')
	info.classList.add('rating-stars')
	const valorateUl = document.createElement('ul')
	valorateUl.classList.add('stars')
	let valoracion
	curso.hasOwnProperty('valoracion') ? (valoracion = curso.valoracion.valor) : (valoracion = curso.idCurso.valoracion.valor)
	for (let i = 0; i < 5; i++) {
		const valorateLi = document.createElement('li')
		valorateLi.classList.add('star')

		const stars = document.createElement('i')
		stars.classList.add('fa', 'fa-star', 'fa-fw')
		valorateUl.appendChild(valorateLi)
		valorateLi.appendChild(stars)
		if (i < valoracion) stars.style.color = '#FFB213'	
	}


	// stars.setAttribute("aria-hidden","true")
	// info.innerHTML = '116K views '
	// const span = document.createElement('span')
	// span.innerHTML = '1 hour ago'
	//hasta aca 

	const button = document.createElement('button')
	button.classList.add('btn-play')
	const buttonFavOff = document.createElement('a')
	buttonFavOff.classList.add('favOff')
	const iconFavOff = document.createElement('i')
	iconFavOff.classList.add('fas', 'fa-heart')
	buttonFavOff.appendChild(iconFavOff)
	const idCurso = document.createElement('p')

	const buttonFavOn = document.createElement('a')
	buttonFavOn.classList.add('favOn')
	const iconFavOn = document.createElement('i')
	iconFavOn.classList.add('far', 'fa-heart')
	idCurso.style.display = 'none'
	idCurso.classList.add('idCurso')
	buttonFavOn.appendChild(iconFavOn)
	if (curso.hasOwnProperty('idCurso')) {
		idCurso.innerHTML = curso.idCurso._id
		if (user.favoritos.some((element) => curso.idCurso._id === element)) {
			buttonFavOn.style.display = 'none'
			buttonFavOff.style.display = 'block'
		} else {
			buttonFavOff.style.display = 'none'
		}
	} else {
		idCurso.innerHTML = curso._id
		if (user.favoritos.some((element) => curso._id === element)) {
			buttonFavOn.style.display = 'none'
			buttonFavOff.style.display = 'block'
		} else {
			buttonFavOff.style.display = 'none'
		}
	}

	divImg.appendChild(img)
	divDescription.appendChild(idCurso)
	divDescription.appendChild(header)
	divDescription.appendChild(subHeader)
	// divDescription.appendChild(info)
	divDescription.appendChild(button)
	divDescription.appendChild(divFavStar)
	// divDescription.appendChild(buttonFavOff)
	// divDescription.appendChild(buttonFavOn)

	//arranca	
	divFavStar.appendChild(info)
	info.appendChild(valorateUl)
	info.appendChild(buttonFavOff)
	info.appendChild(buttonFavOn)



	//hasta aca 

	// info.appendChild(span)
	item.appendChild(divImg)
	item.appendChild(divDescription)

	return item
}