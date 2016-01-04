// gulp/tasks/default/images.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp images' : main images task
// ----------------------------------
// plugins:
//     gulp-imagemin    : $.imagemin
//     gulp-changed     : $.changed
//     gulp-newer       : $.newer
//     gulp-plumber     : $.plumber
//     imagemin-pngquant: $.pngquant
// ----------------------------------
// config:
//     config.task.images : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

	gulp.task(config.task.images, function() {

		return gulp.src(path.to.images.src)
			// prevent breaking errors
            .pipe($.plumber({
                errorHandler: config.error
            }))
            // only pass through changed files
            .pipe($.changed(path.to.images.dist.dev + '/**/*'))
            // only pass through newer source files
            .pipe($.newer(path.to.images.dist.dev + '/**/*'))
            // minify images
            .pipe($.imagemin(
            	config.images.imageminOptions //options
            ))
            .pipe(gulp.dest(path.to.images.dist.dev));

	});

};