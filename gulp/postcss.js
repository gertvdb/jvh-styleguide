var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoPrefixer = require('autoprefixer');
var cssnano = require('cssnano');
var atImport = require("postcss-import");
var nested = require('postcss-nested');
var reporter = require("postcss-reporter");
var cssvariables = require("postcss-css-variables");
var customMedia = require('postcss-custom-media');

/**
 * Task: Post CSS
 */
gulp.task('postcss', function () {
    var plugins = [
        atImport(),
        nested,
        customMedia,
        autoPrefixer(),
        cssnano(),
        cssvariables({preserve: true}),
        reporter({clearReportedMessages: true})
    ];

    return gulp
        .src(['./src/css/styles.css'])
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dist'));
});

