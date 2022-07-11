$("a#pageLink").click(function() {
    $("a#pageLink").removeClass("active");
    $(this).addClass("active");
});

$(".menu-button").click(function() {
    $(".left-area").removeClass("hide-on-mobile");
});

$(".close-menu").click(function() {
    $(".left-area").addClass("hide-on-mobile");
});

$(".more-button").click(function() {
    $(".more-menu-list").toggle("hide");
});





var messageBox = document.querySelector('.js-message');
var btn = document.querySelector('.js-message-btn');
var card = document.querySelector('.js-profile-card');
var closeBtn = document.querySelectorAll('.js-message-close');

btn.addEventListener('click', function(e) {
    e.preventDefault();
    card.classList.add('active');
});

closeBtn.forEach(function(element, index) {
    console.log(element);
    element.addEventListener('click', function(e) {
        e.preventDefault();
        card.classList.remove('active');
    });
});

$('#imagenPerfil').hover(() => {
    console.log('hover funcionando')
    $('#imagenPerfil').attr("src", "./gif.webp")
}, () => {
    $('#imagenPerfil').attr("src", "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80")
})