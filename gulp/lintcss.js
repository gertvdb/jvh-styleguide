var gulp = require('gulp');
var stylelint = require('gulp-stylelint');

/**
 * Task: Lint CSS
 */
gulp.task('lintcss', function lintCssTask() {
    return gulp
        .src(['src/css/**/*.css', '!src/css/vendor/**/*.css'])
        .pipe(stylelint({
            failAfterError: false,
            reporters: [
                {formatter: 'string', console: true}
            ]
        }));
});
