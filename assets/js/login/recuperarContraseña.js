
window.addEventListener('load',()=>{

    const formularioRecuperacion = document.querySelector('#login')
    formularioRecuperacion.addEventListener('submit', (e)=>{
        e.preventDefault()
        const mailDeRecuperacion = document.querySelector('#email').value.toLowerCase()
        sendMail(mailDeRecuperacion)
    })
}
)

const sendMail = (mail)=>{
    let myHeaders = new Headers()
	myHeaders.append('Content-type', 'application/json')
	myHeaders.append('Access-Control-Allow-Origin', '*')

	let raw = JSON.stringify({ email : mail })

	let requestOptions = {
		method: 'PUT',
		headers: myHeaders,
		body: raw,
	}

    fetch('https://edu4all-serverless.vercel.app/api/auth/forgot-password', requestOptions)
    .then((response) => response.json())
    .then((result) => {
        try {
            swal({
                title: result.message,
                width: 500,
                padding: 50,
                background: 'linear-gradient( 325deg, rgba(26, 29, 58, 1) 50%, rgba(33, 39, 82, 1) 50%)'
            })
        } catch (error) {
            swal({
                title: result.error,
                width: 500,
                padding: 50,
                background: 'linear-gradient( 325deg, rgba(26, 29, 58, 1) 50%, rgba(33, 39, 82, 1) 50%)'
            })
        }
    })
    .catch((error) => console.log(error))
}

   
    

