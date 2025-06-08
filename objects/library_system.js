const library = {
  books: [],
  addBook(title, author) {
    this.books.push({ title, author, checkedOut: false });
  },
  checkOut(title) {
    const book = this.books.find(b => b.title === title);
    if (book) book.checkedOut = true;
  },
  getAvailableBooks() {
    return this.books.filter(b => !b.checkedOut);
  }
};

library.addBook("The Hobbit", "J.R.R. Tolkien");
library.addBook("1984", "George Orwell");
library.checkOut("1984");

console.log(library.getAvailableBooks());