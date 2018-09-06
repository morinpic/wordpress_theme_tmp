var gulp = require('gulp');
// var path = require('path');
// var jade = require('gulp-jade-php');
// var config = require('./config.js');
// var webpack = require('webpack');
// var webpackConfig = require('./webpack.config.js');
$ = require('gulp-load-plugins')();

// gulp.task('jade', function() {
//   gulp.src(path.join(config.srcDir, 'views/**/*.jade'))
//     .pipe($.plumber({
//       errorHandler: $.notify.onError("Error: <%= error.message %>")
//     }))
//     .pipe($.data({
//       'config': config
//     }))
//     .pipe($.jadePhp({
//       pretty: true
//      }))
//      .pipe(gulp.dest('./'));
// });

gulp.task('sass', function() {
  gulp.src('assets/css/style.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('./'));
});

// gulp.task('js', function(cb) {
//   webpack(webpackConfig, function(err, stats) {
//     if(err) throw new $.util.PluginError('webpack', err);
//     $.util.log('[webpack]', stats.toString());
//     cb();
//   });
// });

gulp.task('watch', ['sass'], function() {
// gulp.task('watch', ['jade', 'sass', 'js'], function() {
  // $.watch( [path.join(config.srcDir, 'views/**/*.jade')], function() {
  //   gulp.start('jade');
  // });
  $.watch( ['assets/css/**/*.scss'], function() {
    gulp.start('sass');
  });
  // $.watch( [path.join(config.srcDir, 'assets/javascripts/**/*.js')], function() {
  //   gulp.start('js');
  // });
});

gulp.task('default', function() {
  var blue = '\u001b[1;34m';
  var cyan = '\u001b[1;36m';
  var reset = '\u001b[0m';
  console.log('\n\nPlease Run ' + blue + '\" npm run build \"' + reset + ' command.\n\n');
});
