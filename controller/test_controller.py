import datetime
from odoo import http

class test(http.Controller):
   @http.route('/test', type='json', auth="public", methods=['POST'], website=True, csrf=False)
   def test(self, **kw):
      return 