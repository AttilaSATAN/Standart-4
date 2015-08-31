'use strict';

var checkFile = function(file){
    
};

module.exports.getFile = function (req, res, next, file){
    console.log(req.app.get('views'));
    next();
};

module.exports.read = function(req, res){
    if(!req.template){
        return res.status(404).render(404);
    }
    res.render(req.template, {});
};
module.exports.hasAuthantication = function(req, res, next, file){
    req.template = file;
    next();
};