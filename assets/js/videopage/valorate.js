export default function Valorar() {
	// Click function for show the Modal

	$('.show').on('click', function () {
		$('.mask').addClass('active')
	})

	// Function for close the Modal

	function closeModal() {
		$('.mask').removeClass('active')
	}

	// Call the closeModal function on the clicks/keyboard

	$('.close, .mask').on('click', function () {
		closeModal()
	})

	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			closeModal()
		}
	})

	$(document).ready(function () {
		/* 1. Visualizing things on Hover - See next part for action on click */
		$('#stars li')
			.on('mouseover', function () {
				var onStar = parseInt($(this).data('value'), 10) // The star currently mouse on

				// Now highlight all the stars that's not after the current hovered star
				$(this)
					.parent()
					.children('li.star')
					.each(function (e) {
						if (e < onStar) {
							$(this).addClass('hover')
						} else {
							$(this).removeClass('hover')
						}
					})
			})
			.on('mouseout', function () {
				$(this)
					.parent()
					.children('li.star')
					.each(function (e) {
						$(this).removeClass('hover')
					})
			})

		/* 2. Action to perform on click */
		$('#stars li').on('click', function () {
			var onStar = parseInt($(this).data('value'), 10) // The star currently selected
			var stars = $(this).parent().children('li.star')

			for (let i = 0; i < stars.length; i++) {
				$(stars[i]).removeClass('selected')
			}

			for (let i = 0; i < onStar; i++) {
				$(stars[i]).addClass('selected')
			}

			// JUST RESPONSE (Not needed)
			var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10)
			var msg = ''
			if (ratingValue > 1) {
				msg =
					'Tu opinión nos ayuda a mejorar. Gracias! Calificación ' +
					ratingValue +
					' estrellas.'
			} else {
				msg =
					'Trabajar juntos como equipo eso es lo que nos hace diferentes. Vamos a revisar este curso, calificación ' +
					ratingValue +
					' estrella.'
			}
			saveRate(ratingValue)
			responseMessage(msg)
			setTimeout(() => {
				closeModal()
			}, 1000)
		})
	})

	function responseMessage(msg) {
		$('.success-box').fadeIn(200)
		$('.success-box div.text-message').html('<span>' + msg + '</span>')
	}

	const saveRate = (rate) => {
		const cursoId = window.location.search.substr(1).split('=')[1].split('&')[0]

		const myHeaders = new Headers()
		myHeaders.append('Content-type', 'application/json')
		myHeaders.append('authorization', localStorage.getItem('token'))

		let raw = JSON.stringify({ valoracion: rate })

		let requestOptions = {
			method: 'PUT',
			body: raw,
			headers: myHeaders,
		}

		fetch(
			`https://edu4all-serverless.vercel.app/api/cursos/rate/${cursoId}`,
			requestOptions
		)
			.then((response) => response.text())
			.then((result) => console.log(result))
	}
}
