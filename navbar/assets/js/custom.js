$(document).ready(function() {
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        fade: true
    });
    $('.slider_2').slick({
        dots: false,
        infinite: true,
        speed: 2000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        fade: true
    });

    $('.btn-img').mouseover(function() {
        $('.img-xxl').hide(500);
        $(this).parent().find('.img-xxl').fadeIn('500', function() {

        });
    });

    var event = true
    $('.nav-link').click(function(e) {
        e.preventDefault()
        if (event) {
            $(this).parent().find('.sous-item').slideDown(600)
            event = false;
        } else {
            $(this).parent().find('.sous-item').slideUp(600)
            event = true;
        }
    })
})

$(window).on('load', function() {
    function remove() {
        $('.loader').remove()
    }

    function fade() {
        $('.pre_load').delay(2000).fadeIn(function() {
            preload()
        });
    }

    function preload() {
        c1 = gsap.timeline();

        c1.to('.pre_load', {
            yPercent: -100,
            duration: 2,
            ease: Bounce.easeOut
        })

    }
    fade()


})