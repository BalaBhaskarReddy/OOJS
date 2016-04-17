var student1 = {
   name: 'Peter',
   getName: function() { return this.name; }
}
 
console.log(student1);            // Object {name: "Peter"}
console.log(student1.getName());  // Peter
console.log(student1.hasOwnProperty('name'));  // true
 
// Use Object.create() to create a new object using student1 as the prototype object
// i.e., set __proto__ to student1
var student2 = Object.create(student1);
 
console.log(student2);            // Object {}  (No own property)
console.log(student2.__proto__);  // Object {name: "Peter"} (set prototype chain)
console.log(student2.__proto__ === student1);  // true (same reference)
console.log(student2 === student1);            // false (different reference)
console.log(student2.getName());  // Peter (inherited thru prototype chain)
console.log(student2.hasOwnProperty('name'));  // false
 
student2.name = 'Paul';
console.log(student2);            // Object {name: "Paul"}  (added own property)
console.log(student2.__proto__);  // Object {name: "Peter"} (no change)
console.log(student2.getName());  // Paul
console.log(student2.hasOwnProperty('name'));  // true

var student3 = Object.create(Object);
 
console.log(student3);            // Object {}  (No own property)
console.log(student3.__proto__);  // Object {name: "Peter"} (set prototype chain)
console.log(student3.__proto__ === Object);  // true (same reference)
console.log(student3 === {});            // false (different reference)