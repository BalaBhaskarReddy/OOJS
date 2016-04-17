// Date(): Construct a Date object at current date and time
var now = new Date();
console.log(now);            // Tue May 26 2015 22:59:43 GMT+0800 (SGT)
console.log(now.toString()); // Tue May 26 2015 22:59:43 GMT+0800 (SGT)
console.log(now.valueOf());  // 1432652383342
console.log('type: ' + typeof now);  // type: object
console.log(now instanceof Object);  // true
console.log(now instanceof Date);    // true
console.log(now instanceof Array);   // false
 
// Date(year, month, day, hours, minutes, seconds, milliseconds):
//   Construct a Date object at the given date and time
var aDay = new Date(1970, 1, 1, 12, 34, 56, 79);
console.log(aDay);            // Sun Feb 01 1970 12:34:56 GMT+0800 (SGT)
console.log(aDay.toString()); // Sun Feb 01 1970 12:34:56 GMT+0800 (SGT)
console.log(aDay.valueOf());  // 2694896079