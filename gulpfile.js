var gulp         = require('gulp');
    clean        = require('gulp-clean');
    plumber      = require('gulp-plumber');
    rename       = require('gulp-rename');
    inject       = require('gulp-inject');
    browserSync  = require('browser-sync').create();
    sass         = require('gulp-sass');
    flatten      = require('gulp-flatten');
    uncss        = require('gulp-uncss');
    autoprefixer = require('gulp-autoprefixer');
    cleanCSS     = require('gulp-clean-css');
    csscomb      = require('gulp-csscomb');
    concat       = require('gulp-concat');
    uglify       = require('gulp-uglify');
    coffee       = require('gulp-coffee');
    del          = require('del');
    wiredep      = require('wiredep').stream;
    inject       = require('gulp-inject');
    reload       = browserSync.reload;
    useref       = require('gulp-useref');
    nunjucks     = require('gulp-nunjucks');
    nunjucksRender = require('gulp-nunjucks-render');
    filter = require('gulp-filter');

var src = {
    sass    : 'src/styles/main.sass',
    jesass  : 'src/styles/**/*.sass',
    css     : 'dist/css/',
    coffee  : 'scripts/**/*.coffee',
    js      : 'src/scripts/**/*.js',
    templ   : 'src/**/*.html',
    html    : 'dist/*.html'
};



/* Scripts */
gulp.task('scripts', function() {
    return gulp.src(src.js)
        .pipe(plumber())
        .pipe(coffee({bare: true}))
        .pipe(concat('plugins.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(reload({stream: true}))
});

/* Styles: Main right now because i'm using bourbon straight,
there's scss, so it's not watching for scss, jsut need to save
main.sass to update.. will figure out solution later
 */
gulp.task('styles', function() {
    return gulp.src(src.sass)
        .pipe(plumber())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(csscomb())
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(src.css))
        .pipe(reload({stream: true}))
});

var paths = {
     csspath: ['dist/css/*.css'],
     jspath: [ 'dist/js/*.js']

      };

 gulp.task('inject', function(){
     return gulp.src('dist/index.html')
         .pipe(inject(
             gulp.src(paths.jspath,
                 {read: false}), {relative: true}))
         .pipe(gulp.dest('dist/'))
         .pipe(inject(
             gulp.src(paths.csspath,
             {read: false}), {relative: true}))
         .pipe(gulp.dest('dist/'));
 });


gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('src/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['src/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('dist'))

/* Inject vendor assets */
gulp.task('bower', function() {
    gulp.src('./')
        .pipe(wiredep())
        .pipe(gulp.dest('./'))
});

});

/* Serve */
gulp.task('serve', ['scripts', 'styles', 'nunjucks', 'inject'], function() {
    browserSync.init({
        server: './dist',
        port: 3000
    });
    gulp.watch(src.jesass, ['styles']);
    gulp.watch(src.templ, ['nunjucks']);
    gulp.watch(src.html, ['inject']);
    gulp.watch(src.html).on('change', reload)
});

/* Clean up */
gulp.task('doomtodist', function() {
    return del([
        'dist/'
    ]);
});


gulp.task('travis', ['scripts', 'styles', 'bower'])
gulp.task('default', ['serve']);