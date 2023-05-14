odoo.define("metafit.home", function (require) {
    "use strict";

    const publicWidget = require("web.public.widget");

    publicWidget.registry.MetafitHome = publicWidget.Widget.extend({
        selector: ".wrapwrap_mf_homepage",
        xmlDependencies: [],

        // events: { "click .s_website_form_send": "_validateFormContact" },
        start: function () {
            const symbiont_swiper = new Swiper(".symbiont-swiper", {
                speed: 500,
                autoplay: {
                    delay: 3000,
                },
                loop: true,
                pagination: {
                    el: ".symbiont-swiper .swiper-pagination",
                    clickable: true,
                },
            });

            const benefit_swiper = new Swiper(".benefit-swiper", {
                slideToClickedSlide: true,
                loop: true,
                pagination: {
                    el: ".benefit-swiper .swiper-pagination",
                    clickable: true,
                },
                speed: 500,
                slidesPerView: 2.4,
                autoplay: {
                    delay: 3000,
                },
                effect: "creative",
                creativeEffect: {
                    limitProgress: 24,
                    prev: {
                        scale: 0.8,
                        translate: ["-95%", 0, 0],
                    },
                    next: {
                        scale: 0.8,
                        translate: ["98%", 0, 0],
                    },
                },
                breakpoints: {
                    1440: {
                        autoplay: {
                            delay: 5000,
                        },
                    },
                },
            });

            const studio_swiper = new Swiper(".studio-swiper", {
                effect: "fade",
                fadeEffect: {
                    crossFade: true,
                },
                autoplay: {
                    delay: 3000,
                },
                speed: 1000,
                loop: true,
                pagination: {
                    el: ".studio-swiper .swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    1440: {
                        autoplay: {
                            delay: 5000,
                        },
                    },
                },
            });

            const form = this.$("#contactus_form");

            form.validate({
                onfocusout: function(element) { this.element(element); },
                rules: {
                    phone: {
                        phoneVN: true,
                        required: true,
                    },
                    email: { email: true },
                },
            });

            $('#contact1').on('blur', function(e){
                if(!form.valid()) $('.s_website_form_send').prop('disabled', true);
                else $('.s_website_form_send').prop('disabled', false);
            })

            $('#contact2').on('blur', function(e){
                if(!form.valid()) $('.s_website_form_send').prop('disabled', true);
                else $('.s_website_form_send').prop('disabled', false);
            })

            $('#contact3').on('blur', function(e){
                if(!form.valid()) $('.s_website_form_send').prop('disabled', true);
                else $('.s_website_form_send').prop('disabled', false);
            })

            $('#contact6').on('blur', function(e){
                if(!form.valid()) $('.s_website_form_send').prop('disabled', true);
                else $('.s_website_form_send').prop('disabled', false);
            })

            return this._super.apply(this, arguments);
        },
    });
});
