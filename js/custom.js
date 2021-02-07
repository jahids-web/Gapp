$(function () {

    //////nav bar start///
    $(function () {
        var $dis = $(".Gapp_nav").offset().top;
        $(window).scroll(function () {
            var $scroll = $(this).scrollTop();
            if ($scroll >= $dis) {
                $(".Gapp_nav").addClass("fixed")
            } else {
                $(".Gapp_nav").removeClass("fixed")
            }

        })
    });
    /////nav nar end/////

    //////gapp_slider start/////

    $('.screenshot_slide').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

  ]
    });

    /////gapp_slider end/////

    ////back_to_top////

    $(function () {
        $(window).scroll(function () {

            var $scroll = $(this).scrollTop();

            if ($scroll >= 200) {
                $(".top i").fadeIn();
            } else {
                $(".top i").fadeOut();
            }
        })

        $(".top i").click(function () {
            $("html,body").animate({
                scrollTop: 0
            }, 3000)
        })
    })

    ////back_to_top////
    
///scrole ismot start///
    $(document).ready(function () {

        $("a").on('click', function (event) {

            if (this.hash !== "") {

                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 1500, function () {
                    window.location.hash = hash;
                });
            } // End if
        });
    });
///scrole ismot end///
    
    
    
    ////////function end/////////
});
