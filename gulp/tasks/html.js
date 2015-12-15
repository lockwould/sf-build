// gulp/tasks/nunjucks.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp html'    : main task
//    'gulp nunjucks': render nunjucks files
//    'gulp inject'  : inject css/js files
// ----------------------------------
// plugins:
//     gulp-nunjucks-render: $.nunjucksRender
//     browser-sync        : $.browserSync
//     gulp-changed        : $.changed
//     gulp-prettify       : $.prettify
//     gulp-newer          : $.newer
//     gulp-inject         : $.inject
// ----------------------------------
// config:
//     config.task.html : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    // render nunjucks files task
    gulp.task('nunjucks', function() {

        $.nunjucksRender.nunjucks.configure([path.to.html.config], {
            watch: false
        });
        return gulp.src(path.to.html.src)
            // only pass through changed files
            .pipe($.changed(config.isProd ? path.to.dist.prod : path.to.dist.dev))
            // only pass through newer source files
            .pipe($.newer(config.isProd ? path.to.dist.prod : path.to.dist.dev))
            // start render
            .pipe($.nunjucksRender())
            // beautify HTML
            .pipe($.prettify({
                indent_size: 2,
                preserve_newlines: true
                    // for more options: 
                    // https://github.com/beautify-web/js-beautify#css--html
            }))
            .pipe(config.isProd ? gulp.dest(path.to.dist.prod) : gulp.dest(path.to.dist.dev))
            .pipe($.browserSync.reload({
                stream: true
            }));

    });

    // inject css/js files task
    gulp.task('inject', function() {

        return gulp.src(path.to.dist.dev + '*.html')
            /**
             * CSS files
             */
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
            /**
             * JS files
             */
            // inject vendor files
            .pipe($.inject(gulp.src(path.to.js.dist.dev + '/vendor/**/*.js', {
                read: false
            }), {
                relative: true,
                name: 'vendor',
                // removeTags: true
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

    // main html task
    gulp.task(config.task.html, function(cb) {

        $.runSequence(
            'nunjucks',
            'inject',
            cb
        )

    });

};