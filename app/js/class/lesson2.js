// es6的正则

{
	// es5中的构造函数
	let regex = new RegExp('xyz', 'i');
	let regex2 = new RegExp(/xyz/i);

	console.log(regex.test('xyz123'),regex2.test('xyz123'));
}


{
	// es6的正则  第二个修饰符会覆盖前面的正则表达式所用到的修饰符   
	// flags 获取正则中的修饰符
	// let regex = new RegExp(/xyz/ig, 'i');
	// console.log(regex.flags)
}

{
	// y 修饰符
	// let s = 'bbb_bb_b';
	// let a1 = /b+/g;
	// let a2 = /b+/y;

	// console.log(`one:${a1.exec(s)}${a2.exec(s)}`);
	// console.log(`two:${a1.exec(s)}${a2.exec(s)}`);

	// console.log(a1.sticky, a2.sticky);
}

{
	// 正则中 . 并不能匹配所有字符（需要小鱼两个字节的字符) , u 修饰符用来出来大于两个字节的字符
	console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));
	console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));
	console.log(/\u{61}/.test('a'));
	console.log(/\u{61}/u.test('a'));

	console.log(`\u{20BB7}`)

	let s = '𠮷';
	console.log('u', /^.$/.test(s));
	console.log('u-2', /^.$/u.test(s));

	console.log('test',/𠮷{2}/.test('𠮷𠮷'));
	console.log('test-2',/𠮷{2}/u.test('𠮷𠮷'));
}



