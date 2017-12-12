import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import {
	log,
	colors
} from 'gulp-util';
import args from './util/args';

// 创建gulp命令
gulp.task('scripts', () => {
	return gulp.src(['app/js/index.js'])
		// 处理异常
		.pipe(plumber({
			errorHandle: function() {

			}
		}))
		// 编译
		.pipe(named())
		.pipe(gulpWebpack({
			module: {
				loaders: [{
					test: /\.js$/,
					loader: 'babel-loader'
				}]
			}
		}), null, (err, stats) => {
			log(`Finished'${colors.cyan('scripts')}'`, stats.toString({
				chunks: false
			}))
		})
		// 编译后文件路径存放
		.pipe(gulp.dest('server/public/js'))
		// 重命名
		.pipe(rename({
			basename: 'cp',
			extname: '.min.js'
		}))
		// 压缩
		.pipe(uglify({
			compress: {
				properties: false
			},
			output: {
				'quote_keys': true
			}
		}))
		// 存储
		.pipe(gulp.dest('server/public/js'))
		// 监听文件并自动刷新
		.pipe(gulpif(args.watch, livereload()))
})