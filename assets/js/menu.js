$('a#pageLink').click(function () {
	$('a#pageLink').removeClass('active')
	$(this).addClass('active')
})

$('.menu-button').click(function () {
	$('.left-area').removeClass('hide-on-mobile')
})

$('.close-menu').click(function () {
	$('.left-area').addClass('hide-on-mobile')
})

$('.more-button').click(function () {
	$('.more-menu-list').toggle('hide')
})

window.addEventListener('load', () => {
	document.querySelector('.btn-log-out').addEventListener('click', () => {
		localStorage.removeItem('user')
		localStorage.removeItem('token')
		window.location = '/login.html'
	})
})
