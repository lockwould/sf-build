// gulp/tasks/base/watch.js
'use strict';

// ----------------------------------
// watch tasks: 
//    nunjucks
//    sass
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    gulp.task('watch', function() {
        gulp.watch(path.to.nunjucks.watch, [config.task.nunjucks]);
        gulp.watch(path.to.sass.src, [config.task.sass]);
    });

};