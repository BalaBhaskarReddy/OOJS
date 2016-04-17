// Define a constructor for Circle objects, which takes an argument radius.
// The Circle objects have properties radius and dateCreated, getArea() and toString().
function Circle(radius) {
  this.radius = radius || 1;      // Default is 1, if radius evaluates to false (e.g., undefined)
  this.dateCreated = new Date();  // Assign an object
  this.getArea = function() {     // Assign a function object via an inline function
     return this.radius * this.radius * Math.PI;
  };
  this.toString = toString; // Assign a function object via a named function
}
 
// Define the function toString()
function toString() {
  return "Circle {radius: " + this.radius
        + ", dateCreated: " + this.dateCreated + "}";
}
 
// Creating Circle objects via new and constructor
var circle1 = new Circle(1.5);
console.log(circle1);      // Circle {radius: 1.5, dateCreated: ...}
var circle2 = new Circle();
console.log(circle2);      // Circle {radius: 1, dateCreated: ...}
var circle3 = new Circle;  // parentheses optional if there is no argument
console.log(circle3);      // Circle {radius: 1, dateCreated: ...}
 
// Invoke methods using dot operator
console.log(circle1.getArea());  // 7.0685834705770345
console.log(circle2.getArea());  // 3.141592653589793
 
// Check type
console.log(typeof circle1);            // object
console.log(circle1 instanceof Object); // true
console.log(circle1 instanceof Circle); // true
console.log(circle1 instanceof Array);  // false
 
// Every constructor function object has a special property called .prototype
//   which holds an object to be used as a prototyping object.
console.log(Circle.prototype);          // Circle {}
 
// Check __proto__ internal property
console.log(circle1.__proto__ === Circle.prototype);          // true
console.log(Circle.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__);                      // null
   // The prototype chain is:
   // circle1 -> Circle.prototype -> Object.prototype -> null
