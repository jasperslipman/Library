function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.uniqueID = crypto.randomUUID(); 
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    bookLibrary.push(newBook);
    console.log(`Book added to library, ${newBook.title} `);
}

document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const title = document.getElementById('titleForm').value.trim();
    const author = document.getElementById('authorForm').value.trim();
    const pages = parseInt(document.getElementById('pagesForm').value, 10);
    const read = document.getElementById('readForm').checked;

    addBookToLibrary(title, author, pages, read);

    document.getElementById('bookForm').reset();
});

