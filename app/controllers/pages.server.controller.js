'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null,
		state: 'state-projects'
	});
};
exports.getPage = function(req, res, next, page){
    req.page = 'state-' + page;
    console.log(req.page)
    next();
}
exports.render = function(req, res){
    res.render('index',{
        state: req.page
    });
}