/*
Factory Pattern

Imagine that you want to keep track of your reading list — each book would have a title, author, number of pages, year
written, reading status, and more. If you needed to create an object for each book, you would have to write many lines
of repetitive code.

To speed up the process of instantiating your reading list, you can make use of the Factory Pattern. Functions that use
the Factory Pattern use a predefined template to return an object with properties and methods. The arguments are used to
construct the object, while the methods are usually part of the template.
Implementation of the Factory Pattern

In the code example below, the function createBook() takes 3 arguments: title, author, and read. (The third argument is
  optional.) The function returns an object literal with 3 properties (title, author, and read) and 2 methods
  (.getDescription() and .readBook()).
*/

function createBook(title, author, read = false) {
    return {
        title: title,
        author: author,
        read: read,
        getDescription() {
            console.log(`${this.title} was written by ${this.author}. I ${this.read ? "have" : "have not"} read it.`);
        },
        readBook() {
            this.read = true;
        },
    }
}

//We can then instantiate objects and call the methods that become part of the object’s properties, or modify the
//properties directly.

const beloved = createBook("Beloved", "Toni Morrison");
console.log(beloved);
/*
{
    title: 'Beloved',
    author: 'Toni Morrison',
    read: false,
    getDescription: [Function: getDescription],
    readBook: [Function: readBook]
}
*/

// call the `.readBook()` method
beloved.readBook(); // read is updated to true

// modifies the property directly
beloved.title = "I can change the property."
