// add book to libary code 
bookLibrary = [];

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

// Book Display 

function displayBooks() {
    let bookList = document.getElementById('BookList');
    bookList.innerHTML = "";

    bookLibrary.forEach((Book) => {
        let bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.setAttribute('data-id', Book.uniqueID);

        let titleElement = document.createElement('h5');
        titleElement.textContent = Book.title;

        let authorElement = document.createElement('p');
        authorElement.textContent = Book.author;

        let pagesElement = document.createElement('p');
        pagesElement.textContent = Book.pages;

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');

        let readButton = document.createElement('button');
        readButton.textContent = 'Read';
        readButton.classList.add('read-button');

        if (Book.read) {
            readButton.style.backgroundColor = 'green';
        } else {
            readButton.style.backgroundColor = 'red';
        }


        readButton.addEventListener('click', function() {
            if (Book.read) {
                Book.read = false;
                readButton.style.backgroundColor = 'red';
            } else {
                Book.read = true;
                readButton.style.backgroundColor = 'green';

            }
        });
        
        removeButton.addEventListener('click', function() {
            const bookID = bookCard.getAttribute('data-id');
        
            const bookIndex = bookLibrary.findIndex(book => book.uniqueID === bookID);
        
            if (bookIndex !== -1) {
                bookLibrary.splice(bookIndex, 1);
                console.log(`${Book.title} removed from the library.`);
            } else {
                console.log(`${Book.title} not found in the library.`);
            }
    
            bookCard.remove();
        });
        

        bookList.appendChild(bookCard);
        bookCard.appendChild(titleElement);
        bookCard.appendChild(authorElement);
        bookCard.appendChild(pagesElement);
        bookCard.appendChild(removeButton);
        bookCard.appendChild(readButton);
    });
}

function removeBook() {
    console.log('Remove button clicked');
}

document.getElementById('displayBooksButton').addEventListener('click', displayBooks);

document.addEventListener("DOMContentLoaded", () => {
    
});


