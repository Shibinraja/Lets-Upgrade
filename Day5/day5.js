// Create a loop that iterates upto 100 while outputting "fizz" at multiple of 3, "buzz" at multiple of 5 and "fizzbuzz" at multiple of 3 and 5.

let fizzbuzz = ()=>{
    for(let i = 1; i<=100 ; i++){
       if(i%3 ==0 && i%5==0){
           console.log("FizzBuzz")
       }
       else if(i%3 == 0){
           console.log("Fizz")
       }
       else if(i%5 ==0){
           console.log("Buzz")
       }
       else {
           console.log(i)
       }
    }
}

fizzbuzz();

// Que 2 Destructuring Object

const students = {
    name :"Helsinki",
    age : 24,
    projects : {
        diceGame : "Two Player Dice Game using javascript"
    }
}

const {name , age ,projects:{diceGame} } = students;

console.log(name, age ,diceGame)

// Que 3 Copy a array with deep copy concept;

let arr1 = ["Cool Drinks", "Snacks" , "Ice Cream" , "Chocolates", "Shampoo"];

let arr2 = arr1.slice()

arr2.push("Cheese", "Tang" , "Provisonary")

console.log(arr1)
console.log(arr2);

//  Que 7

function Prime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}
for(var i = 0; i < 10; i++){
    if(Prime(i)) console.log(i);

}

// Que 8

let ask = (question , yes , no)=>{
    if(confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    ()=>alert("You agreed."),
    ()=>alert("You canceled the execution.")

)

// Que 6

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);