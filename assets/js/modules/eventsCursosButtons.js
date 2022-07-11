'use strict'

import { putFavorito, deleteFavorito } from '../modules/favoritos.js'

export default function agregarEventoBotonesCurso(carrousel, dataCursos) {
    const botones = carrousel.getElementsByClassName('btn-play')
    
    for (let i = 0; i < botones.length; i++) {
        let cursoId
        if(carrousel.id != 'terminados'){
            if (dataCursos[i].hasOwnProperty('idCurso')) {
                cursoId = dataCursos[i].idCurso._id
                botones[i].addEventListener('click', () => {
                    window.location = `./video.html?curso=${cursoId}&video=${dataCursos[i].idVideo.videoId}`
                })
            } else {
                cursoId = dataCursos[i]._id
                botones[i].addEventListener('click', () => {
                    window.location = `./video.html?curso=${cursoId}&video=${dataCursos[i].videos[0].videoId}`
                })
            }
        }else{
            cursoId = dataCursos[i].idCurso._id
                botones[i].addEventListener('click', () => {
                    window.location = `./video.html?curso=${cursoId}&video=${dataCursos[i].idCurso.videos[0].videoId}`
                })
        }
        
    }
    const botonesFavOff = carrousel.getElementsByClassName('favOff')
    const botonesFavOn = carrousel.getElementsByClassName('favOn')
    return agregarFavorito(botonesFavOff, botonesFavOn, dataCursos)
}

function agregarFavorito(botonesFavOff, botonesFavOn) {
    for (let i = 0; i < botonesFavOn.length; i++) {
        //Agregar favorito
        botonesFavOn[i].addEventListener('click', async(e) => {
            const idCursoFavorito = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].innerHTML
            putFavorito(idCursoFavorito)
        })
    }
    for (let x = 0; x < botonesFavOff.length; x++) {
        //Eliminar favorito
        botonesFavOff[x].addEventListener('click', (e) => {
            const idCursoFavorito = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[0].innerHTML
            deleteFavorito(idCursoFavorito)
        })
    }
}