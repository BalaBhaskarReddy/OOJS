// Define an object via Object Initializer

var myCircle = {
   radius: 1.1,
   getArea: function() { return this.radius * this.radius * Math.PI; }
}
 
console.log(myCircle.radius);     // 1.1
console.log(myCircle.getArea());  // 3.8013271108436504
 
// Check prototype
console.log(myCircle.__proto__ === Object.prototype);  // true
console.log(Object.prototype);
   // Object.prototype holds an object called Object,
   //   which is served as prototype for other objects.
   // Object is the only object in JavaScript without a prototype,
   //   with its __proto__ sets to null.
console.log(Object.prototype.__proto__);  // null
   // Object is always sit on top of the so-called prototype chain.
   // i.e.,  myCircle -> Object.prototype -> null
 
// The Object.prototype contains shared functions such as toString(),
//    valueOf() and hasOwnProperty().
console.log(Object.prototype.toString());  // [object Object]
console.log(Object.prototype.valueOf());
console.log(Object.prototype.hasOwnProperty('toString'));  // true
 
// The newly created objects inherits all the properties from its prototype.
// For example,
console.log(myCircle.toString());  // invoke Object.prototype.toString()
console.log(myCircle.hasOwnProperty('toString'));  // false (inherited, NOT own property)
console.log(myCircle.hasOwnProperty('radius'));    // true
 
// Iterating thru all the properties
for (var key in myCircle) {
   console.log("key is " + key + ", value is " + myCircle[key]);
}
   // key is radius, value is 1.1
   // key is getArea, value is function () { return this.radius * this.radius * Math.PI; }
   // Note that __proto__ property does not show up in for...in, i.e., it is not enumerable
 
// Define another object via new Object() constructor
var anotherCircle = new Object();
anotherCircle.radius = 2.2;
console.log(anotherCircle.__proto__ === Object.prototype);  // true

console.log(Object);
console.log(typeof Object);
console.log(Object.prototype);  // true
console.log(typeof Object.prototype);
console.log(Object.__proto__);
console.log(typeof Object.__proto__);

console.log({}.prototype);
console.log({}.__proto__);
