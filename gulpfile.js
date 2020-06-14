const gulp = require('gulp');
const scss = require('gulp-sass');
const { func } = require('assert-plus');

gulp.task('scss', function(){
    return gulp.src('*.scss')
    .pipe(scss())
    .pipe(gulp.dest('css'));
})

const minify = require('gulp-minify-css');
const rename = require('gulp-rename');

gulp.task('minify',function(){
    return gulp.src('*.scss')
    .pipe(scss())
    .pipe(gulp.dest('css'))
    .pipe(minify())
    .pipe(rename('index.min.css'))
    .pipe(gulp.dest('css'));
})

gulp.task('watch', function(){
    gulp.watch('*.{scss,sass }', ['scss']);
})
