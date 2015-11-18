'use strict';
var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    Page = mongoose.model('Page'),
    _ = require('lodash');

//var dummyPages = [{
//    class: 'projects',
//    title: 'MTT',
//    keywords: 'mtt, ahşap, taahhüt',
//    lang: 'tr',
//    url: '/tr/projeler',
//    contentUrl: '/content/tr/projects'
//            }, {
//    class: 'projects',
//    title: 'MTT',
//    keywords: 'mtt, ahşap, taahhüt',
//    lang: 'eng',
//    url: '/eng/projects',
//    contentUrl: '/content/en/projects'
//            }, {
//    class: 'us',
//    title: 'MTT',
//    keywords: 'mtt, ahşap, taahhüt',
//    lang: 'tr',
//    url: '/tr/biz',
//    contentUrl: '/content/tr/us'
//            }, {
//    class: 'us',
//    title: 'MTT',
//    keywords: 'mtt, ahşap, taahhüt',
//    lang: 'eng',
//    url: '/eng/us',
//    contentUrl: '/content/en/us'
//            }, {
//    class: 'products-and-services',
//    title: 'MTT',
//    keywords: 'mtt, ahşap, taahhüt',
//    lang: 'tr',
//    url: '/tr/urun-ve-hizmetler',
//    contentUrl: '/content/tr/products-and-services'
//            }, {
//    class: 'products-and-services',
//    title: 'MTT',
//    keywords: 'mtt, ahşap, taahhüt',
//    lang: 'eng',
//    url: '/eng/products-and-services',
//    contentUrl: '/content/en/products-and-services'
//            }, {
//    class: 'contact',
//    title: 'MTT',
//    keywords: 'mtt, ahşap, taahhüt',
//    lang: 'tr',
//    url: '/tr/iletisim',
//    contentUrl: '/content/tr/contact'
//            }, {
//    class: 'contact',
//    title: 'MTT',
//    keywords: 'mtt, ahşap, taahhüt',
//    lang: 'eng',
//    url: '/eng/contact',
//    contentUrl: '/content/en/contact'
//}];
var states = [{
    class: 'root',
    title: 'MTT',
    keywords: 'mtt, ahşap, taahhüt',
    lang: 'tr',
    url: '/',
    contentUrl: '/'
        }, {
    class: 'projects',
    title: 'MTT',
    keywords: 'mtt, ahşap, taahhüt',
    lang: 'tr',
    url: '/tr/projeler',
    contentUrl: '/content/tr/projects',
    view: 'main-view'
            }, {
    parentUrl: '/tr/projeler',
    class: 'projects-malls',
    title: 'MTT',
    keywords: 'mtt, ahşap, taahhüt',
    lang: 'tr',
    url: '/tr/projeler/alis-veris-merkezleri',
    contentUrl: '/content/tr/projects-malls'
            }, {
    parentUrl: '/tr/projeler',
    class: 'projects-hotels',
    title: 'MTT',
    keywords: 'mtt, ahşap, taahhüt',
    lang: 'tr',
    url: '/tr/projeler/oteller',
    contentUrl: '/content/tr/projects-hotels'
            }, {
    parentUrl: '/tr/projeler',
    class: 'projects-restaurants',
    title: 'MTT',
    keywords: 'mtt, ahşap, taahhüt',
    lang: 'tr',
    url: '/tr/projeler/restoranlar',
    contentUrl: '/content/tr/projects-restaurants'
            }, {
    class: 'projects',
    title: 'MTT',
    keywords: 'mtt, ahşap, taahhüt',
    lang: 'eng',
    url: '/eng/projects',
    contentUrl: '/content/en/projects'
            }, {
    class: 'us',
    title: 'MTT',
    keywords: 'mtt, ahşap, taahhüt',
    lang: 'tr',
    url: '/tr/biz',
    contentUrl: '/content/tr/us'
            }, {
    class: 'us',
    title: 'MTT',
    keywords: 'mtt, ahşap, taahhüt',
    lang: 'eng',
    url: '/eng/us',
    contentUrl: '/content/en/us'
            }, {
    class: 'products-and-services',
    title: 'MTT',
    keywords: 'mtt, ahşap, taahhüt',
    lang: 'tr',
    url: '/tr/urun-ve-hizmetler',
    contentUrl: '/content/tr/products-and-services'
            }, {
    class: 'products-and-services',
    title: 'MTT',
    keywords: 'mtt, ahşap, taahhüt',
    lang: 'eng',
    url: '/eng/products-and-services',
    contentUrl: '/content/en/products-and-services'
            }, {
    class: 'contact',
    title: 'MTT',
    keywords: 'mtt, ahşap, taahhüt',
    lang: 'tr',
    url: '/tr/iletisim',
    contentUrl: '/content/tr/contact'
            }, {
    class: 'contact',
    title: 'MTT',
    keywords: 'mtt, ahşap, taahhüt',
    lang: 'eng',
    url: '/eng/contact',
    contentUrl: '/content/en/contact'
        }];

var statesByUrl = {};

// init statesByUrl collection object

for (var i = 0; i < states.length; i++) {

    var cur = states[i];
    cur.classState = cur.class + '-state';
    cur.classIn = cur.classState + '-anim-in';
    cur.classOut = cur.classState + '-anim-out';
    cur.classMove = cur.classState + '-anim-move';
    statesByUrl[cur.url] = cur;

}



exports.all = function (req, res, next) {
    Page.find({}, function (err, pages) {
        if (err) {
            return res.status(500).send({
                message: 'Bir sorunla karşılaştık.'
            });
        }
        next();
    });
}


//populate
//Page.find({}, function (err, pages) {
//
//        if (!pages || !pages.length) {
//            Page.collection.insert(dummyPages, function (err, v) {
//                console.log('err', err);
//                console.log('v', v)
//            });
//        } else {
//            exports.all = pages;
//        }
//    })
/**
 * Module dependencies.
 */
exports.index = function (req, res) {
    res.render('index', {
        user: req.user || null,
        state: 'projects-state'
    });
};

exports.getPage = function (req, res, next, page) {
    var url = '/' + req.lang + '/' + page;

    if (statesByUrl[url]) {
        req.page = statesByUrl[url].classState;

    }
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

//
