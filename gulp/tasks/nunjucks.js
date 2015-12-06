// gulp/tasks/nunjucks.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp nunjucks'
// ----------------------------------
// plugins:
//     gulp-nunjucks-render : $.nunjucksRender
//     browser-sync : $.browserSync
//     gulp-changed : $.changed
// ----------------------------------
// config:
//     config.task.nunjucks : task name
// ----------------------------------

module.exports = function (gulp, $, path, config) {

	gulp.task(config.task.nunjucks, function() {

	    $.nunjucksRender.nunjucks.configure([path.to.nunjucks.config], {watch: false});
	    return gulp.src(path.to.nunjucks.src)
	    // only pass through changed files
	    .pipe($.changed(config.isProd ? path.to.dist.prod : path.to.dist.dev))
	    .pipe($.nunjucksRender())
	    .pipe(config.isProd ? gulp.dest(path.to.dist.prod) : gulp.dest(path.to.dist.dev))
	    .pipe($.browserSync.reload({
	  	  stream: true
	    }));

	});

};