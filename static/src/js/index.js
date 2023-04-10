odoo.define('metafit.theme_metafit', function (require) {
    "use strict";

    $('.navbar-toggler').click(function(){
        $(".mf_navbar").toggleClass("test");

    })

    // $(window).scroll(function(){
    //     const nav = $('mf_navbar')
    //     const top = 200;
    //     if($(window).scrollTop() >= top){
    //         console.log('hehe');
    //         nav.addClass('test')
    //     }else{
    //         console.log('hihi');
    //         nav.removeClass('test')
    //     }
    // })

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });

    const hero_swiper = new Swiper(".mf_hero_swiper", {
        loop:true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3000,
          },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    });

    const gallery_swiper = new Swiper(".mf_benefit .gallery-cards", {
        slidesPerView: 5,
        spaceBetween: 25,
        loop: true,
        slideToClickedSlide: true,
        autoplay: {
            delay: 3000,
          },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            480: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 25
            },
            1200:{
              slidesPerView: 5,
              spaceBetween: 25
            }
        }

      });

    const studio_swiper = new Swiper('.mf_studio_swiper', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3000,
          },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    })

})