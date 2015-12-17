// gulp/tasks/base/clean.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp clean'       : clean dest folder & caches
//    'gulp clean:cache' : clear all caches enough
// ----------------------------------
// plugins:
//     del        : $.del
//     gulp-cached: $.cached
// ----------------------------------
// config:
//     config.task.clean : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    // clear all caches enough
    gulp.task(config.task.clean + ':cache', function() {
        
        $.cached.caches = {};

    });

    // delete dest folder and clear all caches
    gulp.task(config.task.clean, [config.task.clean + ':cache'], function() {

        return $.del([
            path.to.dist.main
        ]);

    });

};