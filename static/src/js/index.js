odoo.define('metafit.theme_metafit', function (require) {
    "use strict";

    $('.navbar-toggler').click(function(){
        $(".mf_navbar").toggleClass("mf_nav_bg");

    })

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
        spaceBetween: 10,
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
            0: {
              slidesPerView: 3,
              spaceBetween: 10
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