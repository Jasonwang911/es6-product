// import './class/lesson1.js';
import 'babel-polyfill';
// import './class/lesson5.js';
// import './mianshiText.js';
import './prototype.js';


class Test {
	constructor() {
		this.a = 'hello jason';
	}
}

let test = new Test();

document.title = test.a;