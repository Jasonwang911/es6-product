import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

// gulp.src('app/**/*.ejs') 表示app下所有路径的所有ejs文件
gulp.task('pages', () => {
	return gulp.src('app/**/*.ejs')
		.pipe(gulp.dest('server'))
		.pipe(gulpif(args.watch, livereload()))
})