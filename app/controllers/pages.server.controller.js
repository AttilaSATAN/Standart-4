'use strict';

/**
 * Module dependencies.
 */
exports.index = function (req, res) {
    res.render('index', {
        user: req.user || null,
        state: 'state-projects'
    });
};
exports.getPage = function (req, res, next, page) {
    req.page = 'state-' + page;
    console.log(req.page)
    next();
}
exports.render = function (req, res) {
    res.render('index', {
        state: req.page
    });
}
exports.lang = function (req, res, next, lang) {
    req.lang = lang;
    console.log('LANG', req.lang)
    next();
}
