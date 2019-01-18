
// var sass = require('gulp-sass');

//gulp.task('styles', function() {
//  // gulp.src('scss/**/*.scss')
//  gulp.src('scss/*.scss')
//    .pipe(scss().on('error', scss.logError))
//    .pipe(gulp.dest('./css/'))
//});

////Watch task
//gulp.task('default',function() {
//  // gulp.watch('scss/**/*.scss',['styles']);
//  gulp.watch('scss/*.scss',['styles']);
//});





// 'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

//      //compile
//      gulp.task('sass', function() {
//        gulp.src('scss/custom.scss')
//          .pipe(prefix({
//            browsers: ['last 2 versions'],
//            cascade: true
//          })
//            .pipe(sass().on('error', sass.logError))
//            .pipe(gulp.dest('css'));
//          });
//      
//        //compile and watch
//        gulp.task('sass:watch', function() {
//          gulp.watch('scss/*.scss', ['sass']);
//        });




gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
  // .pipe(sass().on('error', sass.logError))
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  // gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
  // gulp.watch('scss/custom.scss', ['sass']);
  // gulp.watch('scss/custom.scss', ['sass']);
});
