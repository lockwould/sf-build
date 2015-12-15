// gulp/config.js
'use strict';

var gutil  = require('gulp-util'),
    // --prod flag
    isProd = (gutil.env.prod === true ? true : false),
    // tasks names
    task   = {
		nunjucks   : 'nunjucks',
		browserSync: 'serve',
		sass       : 'sass',
		bower      : 'bower',
		inject     : 'inject'
    },
    // browser-sync options
    serve  = {
        // project local url
		url    : 'gulp.dev',
		// set browser automaically opened
		browser: 'google chrome'
        // for more options: http://www.browsersync.io/docs/options
    };

// define options
module.exports = {
	isProd: isProd,
	task  : task,
	serve : serve
};