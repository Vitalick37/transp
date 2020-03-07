window.addEventListener('DOMContentLoaded', function () {
    'use strict';

//    слайдер
// ######################################################################
    let mySwiper = new Swiper('.swiper-container', {
        // speed: 400,
        // spaceBetween: 100,
        slidesPerView: 1, 
        navigation: {
            nextEl: '.btn-forward',
            prevEl: '.btn-back',
        },
        loop: true,
    });

    //    мобильное меню
// ######################################################################

    let menuLink = $('.menu-mobile-btn');
	let menu = $('.menu-mobile');
	let close = $('.menu-mobile-close');
	let navLink = $('.menu-mobile-link');

	menuLink.click(function() {
		menu.toggleClass('active-menu');
	});
	close.click(function() {
		menu.toggleClass('active-menu');
	});

//    навигация
// ######################################################################

$('.menu-link').click(function(event) {
    event.preventDefault();
    let target = $(this).attr('href');
    let top = $(target).offset().top;
$('html, body').animate({scrollTop: top}, 500);
});

//    карта
// ######################################################################

//    service-block
// ######################################################################
    
let serviceBlock = document.querySelectorAll('service-block');


});