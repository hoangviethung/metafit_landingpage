odoo.define('metafit.theme_metafit', function (require) {
    "use strict";

    $('.navbar-toggler').click(function(){
        $(".mf_navbar").toggleClass("mf_nav_bg");

    })

    $(function() {
      let loc = window.location.pathname;
      if(loc != '/'){
        $('.mf_navbar').css({'background-color': '#04030E', 'position': 'unset'})
      }
      console.log(loc);
    });

    const hero_swiper = new Swiper(".mf_hero_swiper", {
        effect: 'fade',
        allowTouchMove: false,
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000,
          },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    });

    const suit_swiper = new Swiper(".mf_suit_swiper", {

        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    })

    const gallery_swiper = new Swiper(".mf_benefit .gallery-cards", {
        slideToClickedSlide: true,
        loop: true,
        autoplay: {
            delay: 5000,
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
              slidesPerView: 3,
              spaceBetween: 24
            },
            1441:{
              slidesPerView: 4,
              spaceBetween: 24
            }
        }

      });

    const studio_swiper = new Swiper('.mf_studio_swiper', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000,
          },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    })

})