import getDataUser from '../userData/userData.js'
import getData from '../modules/getData.js'
import crearElementos from '../modules/createElementCurso.js'
import agregarEventos from '../modules/eventsCursosButtons.js'

window.addEventListener('load', async() => {
    getDataUser()
    const user = JSON.parse(localStorage.getItem('user'))
    const cursos = await getData('https://edu4all-serverless.vercel.app/api/cursos')
    const container = document.querySelector('.rigth-container-courses')
    container.innerHTML = ''
    cursos.forEach(curso => {
        try {
            container.appendChild(crearElementos(curso, user))
        } catch (error) {
            console.log(error)
        }
    });
    agregarEventos(container, cursos)

    const $tags = document.querySelectorAll('.field-wrap')
    $tags.forEach(tag => {
        tag.addEventListener('click', (e) => ordenarBusqueda(e, cursos, container, user))
    })






})

function ordenarBusqueda(e, cursos, container, user) {
    e.preventDefault()
    const $tagsChecked = document.querySelectorAll('.field-wrap.checked p')
    $tagsChecked.forEach(tag => {
        cursos = cursos.filter(curso => {
            return curso.tags.includes(tag.innerHTML)
        })
    })

    if (cursos.length > 0) {
        container.innerHTML = ''
        cursos.forEach(curso => {
            try {
                container.appendChild(crearElementos(curso, user))
            } catch (error) {
                console.log(error)
            }
        });
        agregarEventos(container, cursos)
    } else {
        container.innerHTML = '<div class="no-combinacion"><h3>No existe cursos con esa combinacion</h3></div>'
    }
}