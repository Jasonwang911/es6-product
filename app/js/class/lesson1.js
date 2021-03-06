{
	let a,b,c,rest;

	[a,b,c=3] = [1,2];

	console.log(a,b,c)
}

// {
// 	let a,b,rest;

// 	[a,b,...rest] = [1,2,3,4,5,6];

// 	console.log(a,b,rest);   // 1 2  [3, 4, 5, 6]
// }

// {
// 	let a,b;

// 	({a,b} ={a:1,b:2})

// 	console.log(a,b);
// }

{
	// 变量的交换
	let a = 1;
	let b = 2;
	[a,b] = [b,a];
	console.log(a,b);
}

{
	// 结构赋值在函数中的应用
	function f() {
		return [1,2];
	}

	let a,b;
	[a,b] = f();
	console.log(a,b);
}

{
	function f() {
		return [1,2,3,4,5];
	}
	let a,b,c;
	[a,,,b] = f();
	console.log(`aaa=>${a},${b}`);
}

{
	// 对象的结构赋值
	let o = {p: 42, q: true};
	let {p,q} = o;
	console.log(p,q)
}

{
	// 对象结构赋值的默认值的覆盖
	let {a=10,b=5} = {a:3};
	console.log(a,b)
}

{
	// 嵌套对象的结构赋值
	let metaData = {
		title: 'abc',
		test: [{
			title: 'test',
			desc: 'description'
		}]
	}

	let {title: esTitle, test: [{
		title: cnTitle
	}]} = metaData;

	console.log(esTitle,cnTitle);
}

