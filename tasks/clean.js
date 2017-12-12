import gulp from 'gulp';
import del from 'del';
import args from './util/args';

// 下面操作用于清空编译前文件  server中的模板文件 便于再次写入
gulp.task('clean', () => {
	// 清空
	return del(['server/public', 'server/views'])
})