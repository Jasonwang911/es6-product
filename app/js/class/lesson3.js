// 字符串的新增
import 'babel-polyfill';

// 其中有一些es7的草案，需要安装 babel-polyfill 
{
	console.log('a', '\u0061');

	console.log('s', '\u20BB7');
	// ES6中处理字符编码大于 0XFFF 用{}把编码包起来
	console.log('s', '\u{20BB7}')
}

{
	let s = '𠮷';
	// es5中
	console.log('01', s.charAt(0));
	console.log('02', s.charAt(1));
	console.log('11', s.charCodeAt(0));
	console.log('12', s.charCodeAt(1));
	// es6中 新增  codePointAt 获取字符的编码，可以获取多个字节
	let s1 = '𠮷a';
	console.log('length', s1.length);
	console.log('code0', s1.codePointAt(0));
	console.log('code0', s1.codePointAt(0).toString(16));
	console.log('code0', s1.codePointAt(1));
	console.log('code0', s1.codePointAt(2));
}

{
	// es6 通过字符编码获取字符
	console.log(String.fromCharCode('0x20bb7'));
	// es7
	console.log(String.fromCodePoint('0x20bb7'));
}

{
	// es5 
	let str = '\u{20bb7}abc';
	for (let i = 0; i < str.length; i++) {
		console.log('es5', str[i]);
	}
	// es6
	for (let code of str) {
		console.log('es6', code);
	}
}

{
	// 判断字符串师傅包含某个字符， 或者是否是已某个字符做起始
	let str = 'string';
	console.log('inculdes', str.indexOf('c'));
	console.log('start', str.startsWith('str'));
	console.log('end', str.endsWith('ng'));
}

{
	let str = 'abc';
	// 字符串的复制功能
	console.log(str.repeat(2));
}

{
	// 模板字符串
	let name = 'list';
	let inf = 'hello world';

	let m = `I am ${name},${inf}。`
	console.log(m);
}

{
	// es7草案  补白 padStart(需满足的长度, 不够的话向前补什么)
	// console.log('1', padStart(2, '0'));
	// console.log('1', padEnd(2, '0'));
}

{
	// 标签模板  
	// 防止xss攻击， 多语言的时候通过不同的return来输出不同的内容
	let user = {
		name: 'list',
		inf: 'hello world'
	}
	abc `I am ${user.name},${user.inf}`;

	// function abc(s, v1, v2) {
	// 	console.log(s, v1, v2);
	// }
	// ['I am',',','']  'list' 'hello world'
	console.log(abc `I am ${user.name},${user.inf}`)

	function abc(s, v1, v2) {
		console.log(s, v1, v2);
		return s + v1 + v2;
	}
	//I am ,,,listhello world
}

{
	// String.raw  转义\ 使转义不生效
	console.log(String.raw `Hi\n${1+2}`)
	console.log(`Hi\n${1+2}`)
}