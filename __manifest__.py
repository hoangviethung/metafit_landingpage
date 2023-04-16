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
        'data/menu_data.xml',
        'views/views.xml',
        'views/header.xml',
        'views/homepage.xml',
        'views/footer.xml',
    ],
    'images': [
    ],
    'license': 'LGPL-3',
    'installable': True,
    'application': True,
    'auto_install': False,
    'assets': {
            'web.assets_frontend': [
                    '/metafit_landingpage/static/src/css/style.css',
                    '/metafit_landingpage/static/src/libs/swiper/swiper-bundle.min.css',
                    '/metafit_landingpage/static/src/libs/swiper/swiper-bundle.min.js',
                    '/metafit_landingpage/static/src/js/index.js',
                ],
            },
}
