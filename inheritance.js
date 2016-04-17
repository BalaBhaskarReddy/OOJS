// Constructor for Person objects
function Person(name, age) {
   this.name = name || "";
   this.age  = age || "";
}
      // By default, Person.prototype = Person
      // Person.prototype.__proto__ = Object.prototype
      // The prototype chain is: Person -> Object -> null
 
// Constructor for Student objects, which inherit from Person
function Student(name, age, school) {
   Person.call(this, name, age);  // Call Person function with this and arguments
   this.school = school || "";
}
//Student.prototype = Object.create(Person.prototype)
Student.prototype.__proto__ = Person.prototype
      // Set the prototype chain to a Person object
      // The prototype chain is: Student -> Person -> Object -> null
 
// Constructor for UndergraduateStudent objects, which inherit from Student
function UndergraduateStudent(name, age, school, year) {
   Student.call(this, name, age, school);  // Call Student function with this and arguments
   this.year = year || "";
}
UndergraduateStudent.prototype = Object.create(Student.prototype)
      // Set the prototype chain to a Student object
      // The prototype chain is: UndergraduateStudent -> Student -> Person -> Object -> null
 
var peter = new UndergraduateStudent('peter', 21, 'EEE', 1);
console.log(peter);
      // UndergraduateStudent {name: "peter", age: 21, school: "EEE", year: 1}
console.log(peter instanceof UndergraduateStudent);  // true
console.log(peter instanceof Student);               // true
console.log(peter instanceof Person);                // true
console.log(peter instanceof Object);                // true
console.log(peter instanceof Date);                  // false
 
// Add property to Person's prototype
Person.prototype.incAge = function() { return ++this.age; };
 
console.log(peter);  // UndergraduateStudent {name: "peter", age: 21, school: "EEE", year: 1}
console.log(peter.incAge());                 // 22 (inherited from Person)
console.log('incAge' in peter);              // true
console.log(peter.hasOwnProperty('incAge')); // false (inherited, NOT own property)