var myCircle = {
   radius  : 1.1,
   color   : 'red',
   getArea : function() { return this.radius*this.radius*Math.PI; }
};
 
for (var name in myCircle) {
   var value = myCircle[name];  // need to use bracket notation
   console.log("name:" + name + ", value:" + value);
}
   // name:radius, value:1.1
   // name:color, value:red
   // name:getArea, value:function () { return radius*radius*Math.PI; }
 
var keys = Object.keys(myCircle);
console.log(keys);   // ["radius", "color", "getArea"]
for (var key of keys) {
   var value = myCircle[key];
   console.log("key:" + key + ", value:" + value);
}
   // key:radius, value:1.1
   // key:color, value:red
   // key:getArea, value:function () { return radius*radius*Math.PI; }
 
var names = Object.getOwnPropertyNames(myCircle);
console.log(names);  // ["radius", "color", "getArea"]
for (var i = 0; i < names.length; i++) {
   var name = names[i];
   var value = myCircle[name];
   console.log("name:" + name + ", value:" + value);
}
   // name:radius, value:1.1
   // name:color, value:red
   // name:getArea, value:function () { return radius*radius*Math.PI; }

console.log(myCircle.getArea());
with(myCircle){
   console.log(getArea());
}