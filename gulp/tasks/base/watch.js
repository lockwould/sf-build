// gulp/tasks/base/watch.js
'use strict';

// ----------------------------------
// watch tasks: 
//    html
//    sass
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    gulp.task('watch', function() {
        gulp.watch(path.to.sass.src, [config.task.sass]);
        gulp.watch(path.to.html.watch, [config.task.html]);
    });

};