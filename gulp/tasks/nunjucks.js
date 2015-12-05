// gulp/tasks/nunjucks.js

// ----------------------------------
// available tasks: 
//    'gulp nunjucks'
// ----------------------------------
// plugins:
//     gulp-nunjucks-render : $.nunjucks
// ----------------------------------
// config:
//     config.task.nunjucks : task name
// ----------------------------------

module.exports = function (gulp, $, path, config) {

	gulp.task(config.task.nunjucks, function() {
	  $.nunjucksRender.nunjucks.configure([path.to.nunjucks.config], {watch: false});
	  return gulp.src(path.to.nunjucks.src)
	  .pipe($.nunjucksRender())
	  .pipe(config.isProd ? gulp.dest(path.to.dist.prod) : gulp.dest(path.to.dist.dev))
	  .pipe($.browserSync.reload({
	  	stream: true
	  }));
	});

};