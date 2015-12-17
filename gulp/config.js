// gulp/config.js
'use strict';

var gutil  = require('gulp-util'),
    // --prod flag
    isProd = (gutil.env.prod === true ? true : false),
    // tasks names
    task   = {
        browserSync: 'serve',
        sass: 'sass',
        bower: 'bower',
        html: 'html',
        clean: 'clean'
    },
    // browser-sync options
    serve  = {
        // project local url
        url: 'gulp.dev',
        // set browser automaically opened
        browser: 'google chrome'
            // for more options: http://www.browsersync.io/docs/options
    };

// define options
module.exports = {
    isProd: isProd,
    task: task,
    serve: serve,
    // error handler
    error: function(error) {
        // output an error message
        gutil.log(
            gutil.colors.red(
                '\n\------------------------------\n\Error in plugin (' + gutil.colors.green(error.plugin) + '):\n\ ' + gutil.colors.blue(error.message) + '------------------------------'
            )
        );
        // emit the end event, to properly end the task
        this.emit('end');
    }
};