odoo.define("metafit.content.menu", function (require) {
    ("use strict");
    const publicWidget = require("web.public.widget");
    require("website.content.menu");

    publicWidget.registry.StandardAffixedHeader.include({
        start: function () {
            return this._super.apply(this, arguments);
        },
    });
});
