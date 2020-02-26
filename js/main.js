window.addEventListener('DOMContentLoaded', function () {
    'use strict';


    var mySwiper = new Swiper('.swiper-container', {
        speed: 400,
        spaceBetween: 100,
        slidesPerView: 1, 
    });

//    навигация
// ######################################################################

$('.menu-link').click(function(event) {
    event.preventDefault();
    let target = $(this).attr('href');
    let top = $(target).offset().top;
$('html, body').animate({scrollTop: top}, 500);
});
    

});