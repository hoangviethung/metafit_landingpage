odoo.define("metafit.content.menu", function (require) {
    ("use strict");
    const publicWidget = require("web.public.widget");
    require("website.content.menu");

    publicWidget.registry.StandardAffixedHeader.include({
        start: function () {
            return this._super.apply(this, arguments);
        },

        _updateHeaderOnScroll: function(scroll){
            let sections = $('section');
            let navLinks = $('header #top_menu li a')
            sections.each((i, sec) => {
                let offset = sec.offsetTop -120;
                let height = sec.offsetHeight;
                let id = sec.id
                if(scroll >= offset && scroll < offset + height){
                    navLinks.each(function(i, links){
                        $(links).removeClass('active')
                        if(id == 'hero_banner') $('header #top_menu li a[href="/"]').addClass('active')
                        else $('header #top_menu li a[href="/#' +id+ '"]').addClass('active')
                    })
                }
            })
            return this._super.apply(this, arguments);
        }

    });
});
