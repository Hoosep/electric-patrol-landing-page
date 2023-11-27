const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');

function defaultTask(cb) {
    // place code for your default task here
    cb();
}
 
gulp.task('html-minify', () => {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});
 
gulp.task('minify-css', () => {
  gulp.src('css/components/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/components'));

  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('imagemin', () => {
	return gulp.src('images/grupo_moc/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images/grupo_moc'))
});
  
exports.default = defaultTask;