import gulp from 'gulp';
import gulpif from 'gulp-if';
// 启动服务器的包
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve', (cb) => {
	if (!args.watch) return cb();

	var server = liveserver.new(['--harmony', 'server/bin/www']);
	server.start();

	// 服务器发生改变自动监听    
	gulp.watch(['server/public/**/*.js', 'server/views/**/*.js'], function(file) {
		server.notify.apply(server, [file]);
	})

	// 监听需要重启服务的文件
	gulp.watch(['server/routes/**/*.js', 'server/app.js'], function() {
		server.start.bind(server)()
	});
})