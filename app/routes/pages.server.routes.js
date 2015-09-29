'use strict';


module.exports = function(app) {
	// Root routing

	var pages = require('../../app/controllers/pages.server.controller');
	app.route('/en').get(pages.index);
    app.route('/en/:page').get(pages.render);
    app.param('page', pages.getPage);
    
};