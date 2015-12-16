// gulp/tasks/base/watch.js
'use strict';

// ----------------------------------
// watch tasks: 
//    sass
//    html
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    gulp.task('watch', function() {
    	gulp.watch(['./bower_components/**', './bower.json'], [config.task.bower]);
        gulp.watch(path.to.sass.src, [config.task.sass]);
        gulp.watch(path.to.html.watch, [config.task.html]);
    });

};