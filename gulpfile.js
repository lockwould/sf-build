// gulpfile.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp'
//    'gulp clean'
//          clean:cache
//    'gulp bower'
//          bower:clean - bower:scss - bower:js
//    'gulp sass'
//          sass:compile - sass:doc - sass:minifycss
//    'gulp nunjucks'
//          nunjucks:render - nunjucks:inject
//    'gulp serve'
//    'gulp watch'
// ----------------------------------
// plugins:
//     gulp, run-sequence, gulp-util, gulp-plumber
//     gulp-load-plugins, gulp-load-subtasks
//     gulp-nunjucks-render, gulp-changed,
//     gulp-sass, gulp-sourcemaps, browser-sync
//     gulp-prettify, gulp-newer, main-bower-files
//     gulp-flatten, del, gulp-inject, gulp-cached
//     gulp-autoprefixer, sassdoc, gulp-minify-css
//     gulp-rename, lazypipe
// ----------------------------------

// main gulp plugins
var gulp     = require('gulp'),
    path     = require('./gulp/paths.js'),
    config   = require('./gulp/config.js'),
    sequence = require('run-sequence'),
    $        = require('gulp-load-plugins')({
        // used for all plugins type not just with gulp-*
        pattern: '*'
    });

// require all tasks : gulp-load-subtasks
$.loadSubtasks('./gulp/tasks/**/*.js', $, path, config);

// common tasks
gulp.task('default', function(cb) {
    sequence(
    	// config.task.clean,
    	// config.task.clean + ':cache',
    	config.task.bower,
        [
            config.task.sass,
            // config.task.sass + ':doc',
        ],
        config.task.nunjucks,
        config.task.browserSync,
        'watch',
        cb
    )
});

// build tasks
gulp.task(config.task.build, function(cb) {
    sequence(
    	// config.task.build + ':css',
    	// config.task.build + ':js',
    	config.task.build + ':html',
        cb
    )
});