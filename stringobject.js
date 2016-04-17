// Creating a string primitive by assigning a string literal
var str1 = 'Hello';
console.log('type: ' + typeof str1);  // type: string (primitive)
console.log(str2 instanceof String);  // false
console.log(str2 instanceof Object);  // false
 
// Create a String object by invoking the constructor
var str2 = new String('Hello');
console.log('type: ' + typeof str2);  // type: object
console.log(str2 instanceof String);  // true
console.log(str2 instanceof Object);  // true

 
// Auto-box to a String Object, before applying the property/method
console.log("hello".length);  // 5
console.log("hello".substring(1, 4)) //ell