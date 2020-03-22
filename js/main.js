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

    menuLink.click(function () {
        menu.toggleClass('active-menu');
    });
    close.click(function () {
        menu.toggleClass('active-menu');
    });



    $('.menu-mobile-link').click(function (event) {
        event.preventDefault();
        let target = $(this).attr('href');
        let top = $(target).offset().top;
        $('html, body').animate({
            scrollTop: top
        }, 500);
    });

    //    навигация
    // ######################################################################

    $('.menu-link').click(function (event) {
        event.preventDefault();
        let target = $(this).attr('href');
        let top = $(target).offset().top;
        $('html, body').animate({
            scrollTop: top
        }, 500);
    });

    //    карта
    // ######################################################################

    //    service-block
    // ######################################################################

    let serviceBlock = document.querySelectorAll('.service-block'),
        svgWrapper = document.querySelectorAll('.svg-wrapper'),
        svgIconActive = document.querySelectorAll('.service-icon-active'),
        serviceNameActive = document.querySelectorAll('.service-name'),
        svgWrapperActive = document.querySelectorAll('.svg-wrapper-active');

    function activeBlockService(a) {
        svgWrapper[a].classList.add('hide');
        svgWrapper[a].classList.remove('show');
        svgWrapperActive[a].classList.add('show');
        svgWrapperActive[a].classList.remove('hide');
        serviceBlock[a].style.cssText = 'background-color: #C8A35F';
    }

    function noActiveBlockService(b) {
        svgWrapper[b].classList.remove('hide');
        svgWrapper[b].classList.add('show');
        svgWrapperActive[b].classList.remove('show');
        svgWrapperActive[b].classList.add('hide');
        serviceBlock[b].style.cssText = 'background-color: #393F47';
    }
    document.addEventListener('mouseover', (event) => {
        let target = event.target;
        if (target && target.classList.contains('service-block') || target && target.classList.contains('svg-wrapper-active') ||
        target && target.classList.contains('service-icon-active') || target && target.classList.contains('service-name')) {
            for (let i = 0; i < serviceBlock.length; i++) {
                if (target == serviceBlock[i] || target == svgWrapperActive[i] || target == svgIconActive[i] ||
                    target == serviceNameActive[i]) {
                    activeBlockService(i)
                };
            };
        };
    });
    
    document.addEventListener('mouseout', (event) => {
        let target = event.target;
        if (target && target.classList.contains('service-block')) {
            for (let i = 0; i < serviceBlock.length; i++) {
                if (target == serviceBlock[i]) {
                    noActiveBlockService(i)
                };
            };
        };
    });



});