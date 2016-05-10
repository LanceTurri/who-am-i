'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var debug = require('gulp-debug')
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var ext_replace = require('gulp-ext-replace');
var pngquant = require('imagemin-pngquant');
var sourcemaps = require('gulp-sourcemaps');

var isDebugEnabled = true;

gulp.task('scss', function () {
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulpif(isDebugEnabled, debug({ title: 'CSS |' })))
    .on("error", notify.onError(function (error) {
        return "File: " + error.message;
      }))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('scss'))
    .pipe(notify("SCSS task finished"));
});

gulp.task('js', function() {
  return gulp.src(['js/*.js', '!js/*.min.js', '!js/vendor/*'])
    .pipe(gulpif(isDebugEnabled, debug({ title: 'JS |' })))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(ext_replace('.min.js'))
    .pipe(sourcemaps.write('js'))
    .pipe(gulp.dest('js'))
    .pipe(notify("JS task finished"));
    ;
})

gulp.task('images', function() {
    return gulp.src('images/art/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
        }))
        .pipe(gulp.dest('images'));
});

gulp.task('watch', function () {
  gulp.watch('scss/*.scss', ['scss']);
  gulp.watch('js/*.js', ['js']);
});

gulp.task('default', ['watch']);