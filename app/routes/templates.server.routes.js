'use strict';

module.exports = function (app) {
    var templates = require('../../app/controllers/templates.server.controller'),
        users = require('../../app/controllers/users.server.controller');

    app.route('/templates/:templateFile')
        .get(templates.read);

    app.param('templateFile', templates.hasAuthantication);
};
