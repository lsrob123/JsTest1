var gulp = require('gulp');
var Server = require('karma').Server;
var karma = require('gulp-karma');

gulp.task('test', function () {
    return gulp.src('./fake')
      .pipe(karma({
          configFile: 'karma.conf.js',
          action: 'run'
      }))
      .on('error', function (err) {
          // Make sure failed tests cause gulp to exit non-zero
          console.log(err);
          this.emit('end'); //instead of erroring the stream, end it
      });
});

gulp.task('autotest', function () {
    return gulp.watch(['www/js/**/*.js', 'test/spec/*.js'], ['test']);
});
