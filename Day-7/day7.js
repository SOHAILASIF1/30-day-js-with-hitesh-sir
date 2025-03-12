// ## Activity 1: Object Creation and Access

// ### Task 1
// Create an object representing a book with properties like title, author, and year, and log the object to the console.

const book={
    title:"Pakistan",
    aurthor:"ALLAMA IQBAL",
    year:2009
}
console.log(book);

// ### Task 2
// Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book.aurthor);


// ## Activity 2: Object Methods

// ### Task 3
// Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
const boook={
    name:"book",
    getDetail(){
        return `the book name is ${this.name}`
    }
}
console.log(boook.getDetail());

// ### Task 4
// Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
const myBook={
    name:"my book",
    year :2007,
    updateYear(newyear){
        this.year=newyear
    },

    getDetail(){
        return `my book name is ${this.name} and this published in ${this.year}`
    }
}
myBook.updateYear(2000)
console.log(myBook.getDetail());

// ## Activity 3: Nested Objects

// ### Task 5
// Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
    name: "City Library",
    books: [
        { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
        { title: "Atomic Habits", author: "James Clear", year: 2018 },
        { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", year: 1997 }
    ]
};

console.log(library);

// ### Task 6
// Access and log the name of the library and the titles of all the books in the library.
const library1 = {
    name: "City Library",
    books: [
        { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
        { title: "Atomic Habits", author: "James Clear", year: 2018 },
        { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", year: 1997 }
    ]
};

console.log(library1.books[0].title);
