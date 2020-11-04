// Custom Function Start Here

$(function () {

    //  Sticky Header Jquery Code Start Here
    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();
        if (scrolling > 100) {
            $('.header').addClass('header-bg');
        } else {
            $('.header').removeClass('header-bg');
        }
    });
    //  Sticky Header Jquery Code End Here

    //  Banner Slider Jquery Code Start Here
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: ('<i class="fas fa-arrow-circle-left prev"></i>'),
        nextArrow: ('<i class="fas fa-arrow-circle-right next"></i>'),
    });

    //  Banner Slider Jquery Code End Here

    //  Portfolio Slider Jquery Code Start Here
    $('.port_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }
    ]
    });
    //  Portfolio Slider Jquery Code End Here

    //  Service Jquery Code Start Here
    $('.service_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        verticalSwiping: true,
        prevArrow: ('<i class="far fa-chevron-up up"></i>'),
        nextArrow: ('<i class="far fa-chevron-down down"></i>'),
        centerMode: true,
        centerPadding: false,
        responsive: [
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
    ]
    });
    //  Service Jquery Code End Here

    //  Testimonial Jquery Code Start Here
    $('.testimonial_left_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        verticalSwiping: true,
        prevArrow: ('<i class="far fa-chevron-up up"></i>'),
        nextArrow: ('<i class="far fa-chevron-down down"></i>'),
        centerMode: true,
        centerPadding: false,
        asNavFor: ('.testimonial_review_slider'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                    verticalSwiping: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                    verticalSwiping: false,
                }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                vertical: false,
                verticalSwiping: false,
            }
        }
    ]
    });
    //  Testimonial Jquery Code End Here

    //  Testimonial Review Jquery Code Start Here
    $('.testimonial_review_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 500,
        asNavFor: ('.testimonial_left_slide'),
    });
    //  Testimonial Review Jquery Code End Here

    //  Price Jquery Code Start Here
    $('.price_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 500,
        centerMode: true,
        centerPadding: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                    verticalSwiping: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    vertical: false,
                    verticalSwiping: false,
                }
            },
            {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                vertical: false,
                verticalSwiping: false,
            }
        }
    ]
    });
    //  Price Jquery Code End Here

    //  Project Counter Jquery Code Start Here
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    //  Project Counter Jquery Code End Here

    //  Common Jquery Code Start Here

    //  Common Jquery Code End Here

});
// Custom Function End Here