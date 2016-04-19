// Define a constructor for Person objects
function Person(name, age) {
   this.name = name || "";
   this.age  = age  || "";
   this.toString = function() { return "Person {name: " + this.name + ", age: " + this.age + "}"; };
}
 
var p1 = new Person("Peter", 18);
console.log(p1);            // Person {name: "Peter", age: 18}
console.log(p1.toString()); // Person {name: Peter, age: 18}
 
// Check prototype
console.log(p1.__proto__ === Person.prototype); // true
console.log(Person.prototype);  // Person {}
console.log(Person.prototype.__proto__ === Object.prototype);  // true
console.log(Object.prototype);  // Object {}
   // The prototype chain is:
   //    Person -> Object -> null

var give_p = function () {
	// do what new does
	var o = {};
	o.__proto__ = arguments[0].prototype;
	arguments[0].apply(o, arguments[1]);
	return o;
}

var p2 = give_p(Person, ['Ram', 3]);
// Check prototype
console.log(p2.__proto__ === Person.prototype); // true
console.log(p2); // true