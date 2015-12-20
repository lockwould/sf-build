// gulp/tasks/sass.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp sass'     : compile scss to css
//    'gulp sass:doc' : release sass docs
// ----------------------------------
// plugins:
//     gulp-sass        : $.sass
//     browser-sync     : $.browserSync
//     gulp-changed     : $.changed
//     gulp-newer       : $.newer
//     gulp-flatten     : $.flatten
//     gulp-cached      : $.cached
//     gulp-sourcemaps  : $.sourcemaps
//     gulp-autoprefixer: $.autoprefixer
//     sassdoc          : $.sassdoc
// ----------------------------------
// config:
//     config.task.sass : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    // main sass task
    gulp.task(config.task.sass, function() {

        return gulp.src(path.to.sass.src)
            // only pass through changed files
            .pipe($.changed(
                config.isProd ? path.to.sass.dist.prod + '/**/*.css' : path.to.sass.dist.dev + '/**/*.css'))
            // only pass through newer source files
            .pipe($.newer(
                config.isProd ? path.to.sass.dist.prod + '/**/*.css' : path.to.sass.dist.dev + '/**/*.css'))
            // start cache
            .pipe($.cached('sass'))
            // prevent breaking errors
            .pipe($.plumber({
                errorHandler: config.error
            }))
            // initialize sourcemaps
            .pipe($.sourcemaps.init())
            // start compile
            .pipe($.sass({
                includePaths: [path.to.sass.foundation],
                outputStyle: 'expanded'
                    // more options
                    // https://github.com/sass/node-sass#usage-1
            }))
            // prefixing css
            .pipe($.autoprefixer())
            // writing sourcemaps
            .pipe($.sourcemaps.write('./maps'))
            // replace relative path for files
            // .pipe($.flatten())
            .pipe(gulp.dest(config.isProd ? path.to.sass.dist.prod : path.to.sass.dist.dev))
            .pipe($.browserSync.reload({
                stream: true
            }));

    });

    // release sass docs task
    gulp.task(config.task.sass + ':doc', function() {

        return gulp.src(path.to.sass.src)
            .pipe($.sassdoc({
                dest: config.isProd ? path.to.sass.dist.prod + '/sassdoc' : path.to.sass.dist.dev + '/sassdoc',
                // for more options
                // http://sassdoc.com/gulp/
            }))
            .resume();

    });

};