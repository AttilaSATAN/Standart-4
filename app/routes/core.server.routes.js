'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('../../app/controllers/core.server.controller'),
        pages = require('../../app/controllers/pages.server.controller');
	app.route('/').get(pages.all, core.index);
};