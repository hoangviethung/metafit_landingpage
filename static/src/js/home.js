odoo.define("metafit.home", function (require) {
    "use strict";

    const publicWidget = require("web.public.widget");

    publicWidget.registry.MetafitHome = publicWidget.Widget.extend({
        selector: ".wrapwrap_mf_homepage",
        xmlDependencies: [],
        events: {},
        start: function () {
            const suit_swiper = new Swiper(".mf_suit_swiper", {
                speed: 500,
                autoplay: {
                    delay: 3000,
                },
                pagination: {
                    el: ".mf_suit_swiper .swiper-pagination",
                    clickable: true,
                },
            });

            const gallery_swiper = new Swiper(".mf_benefit .gallery-cards", {
                slideToClickedSlide: true,
                loop: true,
                pagination: {
                    el: ".mf_benefit .swiper-pagination",
                    clickable: true,
                },
                speed: 500,
                slidesPerView: 2.4,
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
            });

            const studio_swiper = new Swiper(".mf_studio_swiper", {
                effect: "fade",
                fadeEffect: {
                    crossFade: true,
                },
                autoplay: {
                    delay: 3000,
                },
                speed: 1000,
                pagination: {
                    el: ".mf_studio_swiper .swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    1440: {
                        autoplay: {
                            delay: 5000,
                        },
                    },
                }
            });

            return this._super.apply(this, arguments);
        },
    });
});
