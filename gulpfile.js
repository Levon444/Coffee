var gulp = require ('gulp');
var browserSync = require('browser-sync');
var cssmin = require('gulp-cssmin');
var jsmin = require('gulp-jsmin');
var reload = browserSync.reload;

var paths = {
    html:['index.html'],
    css:['source/style/source.css'],
    script:['source/scripts/source.js']
}
gulp.task('mincss', function(){
    return gulp.src(paths.css)
      .pipe(cssmin())
      .pipe(gulp.dest('dest/main'))
      .pipe(reload({stream:true}));
  });
  gulp.task('scripts', function(){
    return gulp.src(paths.script)
      .pipe(jsmin())
      .pipe(gulp.dest('dest/main'))
      .pipe(reload({stream:true}));
  });
  gulp.task('html', function(){
    gulp.src(paths.html)
    .pipe(reload({stream:true}));
  });
gulp.task('browserSync', function() {
    browserSync({
      server: {
        baseDir: "./"
      },
      port: 8080,
      open: true,
      notify: false
    });
  });
  gulp.task('watcher',function(){
    gulp.watch(paths.css, gulp.series('mincss'));
    gulp.watch(paths.script, gulp.series('scripts'));
    gulp.watch(paths.html, gulp.series('html'));
  });
  gulp.task('default' , gulp.parallel('browserSync', 'watcher'));