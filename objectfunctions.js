// Create an object via object Initializer
var myCircle = {
   radius:   5.5,
   created:  new Date(),     // an object
   getArea:  function() {    // an inline (anonymous) function
      return this.radius * this.radius * Math.PI;
   },
   toString: toString        // a named function also called toString()
}
 
function toString() {
   return "Circle {radius: " + this.radius
         + ", created: " + this.created
         + "}";
}
 
// Invoke methods via the dot operator
console.log(myCircle.getArea());   // 95.03317777109125
console.log(myCircle.toString());  // Circle {radius: 5.5, created: ...}
console.log(myCircle);             // Object {radius: 5.5, created: ...}
 
console.log(typeof myCircle.getArea);   // function (function is a special object type)
console.log(typeof myCircle.toString);  // function
console.log(typeof myCircle.created);   // object