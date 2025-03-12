// ## Activity 1: Selecting and Manipulating Elements

// ### Task 1
// Select an HTML element by its ID and change its text content.
const para=document.getElementById("p")
para.textContent="hi am sohail asif"
// ### Task 2
// Select an HTML element by its class and change its background color.
const change=document.getElementsByClassName('change')[0]
change.style.backgroundColor="red"
// ## Activity 2: Creating and Appending Elements
// 
// ### Task 3
// Create a new `div` element with some text content and append it to the body.
let newDiv=document.createElement("div")
newDiv.textContent="sohail Asif "
document.body.append(newDiv)
