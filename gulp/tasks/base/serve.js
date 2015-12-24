// gulp/tasks/base/serve.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp serve'      : start server & open browser
//    'gulp serve:prod' : start server for production
// ----------------------------------
// plugins:
//     browser-sync : $.browserSync
// ----------------------------------
// config:
//     config.task.browserSync : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    gulp.task(config.task.browserSync, function() {
        $.browserSync({
            // server: {
            // 	baseDir: path.to.dist.dev
            // },
            proxy: config.serve.url + '/' + path.to.dev,
            browser: config.serve.browser
        })
    });

    gulp.task(config.task.browserSync + ':prod', function() {
        $.browserSync({
            // server: {
            //  baseDir: path.to.dist.prod
            // },
            proxy: config.serve.url + '/' + path.to.prod,
            browser: config.serve.browser
        })
    });

};