'use strict'

import crearElementos from './createElementCurso.js'

function activarCarrusel(elementoHTML) {
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

export function renderizarCarrousel(dataCursos, carrousel, contenedor) {
    const user = JSON.parse(localStorage.getItem('user'))
    dataCursos.forEach((element, index) => {
        try{
            const elemento = crearElementos(element, user)
            contenedor.appendChild(elemento)
        }catch(err){
            console.log(err)
        }        
        if (index === dataCursos.length - 1) {
            return activarCarrusel(carrousel)
        }
    })
}