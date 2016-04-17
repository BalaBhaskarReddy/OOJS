
//   object with object

var request = {
   type: 'POST',
   url:  'apple.php',
   newstring: String('GET'),
   data: {             // This property holds an object too
      name: 'peter',
      id:   8888
   }
};
 
console.log(request);
console.log(request.data.name);  // peter
console.log(request.data.id);    // 8888
console.log(request.data);       // Object {name: "peter", id: 8888}
 
console.log(typeof request);       // object
console.log(typeof request.type);  // string
console.log(typeof request.data);  // object
console.log(typeof request.newstring);  // object