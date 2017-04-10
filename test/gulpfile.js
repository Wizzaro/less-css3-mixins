var gulp = require('gulp');
var gulpLess = require('gulp-less');

gulp.task('default', function() {
    gulp.src('./test.less')
        .pipe(gulpLess().on('error', console.error.bind(console)))
        .pipe(gulp.dest('./'));
});
