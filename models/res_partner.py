from odoo import api, fields, models, _


class ResPartner(models.Model):
    _inherit = 'res.partner'

    def _get_contact_url(self):
        base_url = self.env['ir.config_parameter'].sudo().get_param('web.base.url')
        url = base_url + '/web#model=res.partner&id={id}'.format(id=self.id) or '#'
        return url

    @api.model
    def create(self, vals):
        if 'user_id' not in vals:
            default_sale_person = self.env['ir.config_parameter'].sudo().get_param('metafit.default_sale_person')
            sale_person = self.env['res.users'].browse(int(default_sale_person))
            if sale_person:
                vals['user_id'] = sale_person.id
        res = super(ResPartner, self).create(vals)
        for rec in res:
            if rec.user_id:
                mail_template = self.env.ref('metafit_landingpage.email_template_notify_sale_person')
                if mail_template:
                    mail_template.sudo().send_mail(rec.id, force_send=True)
        return res
