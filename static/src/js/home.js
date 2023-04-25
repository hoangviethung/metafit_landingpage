odoo.define("metafit.home", function (require) {
    "use strict";

    const publicWidget = require("web.public.widget");

    publicWidget.registry.MetafitHome = publicWidget.Widget.extend({
        selector: ".wrapwrap_mf_homepage",
        xmlDependencies: [],
        events: {},
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

            $(".mf_form_contact").submit((e) => {
                e.preventDefault();
            });

            $(".mf_form_contact").validate({
                rules: {
                    name: {
                        lettersonly: true,
                        required: true,
                        minlength: 12,
                    },
                    phone: {
                        minlength: 10,
                        maxlength: 10,
                        required: true,
                    },
                    email: {
                        required: true,
                        email: true,
                    },
                    desc: {
                        required: true,
                    },
                },
            });

            return this._super.apply(this, arguments);
        },
    });
});
