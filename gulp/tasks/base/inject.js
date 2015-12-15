// gulp/tasks/base/inject.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp inject'
//    'gulp inject:css'
//    'gulp inject:js'
// ----------------------------------
// plugins:
//     gulp-inject : $.inject
//     run-sequence: $.runSequence
// ----------------------------------
// config:
//     config.task.inject : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    // inject css files
    gulp.task(config.task.inject + ':css', function() {

        return gulp.src(path.to.dist.dev + '*.html')
            // inject vendor files
            .pipe($.inject(gulp.src(path.to.sass.dist.dev + '/vendor/**/*.css', {
                read: false
            }), {
                relative: true,
                name: 'vendor',
                // removeTags: true
                // more options : https://github.com/klei/gulp-inject#api
            }))
            // inject main files
            .pipe($.inject(gulp.src(path.to.sass.dist.dev + '/*.css', {
                read: false
            }), {
                relative: true,
                // removeTags: true
            }))
            .pipe(gulp.dest(path.to.dist.dev))
            .pipe($.browserSync.reload({
                stream: true
            }));

    });

    // inject js files
    gulp.task(config.task.inject + ':js', function() {

        return gulp.src(path.to.dist.dev + '*.html')
            // inject vendor files
            .pipe($.inject(gulp.src(path.to.js.dist.dev + '/vendor/**/*.js', {
                read: false
            }), {
                relative: true,
                name: 'vendor',
                // removeTags: true
                // more options : https://github.com/klei/gulp-inject#api
            }))
            // inject main files
            .pipe($.inject(gulp.src(path.to.js.dist.dev + '/*.js', {
                read: false
            }), {
                relative: true,
                // removeTags: true
            }))
            .pipe(gulp.dest(path.to.dist.dev))
            .pipe($.browserSync.reload({
                stream: true
            }));

    });

    // main inject task
    gulp.task(config.task.inject, function() {

        $.runSequence(
            [
                config.task.inject + ':css',
                // config.task.inject + ':js'
            ]
        )

    });

};