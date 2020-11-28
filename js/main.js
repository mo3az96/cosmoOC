$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        // $("body").removeClass("overflow");
    });
    $(".mo-modal-overlay").fadeIn(500)
    $(".mo-modal").addClass("mo-modal-in");
});
$(document).ready(function () {
    ///////// **modal** /////////
    $('.mo-modal-overlay').click(function () {
        $(".mo-modal-overlay").fadeOut(400);
        $(".mo-modal").removeClass("mo-modal-in");
        $("body").removeClass("overflow");
    });
    $('.mo-modal').click(function (e) {
        e.stopPropagation();
    });
    $('.mo-modal-close').click(function () {
        $(".mo-modal-overlay").fadeOut(400);
        $(".mo-modal").removeClass("mo-modal-in");
        $("body").removeClass("overflow");
    });
    //////////** arrow top **//////////
    $(window).scroll(function () {
        $(this).scrollTop() >= 500 ? $(".arrow-top").fadeIn(500) : $(".arrow-top").fadeOut(500);
    });
    $(".arrow-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });
    //////////** header-message **//////////
    $(".header-message span.close-msg").click(function () {
        $(".header-message").slideUp()
    });
    //////////** products slider **//////////
    var bestswiper = new Swiper('.products-slider.best-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.products-slider.best-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.products-slider.best-slider .swiper-button-next',
            prevEl: '.products-slider.best-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 17,
            },
        },
    });
    //////////** products slider **//////////
    var newswiper = new Swiper('.products-slider.new-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.products-slider.new-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.products-slider.new-slider .swiper-button-next',
            prevEl: '.products-slider.new-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 17,
            },
        },
    });
    //////////** products slider **//////////
    var offerswiper = new Swiper('.products-slider.offer-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.products-slider.offer-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.products-slider.offer-slider .swiper-button-next',
            prevEl: '.products-slider.offer-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 17,
            },
        },
    });
    //////////** products slider **//////////
    var cat1swiper = new Swiper('.products-slider.cat1-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.products-slider.cat1-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.products-slider.cat1-slider .swiper-button-next',
            prevEl: '.products-slider.cat1-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 17,
            },
        },
    });
    //////////** products slider **//////////
    var cat2swiper = new Swiper('.products-slider.cat2-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.products-slider.cat2-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.products-slider.cat2-slider .swiper-button-next',
            prevEl: '.products-slider.cat2-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 17,
            },
        },
    });
    //////////** products slider **//////////
    var cat3swiper = new Swiper('.products-slider.cat3-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.products-slider.cat3-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.products-slider.cat3-slider .swiper-button-next',
            prevEl: '.products-slider.cat3-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 17,
            },
        },
    });
    //////////** products slider **//////////
    var cat4swiper = new Swiper('.products-slider.cat4-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.products-slider.cat4-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.products-slider.cat4-slider .swiper-button-next',
            prevEl: '.products-slider.cat4-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 17,
            },
        },
    });
    //////////** products slider **//////////
    var cat5swiper = new Swiper('.products-slider.cat5-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.products-slider.cat5-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.products-slider.cat5-slider .swiper-button-next',
            prevEl: '.products-slider.cat5-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 17,
            },
        },
    });
    //////////** products slider **//////////
    var cat6swiper = new Swiper('.products-slider.cat6-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.products-slider.cat6-slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.products-slider.cat6-slider .swiper-button-next',
            prevEl: '.products-slider.cat6-slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 23,
            },
            1199: {
                slidesPerView: 4,
                spaceBetween: 17,
            },
        },
    });

    if ($(window).width() <= 991) {
        $(".header-setting, .user-setting").click(function () {
            $(this).toggleClass("active")
        });
    }

    //////////** search **//////////
    if ($(window).width() <= 767) {
        $('.search-icon').click(function () {
            $(".search-cont").slideDown(400);
            $("body").addClass("overflow");
            $(".search-overlay").show();
        });
        $('.search-overlay').click(function () {
            $(".search-cont").slideUp(400);
            $("body").removeClass("overflow");
            $(".search-overlay").hide();
        });
    }

    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".nav-foot-head").addClass("mo-accordion");
        $(".foot-nav").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })

    //////////** menu **//////////
    if ($(window).width() > 767) {
        $('.menu-icon').click(function () {
            $("nav").slideToggle(400);
            $("body").toggleClass("overflow");
            $(".menu-overlay").fadeToggle(400);
        });
        $('.menu-overlay').click(function () {
            $("nav").slideUp(400);
            $("body").removeClass("overflow");
            $(".menu-overlay").fadeOut(400);
        });
    }
    if ($(window).width() <= 767) {
        $('.menu-icon').click(function () {
            $("nav").addClass("nav-in");
            $("body").addClass("overflow");
            $(".menu-overlay").fadeToggle(400);
        });
        $('.menu-overlay,.menu-close').click(function () {
            $("nav").removeClass("nav-in");
            $("body").removeClass("overflow");
            $(".menu-overlay").fadeOut(400);
        });
        $('.level-2-btn>.nav-a').click(function () {
            $(".level-2-btn>.nav-a").not(this).removeClass("active");
            $(this).toggleClass("active");
            if ($(this).siblings().css('display') == 'none') {
                $(this).siblings().slideDown(500);
            } else {
                $(this).siblings().slideUp(500);
            }
            $(".level-2-btn>.nav-a").not(this).siblings().slideUp(500);
        })
        $('.level-3-btn>.nav-a').click(function () {
            $(".level-3-btn>.nav-a").not(this).removeClass("active");
            $(this).toggleClass("active");
            if ($(this).siblings().css('display') == 'none') {
                $(this).siblings().slideDown(500);
            } else {
                $(this).siblings().slideUp(500);
            }
            $(".level-3-btn>.nav-a").not(this).siblings().slideUp(500);
        })
    }
});