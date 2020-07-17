//  Program to print user name and log into the console.

let person = prompt('Enter your name')

console.log(person)

// Ask the user if the user is above 21 or above and console

let age = prompt('Please enter your age')

age>21?"Can Drink": "Cannot Drink"

// String Methods

// Length
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let sln = txt.length;
console.log(sln)

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let str = "Please locate where 'locate' occurs!";
let pos = str.lastIndexOf("where");
console.log(pos)

// The search() method searches a string for a specified value and returns the position of the match:
let str = "Please locate where 'locate' occurs!";
let pos = str.search("occurs!");
console.log(pos)

// The substring() is an inbuilt function in JavaScript which returns a part of the given string from start index to end index:
let str = "Apple, Banana, Kiwi";
let res = str.substring(7, 13);
console.log(res)

// JavaScript substr() method returns part of the string starting from an index and number of characters after the start index:
let str = "Apple, Banana, Kiwi";
let res2 = str.substr(7, 6);
console.log(res2)

// The replace() method replaces a specified value with another value in a string:
let st = "Please visit Microsoft!";
let n = st.replace("Microsoft", "W3Schools");
console.log(n)

// The trim() method removes whitespace from both sides of a string:
let string = "       Hello World!        ";
console.log(string.trim());

// The charCodeAt() method returns the unicode of the character at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).
let word = "HELLO WORLD";
console.log(word.charCodeAt(0)); 

// Array Methods

// Array elements are accessed using their index number:

let fruits = ["Banana", "Orange", "Apple", "Mango"];
    f = fruits[0];
console.log(f)

// The length property provides an easy way to append a new element to an array like push method:
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";  

// In JavaScript array elements can be deleted by using the JavaScript operator delete:
let fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0]; 
console.log(fruits);

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place:
// It is used for both adding and removing elements from an array.

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)

// let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified:

let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));

// The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

let array1 = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value:
let isBelowThreshold = (currentValue) => currentValue < 40;
let array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array:
let array1 = [1, 4, 9, 16];

// pass a function to map
let map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

// The forEach() method executes a provided function once for each array element:

let array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));

// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value:
let array1 = [1, 2, 3, 4];
let reducer = (accumulator, currentValue) => accumulator + currentValue;

// The join() method creates and returns a new string by concatenating all of the elements in an array :
let elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// expected output: "Fire,Air,Water"