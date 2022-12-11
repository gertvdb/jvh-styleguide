var gulp = require('gulp');
var shell = require('gulp-shell');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var open = require('open');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

// Gulp Tasks.
require('./gulp/lintcss');
require('./gulp/postcss');

// This is used when editing template styles.
// It has to completely rebuild the style guide, note that this takes about 5s.
gulp.task('force-styleguide',
  shell.task(['"./node_modules/.bin/stylemark" -i "./src/css" -o "./styleguide" -c "./default.stylemark.yml"'])
);

// Task that reloads the browser after force-styleguide
gulp.task('reload-styleguide', async function () {
    gulp.src('./styleguide/*')
      .pipe(connect.reload());
});

// Copies the fonts folder
gulp.task('copy-fonts', function() {
  return gulp.src(['./src/fonts/**/*'], {
    base: 'src/fonts'
  }).pipe(gulp.dest('./dist/fonts/'));
});

// Copies the images folder
gulp.task('copy-images', function() {
  return gulp.src(['./src/images/**/*'], {
    base: 'src/images'
  }).pipe(gulp.dest('./dist/images/'));
});

gulp.task('clean-dist', function () {
  return gulp.src('dist', {read: false, allowEmpty: true})
      .pipe(clean());
});

gulp.task('clean-dist-fonts', function () {
  return gulp.src('dist/fonts', {read: false})
      .pipe(clean());
});

gulp.task('clean-dist-images', function () {
  return gulp.src('dist/images', {read: false})
      .pipe(clean());
});

gulp.task('javascript', function() {
  return gulp
      .src('./src/js/all/*.js')
      .pipe(concat('all.js'))
      //.pipe(uglify())
      .pipe(gulp.dest('./dist'));
});

/**
 * Task: Server
 *
 * Runs a server at http://localhost:8085/
 */
gulp.task('server', async function () {
  connect.server({
    root: './styleguide',
    port: process.env.PORT || '8085',
    livereload: true
  });

  await open('http://localhost:8085');
});


// Watches files and auto-refreshes when changes are saved
gulp.task('watch', async function () {
  gulp.watch(['./admin_theme/css/**/*.css','./src/css/**/*.css', './src/css/**/*.md'], gulp.series('lintcss', 'postcss', 'force-styleguide', 'reload-styleguide'));
  gulp.watch(['./src/fonts/**/*'], gulp.series('clean-dist-fonts', 'copy-fonts'));
  gulp.watch(['./src/images/**/*'], gulp.series('clean-dist-images', 'copy-images'));
  gulp.watch(['./src/js/all/*'], gulp.series('javascript'));
});

gulp.task('dev', gulp.series('lintcss', 'postcss', 'javascript', 'copy-images', 'copy-fonts', 'force-styleguide', 'server', 'watch'));

gulp.task('generate-styleguide', gulp.series('lintcss', 'postcss', 'copy-images', 'copy-fonts', 'force-styleguide'));

// Only compiles the sass to the dist folder
gulp.task('build', gulp.series('clean-dist', 'javascript', 'lintcss', 'postcss', 'copy-images', 'copy-fonts'));
