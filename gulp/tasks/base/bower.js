// gulp/tasks/bas/bower.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp bower'       : main task
//    'gulp bower:js'    : dest js files
//    'gulp bower:scss'  : dest scss files
//    'gulp bower:clean' : clean before dest
// ----------------------------------
// plugins:
//     main-bower-files: $.mainBowerFiles
//     gulp-flatten    : $.flatten
//     del             : $.del
//     run-sequence    : $.runSequence
// ----------------------------------
// config:
//     config.task.bower : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    // clean folders and files
    gulp.task(config.task.bower + ':clean', function() {

        return $.del([
            path.to.js.vendor + '**/*',
            path.to.sass.vendor
        ]);

    });

    // copy JS files
    gulp.task(config.task.bower + ':js', function() {

        return gulp.src($.mainBowerFiles('**/*.js'), {
                base: 'bower_components'
            })
            .pipe($.flatten()) // replace relative path for files
            .pipe(gulp.dest(path.to.js.vendor));

    });

    // copy SCSS files
    gulp.task(config.task.bower + ':scss', function() {

        return gulp.src($.mainBowerFiles('**/*.scss'), {
                base: 'bower_components'
            })
            .pipe(gulp.dest(path.to.sass.vendor));

    });

    // main bower task
    gulp.task(config.task.bower, function(cb) {

        $.runSequence(
            config.task.bower + ':clean', 
            [
                config.task.bower + ':js',
                config.task.bower + ':scss'
            ],
            cb
        )

    });

};