Object.O1='';
Object.prototype.Op1='';

Function.F1 = '';
Function.prototype.Fp1 = '';

Cat = function(){};
Cat.C1 = '';
Cat.prototype.Cp1 = '';

mycat = new Cat();
o = {};

console.log("==============  lessons =================")
console.log(`Function created by itself
	so, Function.prototype & Function.__proto__ are pointed to same object
	Object is created by Function, so Object.__proto__ is Function.prototype
	Function.prototype.__proto__ points to Object.prototype which is not created by anybody.
	Object.prototype.__proto__ is always null
	All function prototypes are created by Object "Object.create(Object)", so their __proto__ is Object.prototype.
    Object's constructor is the  Function.`);

console.log(Object);
console.log(Object.prototype);
console.log(Object.__proto__);
console.log(Object.prototype.__proto__);
console.log(Function);
console.log(Function.prototype);
console.log(Function.__proto__);

console.log(Object.constructor);
console.log(Function.constructor);
console.log("=================================================")
console.log("=================================================")
console.log("Object is constructed by Function :" + (Object.constructor === Function)); // true, Object.__proto__ === Function.prototype
console.log("Function is constructed by Function :" + (Function.constructor === Function)); // true, Function.__proto__ === Function.prototype

console.log("Object is Function :" + (Object instanceof Function)); // true, Object.__proto__ === Function.prototype
console.log("Object is Object :" + (Object instanceof Object)); // true, Object.__proto__ === Function.prototype && Function.prototype.__proto__ = Object.prototype
console.log("Function is Function :" + (Function instanceof Function)); // true, Function.__proto__ === Function.prototype
console.log("Function is Object :" + (Function instanceof Object)); // true, Function.__proto__ === Function.prototype && Function.prototype.__proto__ = Object.prototype

console.log("=================================================")

console.log("mycat constructor is Cat :" + (mycat.constructor === Cat));
console.log("mycat constructor prototype is Cat prototype :" + (mycat.constructor.prototype === Cat.prototype));
console.log("mycat __proto__ is Cat prototype :" + (mycat.__proto__ === Cat.prototype));

console.log("o constructor is Object :" + (o.constructor === Object));
console.log("o constructor prototype is Object prototype :" + (o.constructor.prototype === Object.prototype));
console.log("o __proto__ is Object prototype :" + (o.__proto__ === Object.prototype));

console.log("Cat constructor is Function :" + (Cat.constructor === Function));
console.log("Cat constructor prototype is Function prototype :" + (Cat.constructor.prototype === Function.prototype));
console.log("Cat __proto__ is Function prototype :" + (Cat.__proto__ === Function.prototype));

console.log("==================={}============================")
console.log({} instanceof Object); // An instance of Object
console.log({} instanceof Function); // not a function
console.log({}.constructor); // is created by Object
console.log({}.__proto__);   // hence, the value is Object.prototype


console.log("====================Cat=============================")
console.log(Cat instanceof Object); // An instance of Object
console.log(Cat instanceof Function); // not a function


console.log("====================Stack overflow question =============================")
console.log(mycat.constructor.prototype.constructor.prototype.constructor.prototype.Cp1); // works, Cat.prototype
console.log(mycat.__proto__.constructor.prototype.constructor.prototype.Cp1); // works, Cat.prototype
console.log(mycat.__proto__.__proto__.constructor.prototype); // undefined, Object.prototype
console.log(mycat.__proto__.__proto__.__proto__); // null, Object.prototype.__proto__

console.log("====================Array question =============================")

var months = ['jan', 'feb', 'mar'];
//var months = Boolean(true);
//var months = new Date();
//var months = new String("dfsa");
console.log(months.constructor);  // Array()
console.log(months.__proto__); 
console.log(months.constructor.prototype);
console.log(months.constructor.prototype.__proto__);


console.log(Function.prototype.__proto__);
console.log(Function.prototype.constructor);
console.log(Object.prototype.constructor);
console.log(Cat.prototype.__proto__);
console.log(mycat.__proto__.constructor);