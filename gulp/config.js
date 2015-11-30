// gulp/config.js

var gutil    = require('gulp-util'),
    // --prod flag
    isProd   = (gutil.env.prod === true ? true : false),
    // tasks names
    task     = {
    	nunjucks: 'nunjucks',
    };

// define options
module.exports =
{
	isProd: isProd,
	task: task
};