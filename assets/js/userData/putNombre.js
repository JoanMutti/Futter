'use strict'

import getDataUser from './userData.js'

window.addEventListener('load' , async () => {
    const userName = document.getElementById('userName')
    let user
    if (localStorage.getItem('user')){
        user = JSON.parse(localStorage.getItem('user'))
    }else{
        user = await getDataUser()
    }
    try {
        userName.innerHTML = user.nombre + ' ' + user.apellido
        const $img = document.querySelector('.userletter span')
        $img.innerHTML = `${user.nombre[0]}${user.apellido[0]}`
    } catch (error) {
        console.log(error)
    }
})