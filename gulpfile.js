var gulp = require('gulp');
var sass = require('gulp-sass');

var dirLess = 'assets/sass/*.scss';
var dirCss  = 'public/css';

gulp.task('styles', function () {
	gulp
		.src(dirLess)
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest(dirCss));
})

gulp.task('default', ['styles']);