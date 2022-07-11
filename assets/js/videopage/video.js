'use strict'
import Valorar from './valorate.js'
import getData from '../modules/getData.js'
import getDataUser from "../userData/userData.js";

// Variables globales
const cursoId = window.location.search.substr(1).split('=')[1].split('&')[0]
const ytEmbed = 'https://www.youtube.com/embed/'
let videoId = window.location.search.substr(1).split('=')[2]

//Crea boton valorar
const createValorar = () => {
	document.querySelector('#valorar').innerHTML = `
                        <div class="mask active" role="dialog"></div>
                        <div class="modal" role="alert">
                          <button class="close" role="button">X</button>
                          <div class='header text-center'>
                            <h2 class="modal-h2">CALIFICAR CURSO</h2>
                          <p class="modal-p">califica tu nivel de <b>satisfacción</b></p>
                        </div>
                        
                        <section class='rating-widget'>
                          
                          <!-- Rating Stars Box -->
                          <div class='rating-stars text-center'>
                            <ul id='stars'>
                              <li class='star' title='Muy malo' data-value='1'>
                                <i class='fa fa-star fa-fw'></i>
                              </li>
                              <li class='star' title='Mmm no me convence' data-value='2'>
                                <i class='fa fa-star fa-fw'></i>
                              </li>
                              <li class='star' title='Bueno' data-value='3'>
                                <i class='fa fa-star fa-fw'></i>
                              </li>
                              <li class='star' title='Excelente' data-value='4'>
                                <i class='fa fa-star fa-fw'></i>
                              </li>
                              <li class='star' title='WOW!!!' data-value='5'>
                                <i class='fa fa-star fa-fw'></i>
                              </li>
                            </ul>
                          </div>
                          
                          <div class='success-box'>
                            <div class='clearfix'></div>
                            <img alt='tick image' width='32' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MjYuNjY3IDQyNi42NjciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQyNi42NjcgNDI2LjY2NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM2QUMyNTk7IiBkPSJNMjEzLjMzMywwQzk1LjUxOCwwLDAsOTUuNTE0LDAsMjEzLjMzM3M5NS41MTgsMjEzLjMzMywyMTMuMzMzLDIxMy4zMzMgIGMxMTcuODI4LDAsMjEzLjMzMy05NS41MTQsMjEzLjMzMy0yMTMuMzMzUzMzMS4xNTcsMCwyMTMuMzMzLDB6IE0xNzQuMTk5LDMyMi45MThsLTkzLjkzNS05My45MzFsMzEuMzA5LTMxLjMwOWw2Mi42MjYsNjIuNjIyICBsMTQwLjg5NC0xNDAuODk4bDMxLjMwOSwzMS4zMDlMMTc0LjE5OSwzMjIuOTE4eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K'/>
                            <div class='text-message'></div>
                            <div class='clearfix'></div>
                          </div>
                          
                        </div>
    `

	Valorar()
}

const videosCurso = async (idCurso, contenedor, videoIdparam, user, CrearlistaReproduccion) => {
	const titleElement = document.getElementById('titleCurso')
	const linkTelegram = document.getElementById('linkTelegram')
	

	const curso = await getData(`https://edu4all-serverless.vercel.app/api/cursos/${idCurso}`)
	localStorage.setItem('curso', JSON.stringify(curso))
	const { videos } = curso
	if (!videoIdparam) {
		videoIdparam = curso.videos[0].videoId
	}
	linkTelegram.href = curso.canalChat
	contenedor.innerHTML = `<iframe width="100%" height="95%" src="${
		ytEmbed + videoIdparam
	}?modestbranding=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 

	<div class="info-youtube-autor">
	<button class="follow-autor"><a href="${curso.canalYoutube}" Target="_blank" >Visitar canal del autor <i class="fab fa-youtube"></i> </a></button>

	</div>`
	titleElement.innerHTML = curso.nombre

	if(window.innerWidth > 700){
		document.querySelector('.follow-autor').addEventListener('mouseover', () => {
			document.querySelector('.alt-autor').style.display = 'block'
		})
		document.querySelector('.follow-autor').addEventListener('mouseout', () => {
			document.querySelector('.alt-autor').style.display = 'none'
		})
	}else{
		document.querySelector('.alt-autor').style.display = 'block'
		setTimeout(() => {
			document.querySelector('.alt-autor').style.display = 'none'
		},3500)
	}
	
	if (
		videos[videos.length - 1].videoId === videoIdparam &&
		!user.cursosTerminados.some((element) => element.idCurso === idCurso)
	) {
		setTimeout(createValorar,1500)
		
	}

	return CrearlistaReproduccion(videos)
}

