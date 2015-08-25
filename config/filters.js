'use strict';

module.exports = function(env){

    env.addFilter('json', function(object){
        return JSON.stringify(object);
    });
    
};