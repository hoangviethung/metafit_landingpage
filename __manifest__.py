# -*- coding: utf-8 -*-
#############################################################################
#
#    Copyright (C) 2023-TODAY
#    Author: 
#    You can modify it under the terms of the GNU LESSER
#    GENERAL PUBLIC LICENSE (LGPL v3), Version 3.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU LESSER GENERAL PUBLIC LICENSE (LGPL v3) for more details.
#
#    You should have received a copy of the GNU LESSER GENERAL PUBLIC LICENSE
#    (LGPL v3) along with this program.
#    If not, see <http://www.gnu.org/licenses/>.
#
#############################################################################
{
    'name': 'Theme MetaFit',
    'description': 'Theme MetaFit is an attractive and modern eCommerce Website theme',
    'summary': 'Design Web Pages with theme MetaFit',
    # 'category': 'Theme/eCommerce',
    'version': '16.0.1.0.0',
    'author': 'PH',
    'company': 'PH',
    'maintainer': 'PH',
    # 'website': "https://www.cybrosys.com",
    'depends': ['website'],
    'data': [
        'views/views.xml',
        'views/header.xml',
        'views/homepage.xml',
    ],
    'images': [
    ],
    'license': 'LGPL-3',
    'installable': True,
    'application': True,
    'auto_install': False,
    'assets': {
            'web.assets_frontend': [
                    '/metafit/static/src/css/style.css',
                # 'metafit/static/src/css/owl.carousel.min.css',
                # 'metafit/static/src/css/owl.theme.default.min.css',
                # 'metafit/static/src/js/product.js',
                    '/metafit/static/src/libs/swiper/swiper-bundle.min.css',
                    '/metafit/static/src/libs/swiper/swiper-bundle.min.js',
                    '/metafit/static/src/js/index.js',
                ],
            },
}
