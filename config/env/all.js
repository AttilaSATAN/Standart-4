'use strict';

module.exports = {
	app: {
		title: 'Standart-4',
		description: 'Standart-4',
		keywords: 'Standart-4'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'nunjucks',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
                'public/lib/bootstrap/dist/css/bootstrap-theme.css'
                
			],
			js: [
                'public/lib/modernizr/modernizr.js',
                'public/lib/jquery/dist/jquery.js',
				'public/lib/bootstrap/dist/js/bootstrap.js',
                'public/lib/lodash/lodash.js'
			]
		},
		css: [
            'public/css/main.css'
        ],
		js: [],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};