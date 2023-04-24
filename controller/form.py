# -*- coding: utf-8 -*-
from odoo import http
from odoo.addons.website.controllers.form import WebsiteForm
from odoo.http import request

class WebsiteForm(http.Controller):
   @http.route('/website/form/landingpage', type='json', auth="public", methods=['POST'], website=True, csrf=False)
   def website_form_landingpage(self, **kw):
        return