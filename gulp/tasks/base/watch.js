// gulp/tasks/base/watch.js
'use strict';

// ----------------------------------
// watch tasks: 
//    nunjucks
// ----------------------------------

module.exports = function (gulp, $, path, config) {

	gulp.task('watch', function() {
		gulp.watch(path.to.nunjucks.src, [config.task.nunjucks]);
		gulp.watch(path.to.sass.src, [config.task.sass]);
	})

};