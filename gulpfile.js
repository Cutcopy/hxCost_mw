'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('thump', function buildHTML() {
  return gulp.src('./pug/**/*.pug')
  .pipe(pug({
    // Your options in here.
  }))
  return gulp.src('./sass/**/*.sass')
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest('./css'));
  watch('./sass/**/*.sass', ['sass']);
});
