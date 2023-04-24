odoo.define("metafit.content.menu", function (require) {
    ("use strict");
    const publicWidget = require("web.public.widget");
    require("website.content.menu");

    publicWidget.registry.FixedHeader.include({
        start: function () {
            return this._super.apply(this, arguments);
        },

        _updateHeaderOnScroll: function (scroll) {
            this._super(...arguments);
            const self = this;
            const sections = $("section[class*='mf_section_']");
            const navLinks = this.$("#top_menu .nav-item .nav-link");
            const heightHeader = this.$("nav")[0].offsetHeight;
            sections.each((i, section) => {
                const offset = section.offsetTop;
                const id = section.id;
                const index = i;
                if (scroll >= offset - heightHeader) {
                    navLinks.each(function (i, links) {
                        $(links).removeClass("active");
                        if (index == 0) {
                            self.$(
                                '#top_menu .nav-item .nav-link[href="/"]',
                            ).addClass("active");
                        } else {
                            self.$(
                                '#top_menu .nav-item .nav-link[href="/#' +
                                    id +
                                    '"]',
                            ).addClass("active");
                        }
                    });
                }
            });
        },
    });
});
