// gulp/tasks/base/serve.js

// ----------------------------------
// available tasks: 
//    'gulp serve'
// ----------------------------------
// plugins:
//     browser-sync : $.browserSync
// ----------------------------------
// config:
//     config.task.browserSync : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

	gulp.task(config.task.browserSync, function() {
		$.browserSync({
			// server: {
			// 	baseDir: config.isProd ? path.to.dist.prod : path.to.dist.dev
			// },
			proxy: config.isProd ? 
			config.serve.url +'/'+ path.to.prod : config.serve.url +'/'+ path.to.dev,

			browser: config.serve.browser
		})
	})

}