// gulp/config.js

var gutil    = require('gulp-util'),
    // --prod flag
    isProd   = (gutil.env.prod === true ? true : false),
    // tasks names
    task     = {
    	nunjucks: 'nunjucks',
    	browserSync: 'serve',
    },
    // browser-sync options, more here http://www.browsersync.io/docs/options/
    serve    = {
    	// project local url
    	url: 'gulp.dev',
    	// set browser automaically opened
    	browser: 'google chrome'
    };

// define options
module.exports =
{
	isProd: isProd,
	task: task,
	serve: serve
};