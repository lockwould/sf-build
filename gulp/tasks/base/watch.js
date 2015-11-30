// gulp/tasks/base/watch.js

// ----------------------------------
// watch tasks: 
//    nunjucks
// ----------------------------------

module.exports = function (gulp, $, path, config) {

	gulp.task('watch', function() {
		gulp.watch(path.to.nunjucks.src, [config.task.nunjucks]);
	})

};