for (var i = 0; i < 5; i++) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Button ' + i));
  btn.addEventListener('click', (function(i) {
    return function() { console.log(i); };
  })(i));
  document.body.appendChild(btn);
}

(function() {
	function foo(x) {
		var baz = 3;
		return function(y) {
			console.log(x + y + (++baz));
		}
	}
var moo = foo(2);
console.log(moo(1));
console.log(moo(1));
})()

var s = '5';
var a = s*1;
var b = +s;
console.log(typeof(s));
console.log(typeof(a));
console.log(typeof(b));

var foo = "Hello";
(function() {
	var bar = "World";
	alert(foo + bar);
})();
alert(foo + bar);


var foo ={n: 1};
var bar = foo;
foo.x = foo = {n: 2};

var person = new Object();
person.x = "abc";

//Object constructor
function person(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}
var person1 = new person("", "", "");

var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
console.log(foo.x);  // undefined
console.log(bar); //  Object {n: 1, x: {n:2}}

function test(){
	console.log(a);
	console.log(abc());

	var a = 1;
	function abc(){
		return 2;
	}
}

test();

console.log(x);

var x= 2;


var superHuman = {
	userPower: function() {
		console.log(this.superPower + "!");
	}
}

var banshee = Object.create(superHuman, {
		name: {value: "XXXX"},
		superPower: {value: "XXXX"}
	});


function sum(x){
	if (arguments.length == 2) {
		return arguments[0] + arguments[1];
	} else {
		return function(y) {return x + y }
	}
}