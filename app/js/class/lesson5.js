// 数组的方法

{
	// Array.of 数据变量转换为数据类型
	let arr = Array.of(2, 4, 7, 9, 11);
	console.log('arr', arr);

	let empty = Array.of();
	console.log(empty)
}

{
	// Array.from  把伪数组、集合转换为真数组
	let p = document.querySelectorAll('p');
	let pArr = Array.from(p);
	pArr.forEach((item) => {
		console.log(item)
	})
}