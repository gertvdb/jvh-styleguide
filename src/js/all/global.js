(function ($) {
    'use strict';

    $(document).ready(function() {

        $('.js--navigation-toggle').on('click', function (){
            const root = $('#l-page');
            if (root.hasClass('is--open--nav')) {
                root.removeClass('is--open--nav');
            } else {
                root.addClass('is--open--nav');
            }
        });

        AOS.init();

        $('.js--slider').slick({
            dots: true,
            adaptiveHeight: true,
            prevArrow: "<span class=\"m-slider__nav m-slider__prev\"><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fal\" data-icon=\"angle-double-left\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" class=\"svg-inline--fa fa-angle-double-left fa-w-10 fa-2x\"><path fill=\"currentColor\" d=\"M153.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L192.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 7.1c-4.7 4.7-12.3 4.7-17 0L153 264.5c-4.6-4.7-4.6-12.3.1-17zm-128 17l117.8 116c4.7 4.7 12.3 4.7 17 0l7.1-7.1c4.7-4.7 4.7-12.3 0-17L64.7 256l102.2-100.4c4.7-4.7 4.7-12.3 0-17l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L25 247.5c-4.6 4.7-4.6 12.3.1 17z\"></path></svg></span>",
            nextArrow: "<span class=\"m-slider__nav m-slider__next\"><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fal\" data-icon=\"angle-double-right\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" class=\"svg-inline--fa fa-angle-double-right fa-w-10 fa-2x\"><path fill=\"currentColor\" d=\"M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17zm128-17l-117.8-116c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17L255.3 256 153.1 356.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l117.8-116c4.6-4.7 4.6-12.3-.1-17z\"></path></svg></span>",
        });

        $('.js--carousel').slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
            prevArrow : "",
            nextArrow: "<span class=\"m-carousel__nav m-carousel__next\"><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fal\" data-icon=\"angle-double-right\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" class=\"svg-inline--fa fa-angle-double-right fa-w-10 fa-2x\"><path fill=\"currentColor\" d=\"M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17zm128-17l-117.8-116c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17L255.3 256 153.1 356.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l117.8-116c4.6-4.7 4.6-12.3-.1-17z\"></path></svg></span>",

        });


        window.addEventListener('resize', addScrollClass, false);
        window.addEventListener("scroll", addScrollClass);

        function addScrollClass() {
            let offsetTop = window.scrollY;
            let root = $('.l-page');
            if (root.hasClass('without--hero')) {
                if (offsetTop > 5) {
                    root.addClass('is--scrolled');
                } else {
                    root.removeClass('is--scrolled');
                }
            }
        }

    });

})(jQuery);

