// gulpfile.js

// ----------------------------------
// available tasks: 
//    'gulp'
//    'gulp nunjucks'
// ----------------------------------
// plugins:
//     gulp, run-sequence, gulp-util
//     gulp-load-plugins, gulp-load-subtasks
//     gulp-nunjucks-render
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
gulp.task('default', function() {
    sequence (
        config.task.nunjucks,
        config.task.browserSync,
        'watch'
    )
})