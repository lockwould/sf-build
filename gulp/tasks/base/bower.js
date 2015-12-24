// gulp/tasks/base/bower.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp bower'       : main task
//    'gulp bower:js'    : dest js files
//    'gulp bower:scss'  : dest scss files
//    'gulp bower:css'   : dest css files
//    'gulp bower:clean' : clean before dest
// ----------------------------------
// plugins:
//     main-bower-files: $.mainBowerFiles
//     gulp-flatten    : $.flatten
//     del             : $.del
//     run-sequence    : $.runSequence
//     gulp-cached     : $.cached
//     gulp-rename     : $.rename
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
            .pipe($.cached('bowerJs')) // start cache
            .pipe($.flatten()) // replace relative path for files
            .pipe(gulp.dest(path.to.js.vendor));

    });

    // copy SCSS files
    gulp.task(config.task.bower + ':scss', function() {

        return gulp.src($.mainBowerFiles('**/*.scss'), {
                base: 'bower_components'
            })
            .pipe($.cached('bowerScss')) // start cache
            .pipe(gulp.dest(path.to.sass.vendor));

    });

    // copy css files
    gulp.task(config.task.bower + ':css', function() {

        return gulp.src($.mainBowerFiles('**/*.css'), {
                base: 'bower_components'
            })
            .pipe($.cached('bowerCss')) // start cache
            .pipe($.flatten()) // replace relative path for files
            // rename files
            .pipe($.rename({
                suffix: "-css",
                extname: '.scss'
            }))
            .pipe(gulp.dest(path.to.sass.vendor));

    });

    // main bower task
    gulp.task(config.task.bower, function(cb) {

        $.runSequence(
            config.task.bower + ':clean', 
            [
                config.task.bower + ':js',
                config.task.bower + ':scss',
                config.task.bower + ':css'
            ],
            cb
        )

    });

};