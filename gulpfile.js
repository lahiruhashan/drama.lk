
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var prefix      = require('gulp-autoprefixer');

gulp.task('css', function(){
  return gulp.src('app/css/**/*.css')
    .pipe(gulp.dest('app/css'))
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('watch', ['browserSync', 'css'], function(){
  gulp.watch('app/css/**/*.css',['css']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});
