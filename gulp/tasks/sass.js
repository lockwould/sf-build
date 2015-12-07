// gulp/tasks/sass.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp sass'
// ----------------------------------
// plugins:
//     gulp-sass : $.sass
//     browser-sync : $.browserSync
//     gulp-changed : $.changed
// ----------------------------------
// config:
//     config.task.sass : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

	gulp.task(config.task.sass, function() {

		return gulp.src(path.to.sass.src)
		.pipe($.sass({
			includePaths: [ path.to.sass.foundation ]
		}).on('error', $.sass.logError))
		.pipe(gulp.dest(path.to.sass.dist.dev));

	});

};