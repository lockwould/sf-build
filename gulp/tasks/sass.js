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
//     gulp-newer  : $.newer
//     gulp-flatten: $.flatten
// ----------------------------------
// config:
//     config.task.sass : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    gulp.task(config.task.sass, function() {

        return gulp.src(path.to.sass.src)
            // only pass through changed files
            .pipe($.changed(
                config.isProd ? path.to.sass.dist.prod + '/**/*.css' : path.to.sass.dist.dev + '/**/*.css'))
            // only pass through newer source files
            .pipe($.newer(
                config.isProd ? path.to.sass.dist.prod + '/**/*.css' : path.to.sass.dist.dev + '/**/*.css'))
            // start compile
            .pipe($.sass({
                includePaths: [path.to.sass.foundation]
            }).on('error', $.sass.logError))
            // replace relative path for files
            // .pipe($.flatten())
            .pipe(gulp.dest(config.isProd ? path.to.sass.dist.prod : path.to.sass.dist.dev))
            .pipe($.browserSync.reload({
                stream: true
            }));

    });

};