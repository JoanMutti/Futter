'use strict'
import getDataUser from '../userData/userData.js'

export function putFavorito(idCurso) {
    let myHeaders = new Headers()

    myHeaders.append('Content-type', 'application/json')
    myHeaders.append('authorization', localStorage.getItem('token'))

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
    }
    fetch(`https://edu4all-serverless.vercel.app/api/users/favoritos/${idCurso}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            checkFavoritos(idCurso)
        })
        .catch((error) => console.log('error', error))
}

export function deleteFavorito(idCurso) {
    let myHeaders = new Headers()
    myHeaders.append('Content-type', 'application/json')
    myHeaders.append('authorization', localStorage.getItem('token'))
    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
    }
    fetch(`https://edu4all-serverless.vercel.app/api/users/deleteFavourite/${idCurso}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
            checkFavoritos(idCurso)
        })
        .catch((error) => console.log('error', error))
}

export async function checkFavoritos(e) {
    const $cursos = document.querySelectorAll('.video-description-wrapper')
    for (let i = 0; i < $cursos.length; i++) {
        if ($cursos[i].querySelector('.idCurso').innerHTML === e) {
            $cursos[i].querySelector('.favOn').style.display === 'none' ?
                ($cursos[i].querySelector('.favOn').style.display = 'block') :
                ($cursos[i].querySelector('.favOn').style.display = 'none')
            $cursos[i].querySelector('.favOff').style.display === 'block' ?
                ($cursos[i].querySelector('.favOff').style.display = 'none') :
                ($cursos[i].querySelector('.favOff').style.display = 'block')
        }
    }
    // await getDataUser()
}