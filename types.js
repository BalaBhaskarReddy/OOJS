// Undeclared variable v1
console.log('type:' + typeof v1);  // type: undefined
//console.log('value:' + v1);      // value: error: v1 is not defined
 
// Declare variable v1, without assigning an initial value
var v1;
console.log('type: ' + typeof v1);  // type: undefined
console.log('value: ' + v1);        // value: undefined
 
// Assign a string value
v1 = 'abc';
console.log('type: ' + typeof v1);  // type: string
console.log('value: ' + v1);        // value: abc
 
// Assign a number string
v1 = '123';
console.log('type: ' + typeof v1);  // type: string
console.log('value: ' + v1);        // value: 123
 
// Assign an integer value
v1 = 123;
console.log('type: ' + typeof v1);  // type: number
console.log('value: ' + v1);        // value: 123
 
// Assign a floating point value
v1 = 55.66;
console.log('type: ' + typeof v1);  // type: number
console.log('value: ' + v1);        // value: 55.66
 
// Assign a boolean value
v1 = false;
console.log('type: ' + typeof v1);  // type: boolean
console.log('value: ' + v1);        // value: false

/* objects */
 
// null object
v1 = null;
console.log('type: ' + typeof v1);  // type: object
console.log('value: ' + v1);        // value: null
 
// object
v1 = {name:'peter', age:21};
console.log('type: ' + typeof v1);  // type: object
console.log('value: ' + v1);        // value: [object Object]
console.log('value: ' + v1.name);   // value: peter
console.log('value: ' + v1.age);    // value: 21
 
// Date object
v1 = new Date();
console.log('type: ' + typeof v1);  // type: object
console.log('value: ' + v1);        // value: Tue May 26 2015 00:35:12 GMT+0800 (SGT)
 
// Function object
v1 = function() { return 'hello'; };
console.log('type: ' + typeof v1);  // type: function
console.log('value: ' + v1);        // value: function () { return 'hello'; }
