// gulp/tasks/build/html.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp build:html'        : main html task
//    'gulp build:html:copy'   : copy & prettify html
//    'gulp build:html:inject' : inject minified css/js
// ----------------------------------
// plugins:
//     gulp-changed : $.changed
//     gulp-prettify: $.prettify
//     gulp-newer   : $.newer
//     gulp-inject  : $.inject
//     gulp-plumber : $.plumber
// ----------------------------------
// config:
//     config.task.build : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    // copy & prettify html files task
    gulp.task(config.task.build + ':html:copy', function() {

        return gulp.src(path.to.dist.dev + '*.html')
            // only pass through changed files
            .pipe($.changed(path.to.dist.prod + '*.html'))
            // only pass through newer source files
            .pipe($.newer(path.to.dist.prod + '*.html'))
            // prevent breaking errors
            .pipe($.plumber({
                errorHandler: config.error
            }))
            // beautify HTML
            .pipe($.prettify({
                indent_size: 2,
                preserve_newlines: true
                    // for more options: 
                    // https://github.com/beautify-web/js-beautify#css--html
            }))
            .pipe(gulp.dest(path.to.dist.prod));

    });

    // inject minified css/js files task
    gulp.task(config.task.build + ':html:inject', function() {

        return gulp.src(path.to.dist.prod + '*.html')
            // prevent breaking errors
            .pipe($.plumber({
                errorHandler: config.error
            }))
            // inject main css file
            .pipe($.inject(gulp.src(
                path.to.sass.dist.prod + '/*.css', {
                    read: false
                }), {
                relative: true,
                name: 'build',
                starttag: '<!-- build:css -->',
                endtag: '<!-- endbuild -->',
                removeTags: true
                    // more options : https://github.com/klei/gulp-inject#api
            }))
            // inject main js file
            .pipe($.inject(gulp.src(
                path.to.js.dist.prod + '/*.js', {
                    read: false
                }), {
                relative: true,
                name: 'build',
                starttag: '<!-- build:js -->',
                endtag: '<!-- endbuild -->',
                removeTags: true
            }))
            .pipe(gulp.dest(path.to.dist.prod));

    });

    // main html task
    gulp.task(config.task.build + ':html', function(cb) {

        $.runSequence(
            config.task.build + ':html:copy',
            config.task.build + ':html:inject',
            cb
        )

    });

};