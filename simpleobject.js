// Create an object via Object Initializer
var request = {
   type: 'POST',      // You can omit the quotes if name is an identifier
   url:  'apple.php',
};
 
// Use dot operator to access the properties
console.log(request.type);
console.log(request.url);
 
// Updating property values via dot operator
request.url = 'orange.php';
console.log(request.url);
 
// Use index operator to access the properties
// The property names shall be quoted. Otherwise, they will be treated as variables.
console.log(request['type']);
console.log(request['url']);
request['url'] = 'banana.php';
console.log(request['url']);
var key = 'url';
console.log(request[key]);  // Using variable inside []
 
// Check if property exists
console.log(request.hasOwnProperty('type'));  // true
console.log(request.hasOwnProperty('url'));   // true
 
// Remove (Delete) a property
delete request.type;
console.log(request.hasOwnProperty('type'));  // false
console.log(request.hasOwnProperty('url'));   // true 

console.log(typeof request);







