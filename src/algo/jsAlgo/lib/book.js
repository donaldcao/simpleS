
/*
function Book(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}
Book.prototype.printTitle = function () {
    console.log(this.title);
}
*/

class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }

    printIsbn() {
        console.log(this.isbn);
    }
}

/*
let book = new Book('test book', 999, 123434);
book.printIsbn();
*/