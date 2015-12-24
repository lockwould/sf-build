// gulp/tasks/build/css.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp build:css' : main css task
// ----------------------------------
// plugins:
//     gulp-sourcemaps: $.sourcemaps
//     gulp-minify-css: $.minifyCss
//     gulp-rename    : $.rename
//     gulp-plumber   : $.plumber
//     gulp-concat    : $.concat
//     gulp-uncss     : $.uncss
// ----------------------------------
// config:
//     config.task.build : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    gulp.task(config.task.build + ':css', function() {

        return gulp.src([
                path.to.sass.dist.dev + '/vendor/*.css',
                path.to.sass.dist.dev + '/*.css',
                '!' + path.to.sass.dist.dev + '/**/_*{,/**}/'
            ])
            // prevent breaking errors
            .pipe($.plumber({
                errorHandler: config.error
            }))
            // remove unused css selectors
            .pipe($.uncss({
                html: [path.to.dist.dev + '*.html'],
                // more options
                // https://github.com/giakki/uncss#within-nodejs
            }))
            // .pipe($.stripCssComments())
            // initialize sourcemaps
            .pipe($.sourcemaps.init())
            // concat all css files
            .pipe($.concat('style.css'))
            // dest unminified file
            // .pipe(gulp.dest(path.to.sass.dist.prod))
            // minify
            // .pipe($.minifyCss({keepSpecialComments : 1}))
            // // rename files
            // .pipe($.rename({
            //     suffix: '.min'
            // }))
            // writing sourcemaps
            .pipe($.sourcemaps.write('.'))
            .pipe(gulp.dest(path.to.sass.dist.prod));

    });

};