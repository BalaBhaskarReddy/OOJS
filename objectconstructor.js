// Construct an Array object
var months = ['jan', 'feb', 'mar'];
console.log(months.constructor);  // Array()
console.log(months);              // ["jan", "feb", "mar"]
 
// Create another Array object by invoking the constructor of the first object.
var days = months.constructor('mon', 'tue', 'wed')
console.log(days);                // ["mon", "tue", "wed"]