function sayHello(msg) {  // Define a 'named' function
   console.log(msg);
   return msg;
}
sayHello('hello');  // Invoke function with function name
console.log('type: ' + typeof sayHello);   // type: function
console.log(sayHello instanceof Function); // true
console.log(sayHello instanceof Object);   // true
 
// Assign a variable to a function object
// (without parentheses and argument)
var magic = sayHello;
 
magic('Hi');       // Invoke function
console.log('type: ' + typeof magic);   // type: function
console.log(magic instanceof Function); // true
console.log(magic instanceof Object);   // true


// Besides using function keyword, you can also use the Function constructor (with new operator) 
// to define a Function object. This is not easily understood and, hence, not recommended.
var magic = new Function("arg1", "arg2", "{arguments[2]='arge2';return typeof arguments}");
// Same as
//   function magic(arg1, arg2) { return arg1 + arg2; }
// Also same as
//   var magic = function (arg1, arg2) { return arg1 + arg2; }
 
console.log(magic(55, 66));
console.log('type: ' + typeof magic);   // type: function
console.log(magic instanceof Function); // true
console.log(magic instanceof Object);   // true