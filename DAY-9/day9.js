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

// ### Task 4
// Create a new `li` element and add it to an existing `ul` list.
let ul =document.getElementById("ul")
let newLi=document.createElement('li')
newLi.textContent="Sohail"
ul.append(newLi)


// ## Activity 3: Removing Elements

// ### Task 5
// Select an HTML element and remove it from the DOM.
ul.remove()


// ## Activity 4: Modifying Attributes and Classes

// ### Task 7
// Select an HTML element and change one of its attributes (e.g., `src` of an `img` tag).
let element=document.getElementById('elem')
element.setAttribute("src",'/jpg')

// ### Task 8
// Add and remove a CSS class to/from an HTML element.
element.classList.add('new-class')
element.classList.remove("new-class")

// ## Activity 5: Event Handling

// ### Task 9
// Add a click event listener to a button that changes the text content of a paragraph.
let para=document.getElementById('para1')
let btn=document.getElementById('btn')
btn.addEventListener('click',()=>{
    para.textContent="sohail asif is a good"
})

// ### Task 10
// Add a mouseover event listener to an element that changes its border color.


