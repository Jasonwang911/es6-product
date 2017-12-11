import yargs from 'yargs';

// 区分开发环境和生产环境  命令行的参数
const args = args

	.option('production', {
	boolean: true,
	default: false,
	describe: 'min all script'
})

.option('watch', {
	boolean: true,
	default: false,
	describe: 'watch all files'
})

.option('verbose', {
	boolean: true,
	default: false,
	describe: 'log'
})

.option('sourcemaps', {
	describe: 'force the creation of sourcemaps'
})

.option('port', {
	string: true,
	default: 7999,
	describe: 'server port'
})

.argv