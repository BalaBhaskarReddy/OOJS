// Construct an Array object invoking the constructor with new operator
var weekdays = new Array("sun", "mon", "tue", "wed", "thu", "fri", "sat");
console.log(weekdays.length);  // 7
console.log(weekdays);         // ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
console.log(typeof weekdays);  // object
console.log(weekdays instanceof Array);   // true
//console.log(weekdays instanceof array); // error
 
// Create an array via Array Initializer
var a = [0, 'b', 'c'];
console.log(typeof a);           // object
console.log(a instanceof Array); // true

// An Associative Array is a Generic Object, not an Array Object
// For an introduction to arrays, read the "Associative Arrays" section.
// JavaScript does not really support associative array, 
// but allow you to add properties to an object, using the associative array syntax and index operator. In other words,
var student = {name: 'peter'};
student['age'] = 21;           // or student.age = 21
console.log(student['age']);   // or student.age
 
console.log(student.length);           // undefined (It is an Object, not Array)
console.log(student instanceof Array); // false


// Using an Array Object for Associative Array
// In JavaScript, we usually create an associative array using a generic object (via the Object Initializer). 
// You can also create an associative array via Array constructor. For examples,
// Construct an array
var aStudent = new Array();
 
// Add item with string key - need to quote the string
aStudent['name']   = 'Peter';
aStudent['id']     = 12345;
aStudent['gender'] = 'male';
aStudent.push('first');
aStudent.push('second');
aStudent[9] = 'tenth';
 
for (key in aStudent) {
   console.log(key + ": " + aStudent[key]);
}

   // 0: first
   // 1: second
   // 9: tenth
   // name: peter
   // id: 12345
   // gender: male
 
console.log(aStudent.length);           // Get 10!!!
console.log(aStudent instanceof Array); // true
console.log(typeof aStudent);           // object