const mostrarListaReproduccion = (videos) => {
	const containerLista = document.getElementById('listYesNo')
	for (let i = 0; i < videos.length; i++) {
		const itemLista = document.createElement('li')
		const linkLista = document.createElement('a')
		const nombreVideo = document.createElement('h3')
		const img = document.createElement('img')
		const duracion = document.createElement('div')
		linkLista.classList.add('menu-box-tab')
		img.classList.add('imglist')
		img.src = videos[i].imagen
		img.alt = videos[i].nombre
		nombreVideo.classList.add('videoDescription')
		nombreVideo.innerHTML = videos[i].nombre
		duracion.classList.add('menu-box-number')
		duracion.innerHTML = videos[i].duracion
		if (videos[i].videoId === document.querySelector('iframe').src.split('/')[4].split('?')[0]) {
			itemLista.classList.add('actual')
		}
		itemLista.appendChild(linkLista)
		linkLista.appendChild(img)
		linkLista.appendChild(nombreVideo)
		linkLista.appendChild(duracion)
		containerLista.appendChild(itemLista)
	}
	return agregarEventosListaReproduccion(videos)
}

const agregarEventosListaReproduccion = async (videos) => {
	let itemsLista = document.getElementsByClassName('menu-box-tab')
	for (let i = 0; i < itemsLista.length; i++) {
		itemsLista[i].addEventListener('click', () => {
			window.location = `./video.html?curso=${cursoId}&video=${videos[i].videoId}`
		})
	}
}

/*
<li>
    <a class="menu-box-tab" href="#6">
        <img class="imglist" src="./images/curso1.PNG" alt="">
        <h3 class="videoDescription">Curso introduccion a htmlCurso introduccion a htmlCurso introduccion a htmlCurso introduccion a html</h3>
        <div class="menu-box-number">1</div>
    </a>
</li>
*/

const saveCursosEnCurso = async () => {
	var myHeaders = new Headers()
	myHeaders.append('Content-Type', 'application/json')
	myHeaders.append('authorization', localStorage.getItem('token'))

	let video
	let { videos } = await getData(`https://edu4all-serverless.vercel.app/api/cursos/${cursoId}`)
	if (videoId) {
		video = videos.filter((e) => e.videoId === videoId)[0]
	} else {
		video = videos[0]
	}

	var raw = JSON.stringify({ cursoId: cursoId, videoId: video._id })

	var requestOptions = {
		method: 'PUT',
		headers: myHeaders,
		body: raw,
		redirect: 'follow',
	}

	fetch('https://edu4all-serverless.vercel.app/api/users/enCurso', requestOptions)
		.then((response) => response.text())
		.catch((error) => console.log('error', error))
}

window.addEventListener('load', async () => {
	saveCursosEnCurso()
	await getDataUser()
	const contentVideo = document.getElementById('contentVideo')
	const user = JSON.parse(localStorage.getItem('user'))
	await videosCurso(cursoId, contentVideo, videoId, user, mostrarListaReproduccion)
	createNextLast()
})

const createNextLast = () => {
	const actualVideo = document.querySelector('.actual')
	const nextPrevious = document.querySelector('.bnt-next-last')
	if(actualVideo.previousElementSibling){
		const btnPrevious = document.createElement('button')
		const iconPrevius = document.createElement('i')
		iconPrevius.classList.add('fas', 'fa-arrow-left')
		btnPrevious.classList.add('last')
		btnPrevious.appendChild(iconPrevius)
		nextPrevious.appendChild(btnPrevious)
		document.querySelector('.last').addEventListener('click', previousVideo)
	}
	if(actualVideo.nextElementSibling){
		const btnNext = document.createElement('button')
		const iconNext = document.createElement('i')
		iconNext.classList.add('fas', 'fa-arrow-right')
		btnNext.classList.add('next')
		btnNext.appendChild(iconNext)
		nextPrevious.appendChild(btnNext)
		document.querySelector('.next').addEventListener('click', nextVideo)
	}
}

const nextVideo = () => {
	const actualVideo = document.querySelector('.actual')
	actualVideo.nextElementSibling.childNodes[0].click()
}

const previousVideo = () => {
	const actualVideo = document.querySelector('.actual')
	actualVideo.previousElementSibling.childNodes[0].click()
}