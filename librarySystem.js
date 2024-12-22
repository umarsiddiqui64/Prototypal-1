// Book Constructor Function
function Book(title, author, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
}

// Member Constructor Function
function Member(name) {
    this.name = name;
    this.borrowedBooks = [];
}

// Borrow Book Method (for regular members)
Member.prototype.borrowBook = function(book) {
    if (book.isAvailable && this.borrowedBooks.length < 3) {
        book.isAvailable = false;
        this.borrowedBooks.push(book.title);
        console.log(`${this.name} borrowed "${book.title}".`);
    } else if (!book.isAvailable) {
        console.log(`"${book.title}" is already borrowed.`);
    } else {
        console.log(`${this.name} cannot borrow more than 3 books.`);
    }
};

// Premium Member Constructor (inherits from Member)
function PremiumMember(name) {
    Member.call(this, name);  // Call Member constructor
    this.specialCollectionAccess = true;
}

// Inherit Prototype Methods
PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;

// Override Borrow Book for Premium Members
PremiumMember.prototype.borrowBook = function(book) {
    if (this.borrowedBooks.length < 5) {
        Member.prototype.borrowBook.call(this, book);  // Reuse borrow logic
    } else {
        console.log(`${this.name} cannot borrow more than 5 books.`);
    }
};

// Create Books
const book1 = new Book('The Hobbit', 'J.R.R. Tolkien');
const book2 = new Book('1984', 'George Orwell');
const book3 = new Book('Moby Dick', 'Herman Melville');
const book4 = new Book('Dune', 'Frank Herbert');

// Create Members
const alice = new Member('Alice');
const bob = new PremiumMember('Bob');

// Borrow Books (Regular Member)
alice.borrowBook(book1);
alice.borrowBook(book2);
alice.borrowBook(book3);
alice.borrowBook(book4);  // Exceeds limit

// Borrow Books (Premium Member)
bob.borrowBook(book1);  // Already borrowed
bob.borrowBook(book3);
bob.borrowBook(book4);
bob.borrowBook(book2);

// Bind Borrowing for Alice
const borrowDuneForAlice = alice.borrowBook.bind(alice, book4);
borrowDuneForAlice();
