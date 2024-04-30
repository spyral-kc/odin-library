const title = document.querySelector('input#title');
const author = document.querySelector('input#author');
const pages = document.querySelector('input#pages');
const read = document.querySelector('input#read');
const submitBtn = document.querySelector('button#submit');
const bookList = document.querySelector('div#bookList');

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = `${title} by ${author}, ${pages} pages, ${read}.`
  this.index;
};

function refreshIndex() {
  myLibrary.forEach(book => {
    book.index = myLibrary.indexOf(book);
  }); 
};

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read); 
  myLibrary.push(newBook);
};

function displayLibrary() {
  myLibrary.forEach(book => {
    const bookItem = document.createElement('div');
    const bookInfo = document.createElement('span');
    const deleteBtn = document.createElement('button');

    bookItem.appendChild(bookInfo);
    bookItem.appendChild(deleteBtn);
    bookList.appendChild(bookItem);

    bookInfo.textContent = book.info;
    deleteBtn.textContent = 'DELETE';

    deleteBtn.addEventListener('click', () => {
      bookList.removeChild(bookItem);
      myLibrary.splice(myLibrary.indexOf(book), 1);
    });
  });
}

submitBtn.addEventListener('click', (event) => {
  //event.preventDefault();

  const myTitle = title.value;
  const myAuthor = author.value;
  const myPages = pages.value;
  const myRead = read.value;

if (!(myTitle && myAuthor && myPages)) {
  return;
}

  title.value = '';
  author.value = '';
  pages.value = '';

  addBookToLibrary(myTitle, myAuthor, myPages, myRead);
  bookList.replaceChildren();
  displayLibrary();
  refreshIndex();
});


