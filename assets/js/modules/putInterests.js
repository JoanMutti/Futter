'use strict'

export default async function putInterests(interesesCheckedElements) {
    if (interesesCheckedElements.length < 1) {
        swal({
            title: 'Selecciona algún interes',
            width: 500,
            padding: 50,
            background: 'linear-gradient( 325deg, rgba(26, 29, 58, 1) 50%, rgba(33, 39, 82, 1) 50%)'
        })
    } else {
        let interesesChecked = []
        for (let i = 0; i < interesesCheckedElements.length; i++) {
            let interes = interesesCheckedElements[i].childNodes[1].innerHTML
            interesesChecked.push(interes)
        }
    
        console.log(interesesChecked)
    
        //Fetch to save interests
        let myHeaders = new Headers()
    
        myHeaders.append('Content-type', 'application/json')
        myHeaders.append('authorization', localStorage.getItem('token'))
    
        var raw = JSON.stringify({ intereses: interesesChecked })
    
        var requestOptions = {
            method: 'PUT',
            body: raw,
            headers: myHeaders,
            redirect: 'follow',
        }
    
        await fetch('https://edu4all-serverless.vercel.app/api/users/intereses', requestOptions)    
        .catch((error) => console.log('error', error))

        if(window.location.pathname === '/selection.html'){
            window.location.replace('/cursos.html')
        }
        
    }
}


