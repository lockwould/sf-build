// gulp/tasks/default/scripts.js
'use strict';

// ----------------------------------
// available tasks: 
//    'gulp js' : main js task
// ----------------------------------
// plugins:
//     browserify         : $.browserify
//     vinyl-source-stream: $.vinylSourceStream
//     vinyl-buffer       : $.vinylBuffer
//     watchify           : $.watchify
//     browser-sync       : $.browserSync
//     gulp-sourcemaps    : $.sourcemaps
//     lodash.assign      : $.assign
// ----------------------------------
// config:
//     config.task.scripts : task name
// ----------------------------------

module.exports = function(gulp, $, path, config) {

    // custom browserify options
    var customOpts = {
        entries: path.to.js.src.main,
        debug: true
    };
    var opts = $.assign({}, $.watchify.args, customOpts);
    var b = $.watchify($.browserify(opts));

    // browserify task
    gulp.task(config.task.scripts + ':browserify', bundle);

    // watchify update
    b.on('update', bundle);
    
    // output build logs to terminal
    b.on('log', $.util.log);

    // browserify function
    function bundle() {
        return b.bundle()
            .on('error', config.error)
            .pipe($.vinylSourceStream('scripts.js'))
            .pipe($.vinylBuffer())
            .pipe($.sourcemaps.init({
                loadMaps: true
            }))
            .pipe($.sourcemaps.write('.'))
            .pipe(gulp.dest(path.to.js.dist.dev))
            .pipe($.browserSync.reload({
                stream: true
            }));
    }

    // main js task
    gulp.task(config.task.scripts, function(cb) {

        $.runSequence(
            config.task.scripts + ':browserify',
            cb
        )

    });

};