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

    const suit_swiper = new Swiper(".mf_suit_swiper", {
        loop:true,

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    })

    const gallery_swiper = new Swiper(".mf_benefit .gallery-cards", {
        // slidesPerView: 'auto',
        // spaceBetween: 24,
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
              spaceBetween: 24
            },
            480:{
              slidesPerView: 4,
              spaceBetween: 24
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