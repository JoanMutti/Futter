'use strict'
import getDataUser from '../userData/userData.js'

const getData = async (url) => {
	let dataCursos = []

	const result = await fetch(url)
	const data = await result.json()
	console.log(data)
	for (let i = 0; i < data.length; i++) {
		let resultVideo = await fetch(`https://edu4all-serverless.vercel.app/api/videos/video/${data[i].videos[0]}`)
		let primerVideo = await resultVideo.json()
		let newCurso = {
			id: data[i]._id,
			nombre: data[i].nombre,
			autor: data[i].autor,
			imagen: primerVideo.imagen,
		}
		dataCursos.push(newCurso)
	}

	return dataCursos
}

const crearElementos = (curso) => {
	const item = document.createElement('div')
	item.classList.add('item', 'video-box-wrapper')
	const divImg = document.createElement('div')
	divImg.classList.add('img-preview')
	divImg.style.height = '130px'
	const img = document.createElement('img')
	img.src = curso.imagen
	const divDescription = document.createElement('div')
	divDescription.classList.add('video-description-wrapper')
	const header = document.createElement('p')
	header.classList.add('video-description-header')
	header.innerHTML = curso.nombre
	const subHeader = document.createElement('p')
	subHeader.innerHTML = curso.autor
	subHeader.classList.add('video-description-subheader')
	const info = document.createElement('p')
	info.classList.add('video-description-info')
	info.innerHTML = '116K views '
	const span = document.createElement('span')
	span.innerHTML = '1 hour ago'
	const button = document.createElement('button')
	button.classList.add('btn-play')
	const buttonFavOff = document.createElement('a')
	buttonFavOff.classList.add('favOff')
	buttonFavOff.style.display = 'none'
	const iconFavOff = document.createElement('i')
	iconFavOff.classList.add('fas', 'fa-heart')
	buttonFavOff.appendChild(iconFavOff)

	const buttonFavOn = document.createElement('a')
	buttonFavOn.classList.add('favOn')
	const iconFavOn = document.createElement('i')
	iconFavOn.classList.add('far', 'fa-heart')
	buttonFavOn.appendChild(iconFavOn)

	divImg.appendChild(img)
	divDescription.appendChild(header)
	divDescription.appendChild(subHeader)
	divDescription.appendChild(info)
	divDescription.appendChild(button)
	divDescription.appendChild(buttonFavOff)
	divDescription.appendChild(buttonFavOn)

	info.appendChild(span)
	item.appendChild(divImg)
	item.appendChild(divDescription)

	return item
}

const activarCarrusel = (elementoHTML) => {
	var owl = $(elementoHTML)
	owl.owlCarousel({
		navigation: true,
		slideSpeed: 400,
		paginationSpeed: 400,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 3,
			},
			1250: {
				items: 4,
			},
			1600: {
				items: 5,
			},
		},
	})
}

const renderizarCarrousel = (dataCursos, carrousel, contenedor, cb) => {
	dataCursos.forEach((element, index) => {
		const elemento = crearElementos(element)
		contenedor.appendChild(elemento)
		if (index === dataCursos.length - 1) {
			return cb(carrousel)
		}
	})
}

const agregarEventoBotonesCurso = (carrousel, dataCursos) => {
	const botones = carrousel.getElementsByClassName('btn-play')
	for (let i = 0; i < botones.length; i++) {
		botones[i].addEventListener('click', () => {
			window.location = `./video.html?curso=${dataCursos[i].id}`
		})
	}
	const botonesFavOff = carrousel.getElementsByClassName('favOff')
	const botonesFavOn = carrousel.getElementsByClassName('favOn')
	return agregarFavorito(botonesFavOff, botonesFavOn, dataCursos)
}

