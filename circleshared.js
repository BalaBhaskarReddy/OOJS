// Define a constructor for Circle objects
function Circle(radius) {
   this.radius = radius || 1.0;
   this.getArea = function() { return this.radius * this.radius * Math.PI; };
}
 
var circle1 = new Circle;
 
// Add more shared properties to constructor.prototype
Circle.prototype.getCircumference = function() { return 2 * this.radius * Math.PI; };
Circle.prototype.color = "green";
 
// The new properties are available to all instances,
// including existing ones
console.log(circle1.getCircumference());
console.log(circle1.color);
 
var circle2 = new Circle(1.5);
console.log(circle2.getArea());
console.log(circle2.getCircumference());
console.log(circle2.color);

// Check prototype
console.log(circle1.__proto__ === Circle.prototype);  // true