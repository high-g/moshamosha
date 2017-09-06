var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var fs = require('fs');

var PATH = {
  develop: './',
  deploy: '../public/'
};

gulp.task('default', [
  'sass',
  'js',
  'watch'
]);

gulp.task('sass', function() {
  gulp.src(PATH.develop + '_sass/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest(PATH.deploy + 'css/'));
});

gulp.task('js', function() {
  
});

gulp.task('watch', function() {
  gulp.watch([PATH.develop + '_sass/**/*.scss'], ['sass']);
  gulp.watch([PATH.develop + '_sass/**/*.js'], ['js']);
});
