// gulpfile.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp'
//    'gulp nunjucks'
//    'gulp sass'
// ----------------------------------
// plugins:
//     gulp, run-sequence, gulp-util
//     gulp-load-plugins, gulp-load-subtasks
//     gulp-nunjucks-render, gulp-changed
//     gulp-sass, gulp-sourcemaps, browser-sync
//     gulp-prettify, gulp-newer
// ----------------------------------

// main gulp plugins
var gulp = require('gulp'),
    path = require('./gulp/paths.js'),
    config = require('./gulp/config.js'),
    sequence = require('run-sequence'),
    $ = require('gulp-load-plugins')({
        // used for all plugins type not just with gulp-*
        pattern: '*'
    });

// require all tasks : gulp-load-subtasks
$.loadSubtasks('./gulp/tasks/**/*.js', $, path, config);

// common tasks
gulp.task('default', function() {
    sequence(
        [
            config.task.nunjucks,
            config.task.sass
        ],
        config.task.browserSync,
        'watch'
    )
});