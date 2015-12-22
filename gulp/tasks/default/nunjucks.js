// gulp/tasks/default/nunjucks.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp nunjucks'       : main task
//    'gulp nunjucks:render': render nunjucks files
//    'gulp nunjucks:inject': inject css/js files
// ----------------------------------
// plugins:
//     gulp-nunjucks-render: $.nunjucksRender
//     browser-sync        : $.browserSync
//     gulp-changed        : $.changed
//     gulp-newer          : $.newer
//     gulp-inject         : $.inject
//     gulp-plumber        : $.plumber
// ----------------------------------
// config:
//     config.task.nunjucks : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    // render nunjucks files task
    gulp.task(config.task.nunjucks + ':render', function() {

        $.nunjucksRender.nunjucks.configure([path.to.nunjucks.config], {
            watch: false
        });
        return gulp.src(path.to.nunjucks.src)
            // only pass through changed files
            .pipe($.changed(path.to.dist.dev + '*.html'))
            // only pass through newer source files
            .pipe($.newer(path.to.dist.dev + '*.html'))
            // prevent breaking errors
            .pipe($.plumber({
                errorHandler: config.error
            }))
            // start render
            .pipe($.nunjucksRender())
            .pipe(gulp.dest(path.to.dist.dev))
            .pipe($.browserSync.reload({
                stream: true
            }));

    });

    // inject css/js files task
    gulp.task(config.task.nunjucks + ':inject', function() {

        return gulp.src(path.to.dist.dev + '*.html')
            // prevent breaking errors
            .pipe($.plumber({
                errorHandler: config.error
            }))
            /**
             * CSS files
             */
            // inject vendor files
            .pipe($.inject(gulp.src(
                path.to.sass.dist.dev + '/vendor/**/*.css', {
                    read: false
                }), {
                relative: true,
                name: 'vendor',
                // removeTags: true
                // more options : https://github.com/klei/gulp-inject#api
            }))
            // inject main files
            .pipe($.inject(gulp.src(
                path.to.sass.dist.dev + '/*.css', {
                    read: false
                }), {
                relative: true,
                // removeTags: true
            }))
            /**
             * JS files
             */
            // inject vendor files
            .pipe($.inject(gulp.src(
                path.to.js.dist.dev + '/vendor/**/*.js', {
                    read: false
                }), {
                relative: true,
                name: 'vendor',
                // removeTags: true
            }))
            // inject main files
            .pipe($.inject(gulp.src(
                path.to.js.dist.dev + '/*.js', {
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

    // main nunjucks task
    gulp.task(config.task.nunjucks, function(cb) {

        $.runSequence(
            config.task.nunjucks + ':render',
            config.task.nunjucks + ':inject',
            cb
        )

    });

};