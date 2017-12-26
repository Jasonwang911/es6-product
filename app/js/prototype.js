// 关于js中的继承
// 继承主要是依靠 原型链 来实现。
// 来源：http://www.jb51.net/article/81766.htm
// 原型链： 

// 1.原型链：
// 基本思想：利用原型让一个引用类型继承另外一个引用类型的属性和方法。

// 构造函数，原型，实例之间的关系：每个构造函数都有一个原型对象，原型对象包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。


function Num(input) {
	let reg = /^\d+$/g;
	console.log('aaaa==>', reg.test(input))
	if (!reg.test(input)) return false;
	if (input < 0) return false;
	if (input.search('/./g') == -1) {
		alert(1);
		// 无小数点
		test(input);
	} else {
		alert('bbb')
		// 有小数点
		let point = input.split('.')[1];
		if (Number(point) != 0) {
			alert(2);
			return false;
		} else {
			alert(3);
			test(input);
		}
	}

	function test(i) {
		if (i < 0) {
			alert(4);
			return false;
		} else {
			alert(5);
			return true;
		}
	}
}

console.log('正整数', Num(25736));

// 原型链实现继承例子：

// function SuperType() {
// 	this.property = true;
// }
// SuperType.prototype.getSuperValue = function() {
// 	return this.property;
// }

// function subType() {
// 	this.property = false;
// }
// //继承了SuperType
// SubType.prototype = new SuperType();
// SubType.prototype.getSubValue = function() {
// 	return this.property;
// }
// var instance = new SubType();
// console.log(instance.getSuperValue()); //true


// 2. 借用构造函数

// 基本思想： 在子类型构造函数的内部调用超类构造函数， 通过使用call() 和apply() 方法可以在新创建的对象上执行构造函数。

// function SuperType() {
// 	this.colors = ["red", "blue", "green"];
// }

// function SubType() {
// 	SuperType.call(this, arguments); //继承了SuperType
// }
// var instance1 = new SubType();
// instance1.colors.push("black");
// console.log(instance1.colors); //"red","blue","green","black"
// var instance2 = new SubType();
// console.log(instance2.colors); //"red","blue","green"

// 3. 组合继承

// 基本思想： 将原型链和借用构造函数的技术组合在一块， 从而发挥两者之长的一种继承模式

// function SuperType(name) {
// 	this.name = name;
// 	this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName = function() {
// 	console.log(this.name);
// }

// function SubType(name, age) {
// 	SuperType.call(this, name); //继承属性
// 	this.age = age;
// }
// //继承方法
// SubType.prototype = new SuperType();
// Subtype.prototype.constructor = Subtype;
// Subtype.prototype.sayAge = function() {
// 	console.log(this.age);
// }
// var instance1 = new SubType("EvanChen", 18);
// instance1.colors.push("black");
// consol.log(instance1.colors); //"red","blue","green","black"
// instance1.sayName(); //"EvanChen"
// instance1.sayAge(); //18
// var instance2 = new SubType("EvanChen666", 20);
// console.log(instance2.colors); //"red","blue","green"
// instance2.sayName(); //"EvanChen666"
// instance2.sayAge(); //20

// 4.原型式继承

// 基本想法：借助原型可以基于已有的对象创建新对象，同时还不必须因此创建自定义的类型。

// ES5 中的写法
function Person(name = 'jason', age = '18') {
	this.name = name;
	this.age = age;
}

Person.prototype.sayName = function() {
	return this.name;
}

Person.prototype.sayAge = function() {
	return this.age;
}

var p1 = new Person('Zinedine', '28');
var name1 = p1.sayName();
console.log(name1);
var age1 = p1.sayAge();
console.log(age1);

// Worker 继承了 Person 的 name 和 age
function Worker(name = 'jason', age = '18', job = '捡破烂的') {
	Person.call(this, name, age);
	this.job = job;
}

Worker.prototype = new Person();
Worker.prototype.constructor = Worker;

Worker.prototype.sayJob = function() {
	return this.job;
}

var w1 = new Worker('xiaoming', '50', '掏大粪的');
var job1 = w1.sayJob();
console.log(job1);


// es6 的写法
class Animal {
	constructor(kind = '猫猫', speak = '瞄') {
		this.kind = kind;
		this.speak = speak;
	}

	saySpeak() {
		return this.speak;
	}
}

const a1 = new Animal('羊', '绵');
const say1 = a1.saySpeak();
console.log(say1);

// 继承
class Dog extends Animal {
	constructor(kind, speak = '汪汪') {
		super(kind);
		this.speak = speak;
	}

	saySpeak() {
		return this.speak;
	}

}

const d1 = new Dog('狗狗');
console.log(d1.saySpeak());