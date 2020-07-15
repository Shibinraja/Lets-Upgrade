// various console function

const foo = { id: 1, name: 'Joe', age: 12 }

// The console.log () is a function in JavaScript which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.
// console.log(foo);
// console.log({foo});


// The console.warn () function from console class of Node.js is used to display the warning messages on the console. 
let $name = "shibin"
console.warn($name)

// The console.error () method writes an error message to the console. The console is useful for testing purposes.
let $name = "shibin"
console.error($name)

// important note 
// warn and error lines are prefixed with a little triangle and x, respectively.

// console.info("Hello world!"); The console.info () method writes a message to the console like an information.
let $name = "shibin"
console.info($name)

// The console.group() method indicates the start of a message group.
// All messages will from now on be written inside this group.
// Use the console.groupEnd() method to end the group.
// Use the console.groupCollapsed() method to hide the message group (collapsed by default).

console.group('Shopping item');
console.log('Name: JS Book 1');
console.log('Author: Unknown author');
console.log('ISBN: 048665088X');

console.groupEnd();
console.groupCollapsed();

// The console.table() method writes a table in the console view.
// The first parameter is required, and must be either an object, or an array, containing data to fill the table.

const a = {id: 1, a: "a", b: "b"}
console.table({a, b})

// The console.trace() method displays a trace that show how the code ended up at a certain point.

// This will show you the call path taken to reach the point at which you call 

// The console.clear() method clears the console.
// The console.clear() method will also write a message in the console: "Console was cleared".
console.clear(); 

// This prints out all the properties of a specific JavaScript object in the console, so we can easily see all the available properties (methods, variables, etc.)

console.dir();

// Var , let and const

// Var
// The scope of a variable defined with the keyword “var” is limited to the “function” within which it is defined. If it is defined outside any function, the scope of the variable is global.

// let
// The scope of a variable defined with the keyword “let” or “const” is limited to the “block” defined by curly braces i.e. {} 

// const
// The scope of a variable defined with the keyword “const” is limited to the block defined by curly braces. However if a variable is defined with keyword const, it cannot be reassigned.

// In JavaScript there are two different kinds of data: primitives, and objects. 
// In JS, there are six primitive data types:
// Boolean
// Number
// String
// Null
// Undefined
// Symbol

// Boolean
// A boolean represents only one of two values: true, or false. Think of a boolean as an on/off or a yes/no switch.
// var boo1 = true;
// var boo2 = false;

// Number
// There is only one type of Number in JavaScript. Numbers can be written with or without a decimal point. A number can also be +Infinity, -Infinity, and NaN (not a number).
// var num1 = 32;
// var num2 = +Infinity;

// String
// Strings are used for storing text. Strings must be inside of either double or single quotes. In JS, Strings are immutable (they cannot be changed).
// var str1 = 'hello, it is me';
// var str2 = "hello, it's me";

// Null
// Null has one value: null. It is explicitly nothing.
// var nothing = null;

// Undefined
// A variable that has no value is undefined.
// var testVar;
// console.log(testVar); // undefined

// Symbol
// Symbols are new in ES6. A Symbol is an immutable primitive value that is unique. For the sake of brevity, that is the extent that this article will cover Symbols.
// const mySymbol = Symbol('mySymbol');