'use strict';


module.exports = function(app) {
	// Root routing

	var pages = require('../../app/controllers/pages.server.controller');
	app.route('/:lang').get(pages.index);
    app.route('/:lang/:page').get(pages.render);
    app.param('lang', pages.lang);
    app.param('page', pages.getPage);
    
};