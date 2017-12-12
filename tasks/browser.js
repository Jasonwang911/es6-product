import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

// 监听app中的文件发生变化从而编译到public文件下
gulp.task('browser', (cb) => {
	if (!args.watch) return cb();

	// 监听app下的js，发还变化启动scripts脚本
	gulp.watch('app/**/*.js', ['scripts']);
	// 模板
	gulp.watch('app/**/*.ejs', ['pages']);
	// css
	gulp.watch('app/**/*.css', ['css']);
});