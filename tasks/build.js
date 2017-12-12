import gulp from 'gulp';
// 处理脚本启动顺序的问题
import gulpSequence from 'gulp-sequence';

// 注意匹配顺序
gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'serve']))