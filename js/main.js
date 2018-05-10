$(document).ready(function () {
    setTimeout(function () {
        $('.formstyler').styler();
    }, 100)
});


$(document).ready(function () {
    $(".nav").navgoco({
        accordion: true
    });
});


$(document).ready(function () {


    var swiper = new Swiper('.swiper-container1', {
        direction: 'vertical',
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination1',
            clickable: true,
        },

    });

    var swiper = new Swiper('.swiper-container2', {

        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
        slidesPerView: 6,
        breakpoints: {
            1080: {
                slidesPerView: 5
            },
            980: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
            667: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 1
            }


        }
    });

    var swiper = new Swiper('.swiper-container3', {
        navigation: {
            nextEl: '.swiper-button-next3',
            prevEl: '.swiper-button-prev3',
        },
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            980: {
                slidesPerView: 3
            },
            667: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 1
            }
        }
    });

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        direction: 'vertical',
        navigation: {
            nextEl: '.swiper-button-next4',
            prevEl: '.swiper-button-prev4',
        },
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 15,
        slidesPerView: 3,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        direction: 'vertical'
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;
});