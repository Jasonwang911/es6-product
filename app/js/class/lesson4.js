// es6中数值大的方法

{
	// 二进制在es5都是以 0b 开头  八进制已 0O开头
	console.log(0b111110111);
	console.log(0O767);
}

{
	// 判断值是否有界 Number.isFinite
	console.log('15', Number.isFinite(15));
	console.log('NaN', Number.isFinite(NaN));
	console.log('1/0', Number.isFinite(1 / 0));
	// 判断是否是数 Number.isNaN
	console.log('NaN', Number.isNaN(NaN));
	console.log('NaN0', Number.isNaN(0));
}

{
	// 判断是否是整数 Number.isInteger
	console.log('25', Number.isInteger(25));
	console.log('25.0', Number.isInteger(25.0));
	console.log('25.1', Number.isInteger(25.1));
	console.log('str', Number.isInteger('25'));
}

{
	// 判断数值是否在 -2的53次方 到 2的53次方 之间  是否安全  Number.isSafeInteger
	console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER)
	console.log(Number.isSafeInteger(10));
	console.log(Number.isSafeInteger('a'));
}

{
	// 判断带小数的整数部分并返回整数部分
	// es5 中 Math.cell...
	// es6
	console.log('4.1', Math.trunc(4.1));
}

{
	// 判断 整数 、负数 还是 0 , 会优先进项隐士转换，优先转为数字
	console.log('-5', Math.sign(-5));
	console.log('0', Math.sign(0));
	console.log('5', Math.sign(5));
	console.log('50', Math.sign('50'));
	console.log('foo', Math.sign('foo'));
}

{
	// 立方根
	console.log('-1', Math.cbrt(-1));
	console.log('8', Math.cbrt(8));
}

{
	// 三角函数、对数方法
}