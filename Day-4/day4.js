// ## Activity 1: For Loop

// ### Task 1
// - Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
    
}

// ### Task 2
// - Write a program to print the multiplication table of 5 using a for loop.
for (let i = 1; i < 10 ; i++) {
    console.log(5*i);
    
}
// ### Task 3
// - Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let num=1
let sum=1
while (num<=10) {
    sum=sum+num
    num ++
    
}
console.log(sum);
// ### Task 4
// - Write a program to print numbers from 10 to 1 using a while loop.
let num1=10
while (num1>=1) {
    console.log(num1);
    num1=num1-1
    
}



// ### Task 5
// - Write a program to print numbers from 1 to 5 using a do...while loop.
num=1
do {
     console.log(num);
     num++

    
} while (num<=5);

// ### Task 5
// - Write a program to print numbers from 1 to 5 using a do...while loop.
num=1
result=1
n=10
do {
    result=result*num
    num++
    
} while (num<=n);
console.log(result);

// ### Task 8
// - Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for (let index = 0; index <=10; index++) {
    if (index===3) {
        continue
        
    }
    console.log(index);
    
}
// ## Task 9
// - Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let index = 0; index <=10; index++) {
    if (index===4) {
        break
        
    }
    console.log("loop",index);
    
}