// ## Activity 1: If-Else Statements

// ### Task 1
// - Write a program to check if a number is positive, negative, or zero, and log the result to the console.
let num=-7

if (num==0) {
    // console.log("number is zero");
    
}else if(num>0){
    // console.log("number is positive");

} else if(num<0){
    // console.log("negetive");

}

// ### Task 2
// - Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age=10
if (age >=18 ) {
    // console.log("You Are Eligible to vote");
    
}else{
    // console.log("You Are Not Eligible to VOTE");
}

// ## Activity 2: Nested If-Else Statements

// ### Task 3
// - Write a program to find the largest of three numbers using nested if-else statements.
// let num1=prompt("Enter No 1")
// let num2=prompt("Enter No 2")
// let num3=prompt("Enter No 3")
// if ( num1 > num2 && num1 > num3) {
//     console.log("The Largest NUmber  ",num1);
    
// } else if (num2>num1 && num2>num3) {
//     console.log("The Largest NUmber is ",num2);
// } else if (num3 > num1 && num3 >num2) {
//     console.log("The Largest NUmber is ",num3);
// }
// ### Task 4
// - Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.


// let x=4
// switch (x) {
//     case 0:
//         console.log("Sunday");

        
//         break;
//     case 1:
//         console.log("MOnday");    
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");  
//         break;
//     case 4:
//         console.log("thurusday");
//         break;
//     case 5:
//         console.log("Friday"); 
//         break;
//     case 6:
//         console.log("Saturday");
//         break;



//     default:
//         break;
// }
// ### Task 5
// - Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
// let score=prompt("Enter Number")
// switch (true){
//     case score>=90:
//         console.log("A");
//         break;
//     case score>=80 && score<90:
//         console.log("B");
//         break;
//     case score>=70 && score<80:
//         console.log("C");
//         break;
//     case score>=60 && score<70:
//          console.log("D");

//         break;
//     case score>=50 && score<600:
//         console.log("E");
//          break;
//     case score<50 && score >=0:
//          console.log("FAIL");
//          break;
//     default:
//         break;
// }

// ## Activity 4: Conditional (Ternary) Operator

// ### Task 6
// - Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let numb=5
numb%2===0 ? console.log("even") : console.log("odd");
