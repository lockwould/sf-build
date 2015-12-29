// gulp/tasks/default/scripts.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp js' : main js task
// ----------------------------------
// plugins:
//     browserify         : $.browserify
//     vinyl-source-stream: $.vinylSourceStream
//     vinyl-buffer       : $.vinylBuffer
//     browser-sync       : $.browserSync
//     gulp-changed       : $.changed
//     gulp-newer         : $.newer
//     gulp-cached        : $.cached
//     gulp-sourcemaps    : $.sourcemaps
//     gulp-plumber       : $.plumber
// ----------------------------------
// config:
//     config.task.scripts : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    // browserify task
    gulp.task(config.task.scripts + ':browserify', function() {

        // set up the browserify instance on a task basis
        var b = $.browserify({
        	entries: path.to.js.src.main,
            debug: true
        });

        return b.bundle()
		.pipe($.vinylSourceStream('scripts.js'))
		.pipe($.vinylBuffer())
		.pipe(gulp.dest(path.to.js.dist.dev))
		.pipe($.browserSync.reload({
                stream: true
        }));

	});

	// main js task
    gulp.task(config.task.scripts, function(cb) {

        $.runSequence(
            config.task.scripts + ':browserify',
            cb
        )

    });

};