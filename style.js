//1. write a function called "addNumbers" that takes two numbers as arguments and returns their sum. call the function before it is declared to demonstrate hosting.
// this is the code 1 question

console.log(addNumbers(5,10)); //15

function addNumbers(num1,num2){
    return num1+num2;
}

//2.write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product. use function expression to define the funtion and call the function before it is declared to demonstraate hosting.
//This is the question number2 

console.log(multiplyNumbers(3,4)) // referenceError can't access 'multiplyNumbers' before initialization

const multiplyNumbers= function (num1, num2){
    return num1*num2;
};


// 03.Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside
// the function using the var keyword and log its value to the console before it is assigned a value to
// demonstrate variable hoisting.
// this is question number 03

function addNumbers(num1, num2){
    console.log(sum); //undefind
    var sum;
    sum = num1 +num2;
    return sum;
}
console.log(addNumbers(5,10)); //15



// 04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
// them values and log their values to the console before and after they are declared to demonstrate variable
// hoisting.

{
    console.log(x); //undefined due to hosting
    console.log(y); //throws referenceError
    console.log(z); //throws referenceError

    var x = "pw";
    let y = "Skills";
    const z  = "!";

    console.log(x); // "pw"
    console.log(y); // "Skills"
    console.log(z); // "!"
}



// 05. Declare a variable using let inside a block scope and attempt to log its value to the console before it is
// assigned a value to demonstrate the temporal dead zone.

{
    console.log(x); // throws referenceError
      
    let x = "hello";

    console.log(x); // "hello"
}