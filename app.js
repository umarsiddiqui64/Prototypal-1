// Book Constructor Function
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Prototype Method to get Summary
Book.prototype.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
};

// Book Collection (Array of Books)
const books = [
    new Book('The Hobbit', 'J.R.R. Tolkien', 1937),
    new Book('1984', 'George Orwell', 1949),
    new Book('To Kill a Mockingbird', 'Harper Lee', 1960)
];

// Generate Summaries using map
const bookSummaries = books.map(book => book.getSummary());

// Log Summaries to Console
console.log(bookSummaries);
