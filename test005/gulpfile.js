var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    packageImporter = require('node-sass-package-importer');

var paths = {
    prod: './dist/',
    dev: './src/',
    css: './dist/assets/css/',
    scss: './src/scss/**/*.scss',
    exScss: '!./src/scss/**/_*.scss'
};

gulp.task('sass_compile', () => {
    gulp.src([paths.scss, paths.exScss])
    .pipe(plumber())
    .pipe(sass({
        importer: packageImporter({
            extensions: ['.scss', '.css']
        })
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.css))
})

gulp.task('watch', () => {
    gulp.watch(paths.scss, ['sass_compile'])
})

gulp.task('default', ['sass_compile', 'watch'])