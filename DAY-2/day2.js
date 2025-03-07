// ## Activity 1: Arithmetic Operations
let num1 =4
let num2=3

// -  Task 1: Write a program to add two numbers and log the result to the console.
console.log("sum is",num1+num2);

// -  Task 2: Write a program to subtract two numbers and log the result to the console.
console.log("subtract is",num1-num2);


// -  Task 3: Write a program to multiply two numbers and log the result to the console.
console.log("myltiply is",num1*num2);


// -  Task 4: Write a program to divide two numbers and log the result to the console.
console.log("devide  is",num1/num2);


// -  Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
console.log("Reminder is",num1%num2);



// ## Activity 2: Assignment Operators

// -  Task 6: Use the + operator to add a number to a variable and log the result to the console. 
let c=num1+num2
console.log(c);

// -  Task 7: Use the operator to subtract a number from a variable and log the result to the console.
let d=num1-num2
console.log(d);



// ## Activity 3: Comparison Operators

// -  Task 8: Write a program to compare two numbers using > and < and log the result to the console.
console.log(num1>num2);
console.log(num1<num2);

// -  Task 9: Write a program to compare two numbers using > and <= and log the result to the console. 
console.log(num1>=num2);
console.log(num1<=num2);


// -  Task 10: Write a program to compare two numbers using == and === and log the result to the console.
let num4=5
let num5="5"
console.log("num4==num5:",num4==num5);
console.log("num4===num5:",num4===num5);







// ## Activity 4: Logical Operators
let age =17
let eligible=false



// -  Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
if (age>=18 && eligible) {
    console.log("Allow For VOte");
    
}else{
    console.log("dont allow");
}

// -  Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
if (age>=18 || eligible) {
    console.log("Allow For VOte");
    
}else{
    console.log("dont allow");
}

// -  Task 13: Write a program that uses the operator to negate a condition and log the result to the console.
let isRaining = true;

console.log("Before negation:", isRaining);
console.log("After negation:", !isRaining);