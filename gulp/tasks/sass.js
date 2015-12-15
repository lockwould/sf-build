// gulp/tasks/sass.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp sass' : compile scss to css
// ----------------------------------
// plugins:
//     gulp-sass   : $.sass
//     browser-sync: $.browserSync
//     gulp-changed: $.changed
//     gulp-flatten: $.flatten
// ----------------------------------
// config:
//     config.task.sass : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    gulp.task(config.task.sass, function() {

        return gulp.src(path.to.sass.src)
            .pipe($.sass({
                includePaths: [path.to.sass.foundation]
            }).on('error', $.sass.logError))
            // replace relative path for files
            // .pipe($.flatten())
            .pipe(gulp.dest(path.to.sass.dist.dev))
            .pipe($.browserSync.reload({
                stream: true
            }));

    });

};