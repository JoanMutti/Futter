const token = window.location.search.split('=')[1]

window.addEventListener('load', () => {
    document.querySelector('.btn').addEventListener('click', (e) => {
        e.preventDefault()
        let contrasenia = document.querySelector('#password').value
        let contraseniaRepeat = document.querySelector('#password-repeat').value
        cambiarContrasenia(contrasenia, contraseniaRepeat)
        
    })
})

const cambiarContrasenia = (contrasenia, contraseniaRepeat) => {
    if(contrasenia === contraseniaRepeat && contrasenia){
        let myHeaders = new Headers()
        myHeaders.append('Content-type', 'application/json')
        myHeaders.append('Access-Control-Allow-Origin', '*')

        let raw = JSON.stringify({ resetLink : token, newPassword: contrasenia})

        let requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
        }

        fetch('https://edu4all-serverless.vercel.app/api/auth/reset-password', requestOptions)
        .then(x => x.json())
        .then(data => data.error ? swal({title: data.error, width: 500, padding: 50, background: 'linear-gradient( 325deg, rgba(26, 29, 58, 1) 50%, rgba(33, 39, 82, 1) 50%)'}) : window.location="./login.html" )
    }else{
        swal({
            title: 'Algo falló',
            width: 500,
            padding: 50,
            background: 'linear-gradient( 325deg, rgba(26, 29, 58, 1) 50%, rgba(33, 39, 82, 1) 50%)'
        })
    }
}