const agregarFavorito = (botonesFavOff, botonesFavOn, dataCursos) => {
	for (let i = 0; i < botonesFavOn.length; i++) {
		botonesFavOn[i].addEventListener('click', () => {
			let myHeaders = new Headers()

			myHeaders.append('Content-type', 'application/json')
			myHeaders.append('authorization', localStorage.getItem('token'))

			var requestOptions = {
				method: 'PUT',
				headers: myHeaders,
			}

			fetch(`https://edu4all-serverless.vercel.app/api/users/favoritos/${dataCursos[i].id}`, requestOptions)
				.then((response) => response.text())
				.then((result) => {
					console.log(result)
					botonesFavOn[i].style.display = 'none'
					botonesFavOff[i].style.display = 'block'
				})
				.catch((error) => console.log('error', error))
		})
	}
	for (let x = 0; x < botonesFavOff.length; x++) {
		botonesFavOff[x].addEventListener('click', () => {
			let myHeaders = new Headers()
			myHeaders.append('Content-type', 'application/json')
			myHeaders.append('authorization', localStorage.getItem('token'))
			var requestOptions = {
				method: 'DELETE',
				headers: myHeaders,
			}
			fetch(`https://edu4all-serverless.vercel.app/api/users/deleteFavourite/${dataCursos[x].id}`, requestOptions)
				.then((response) => response.text())
				.then((result) => {
					console.log(result)
					botonesFavOn[x].style.display = 'block'
					botonesFavOff[x].style.display = 'none'
				})
				.catch((error) => console.log('error', error))
		})
	}
	// for (let i = 0; i < botonesFav.length; i++) {
	//     botonesFav[i].addEventListener('click', () => {
	//         if (!botonesFav[i].classList.contains('activeFav')) {
	//             botonesFav[i].classList.add('activeFav')
	//             let myHeaders = new Headers()

	//             myHeaders.append("Content-type", "application/json")
	//             myHeaders.append('authorization', localStorage.getItem('token'))

	//             var requestOptions = {
	//                 method: 'PUT',
	//                 headers: myHeaders,
	//                 redirect: 'follow'
	//             }

	//             fetch(`https://edu4all-serverless.joanmutti.vercel.app/api/users/favoritos/${dataCursos[i].id}`, requestOptions)
	//                 .then(response => response.text())
	//                 .then(result => {
	//                     console.log(result)
	//                 })
	//                 .catch(error => console.log('error', error))

	//         } else {
	//             botonesFav[i].classList.remove('activeFav')
	//             let myHeaders = new Headers()
	//             myHeaders.append("Content-type", "application/json")
	//             myHeaders.append('authorization', localStorage.getItem('token'))
	//             var requestOptions = {
	//                 method: 'DELETE',
	//                 headers: myHeaders,
	//                 redirect: 'follow'
	//             }
	//             fetch(`https://edu4all-serverless.joanmutti.vercel.app/api/users/deleteFavourite/${dataCursos[i].id}`, requestOptions)
	//                 .then(response => response.text())
	//                 .then(result => {
	//                     console.log(result)
	//                 })
	//                 .catch(error => console.log('error', error))
	//         }

	//     })
	// }
}

window.addEventListener('load', () => {
	//Carga slider 1 y configura botones avanzar y regresar > <

	var owl = $('#owl-slider-1')
	$('#owl-slider-1').owlCarousel({
		navigation: true,
		slideSpeed: 400,
		paginationSpeed: 400,
		items: 1,
		itemsDesktop: false,
		itemsDesktopSmall: false,
		itemsTablet: false,
		itemsMobile: false,
		autoplay: true,
		autoPlaySpeed: 200,
		autoPlayTimeout: 100,
		autoplayHoverPause: true,
	})
	// Custom Navigation Events
	$('.owl-next').click(function () {
		owl.trigger('owl.next')
	})
	$('.owl-prev').click(function () {})

	$('.play').click(function () {
		owl.trigger('owl.play', 100)
	})
	$('.stop').click(function () {
		owl.trigger('owl.stop')
	})

	//Ejecucion para crear slider 2

	// const contenedor = document.getElementById('owl-slider-2')
	// getData('https://edu4all-serverless.vercel.app/api/cursos').then((dataCursos) => {
	// 	renderizarCarrousel(dataCursos, '#owl-slider-2', contenedor, activarCarrusel)
	// 	agregarEventoBotonesCurso(contenedor, dataCursos)
	// })
	// const contenedor2 = document.getElementById('owl-slider-3')
	// getData('https://edu4all-serverless.vercel.app/api/cursos').then((dataCursos) => {
	// 	renderizarCarrousel(dataCursos, '#owl-slider-3', contenedor2, activarCarrusel)
	// 	agregarEventoBotonesCurso(contenedor2, dataCursos)
	// })

	// const user = getDataUser().then((dataUser) => {
	// 	console.log(dataUser)
	// })

	/*
    let contenido=""

    cursos.forEach( async (element) => {
      
      
      console.log(data)
      if (dataCursos.length === cursos.length) {
        dataCursos.forEach((element) => {
          contenido +=  ` 
          
            <div class="item video-box-wrapper">-
                <div style="height: 130px;" class="img-preview">-
                    <img  src="${element.image}" alt="video"> -
                </div>-
                <div class="video-description-wrapper">-
                    <p class="video-description-header">${element.title}</p>-
                    <p class="video-description-subheader">el mejor curso de todos los cosos que miras viste que si no se que poander</p>-
                    <p class="video-description-info">116K views <span>1 hour ago</span></p>
                    <button class="btn-play"></button>
                </div>
            </div>
              `;  
        })
        contenedor.innerHTML=contenido
        contenedor2.innerHTML=contenido
        var owl = $("#owl-slider-2");
        owl.owlCarousel({
        navigation: true,
        slideSpeed: 400,
        paginationSpeed: 400,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 4
          }
        }
      });
      var owl = $("#owl-slider-3");
      owl.owlCarousel({
        navigation: true,
        slideSpeed: 400,
        paginationSpeed: 400,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 4
          }
        }
      });
      }
    }) */
})
