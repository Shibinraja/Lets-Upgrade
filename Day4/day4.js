// Que 1 Function to check whether the numner is odd or not

let age = (num)=>{
return num %2 == 0 ? `The number entered is ${num} and Number is even` : `The number entered is ${num} and Number is odd`
}

console.log(age(prompt("Please enter your age")))

// Que 2 Program a code which will take OS Name and version from the user and console log it.

let os = function(ver){
        let split =  ver.split(" ")
    return `The OS name is ${split[0]} and version is ${split[1]}`
}

console.log(os("Android 9"))

// Que 3 Program to make mark as input from user and grade him accordingly. 

//Solution 1:

function marks(num){
    if(num>=90){
        return `Marks are${num} and grade is S`
    }else if(num>=75 && num<=89){
        return `Marks are ${num} and grade is A`
    }else if(num<=74 && num>=50){
        return `Marks are ${num} and grade is B`
    }else{
        return `Marks are less ${num} and grade is F`
    }
}

marks(50)   

// Solution 2:

function marks(num){
    switch(true){
        case num>=90:
            console.log(`Marks are${num} and grade is S`)
            break;
        
        case num>=75 && num<=89:
            console.log( `Marks are ${num} and grade is A`)
            break;
        
        case num<=74 && num >=50:
            console.log( `Marks are ${num} and grade is B`)
            break

        default:
            console.log( `Marks are less ${num} and grade is F`)
            break
    }
}

marks(89)