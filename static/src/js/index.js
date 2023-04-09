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

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    });

    const gallery_swiper = new Swiper(".mf_benefit .gallery-cards", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
      });

})