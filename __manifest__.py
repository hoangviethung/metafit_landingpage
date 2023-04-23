{
    'name': 'MetaFit Landing Page',
    'description': 'MetaFit Landing Page is an attractive and modern Website theme',
    'summary': 'Design Web Pages with theme MetaFit',
    'version': '16.0.1.0.0',
    'author': '',
    'company': '',
    'maintainer': '',
    'website': "",
    'depends': ['website'],
    'data': [
        # DATAS
        'data/menu_data.xml',
        # TEMPLATES
        'views/website_templates.xml',
        'views/homepage.xml',
    ],
    'images': [
    ],
    'license': 'LGPL-3',
    'installable': True,
    'application': True,
    'auto_install': False,
    'assets': {
        'web.assets_frontend':[
            # SCSS
            '/metafit_landingpage/static/src/scss/mixins.scss',
            '/metafit_landingpage/static/src/scss/common.scss',
            '/metafit_landingpage/static/src/scss/forms.scss',
            '/metafit_landingpage/static/src/scss/buttons.scss',
            '/metafit_landingpage/static/src/scss/fonts.scss',
            '/metafit_landingpage/static/src/scss/portal.scss',
            '/metafit_landingpage/static/src/scss/website.scss',
            '/metafit_landingpage/static/src/scss/pages/homepage.scss',
            # JS
            '/metafit_landingpage/static/src/libs/swiper/swiper-bundle.min.css',
            '/metafit_landingpage/static/src/libs/swiper/swiper-bundle.min.js',
            '/metafit_landingpage/static/src/js/menu.js',
            '/metafit_landingpage/static/src/js/home.js',
        ],
        'web._assets_primary_variables': [
            '/metafit_landingpage/static/src/scss/primary_variables.scss'
        ],
        'web._assets_frontend_helpers': [
            ('prepend', '/metafit_landingpage/static/src/scss/bootstrap_overridden.scss'),
        ],
    },
}