// ## Activity 1: Function Declaration

// ### Task 1
// Write a function to check if a number is even or odd and log the result to the console.
function checkNumber(num) {
    if (num%2===0) {
        console.log("Number IS Even");
        
    }else{
        console.log("Number is odd");
    }
    
}
checkNumber(2)

// ### Task 2
// Write a function to calculate the square of a number and return the result.
function squareNumber(num) {
    const number=num*num
    return number;
    
}
console.log(squareNumber(10));



// ## Activity 2: Function Expression

// ### Task 3
// Write a function expression to find the maximum of two numbers and log the result to the console.
const maximumNumber=function(num1,num2) {
    if (num1 >num2) {
        console.log("The Largest Number is Number 1 which is :",num1);
        
    }
    else{
        console.log("The Largest Number is Number 2 which is :",num2);

    }
    
}
maximumNumber(2,4)

// ### Task 4
// Write a function expression to concatenate two strings and return the result.
const twoStr=function(str1,str2){
    const newStr=str1 +" "+ str2
    return newStr
}
console.log(twoStr("ali","sohail"));


// ## Activity 3: Arrow Functions

// ### Task 5
// Write an arrow function to calculate the sum of two numbers and return the result.
const sumNum=(num1,num2)=>{
    return num1+ num2

}
console.log(sumNum(2,5));

// ### Task 6
// Write an arrow function to check if a string contains a specific character and return a boolean value.
const checkStr=(str)=>{
   return str.includes("sohail")

}

console.log(checkStr("hello i am sohail"));