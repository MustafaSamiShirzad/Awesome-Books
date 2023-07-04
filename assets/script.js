const addButton = document.querySelector('.add_button');
const bookTitle = document.querySelector('.book_title');
const authorName = document.querySelector('.author_name');
const article = document.querySelector('.book_details');

// let allBooks = [];
// if (localStorage.getItem('allBooks') != null) {
//   allBooks = JSON.parse(localStorage.getItem('allBooks'));
// } else {
//   allBooks = [{
//     title: 'Mistborn',
//     author: 'Brandon Sanderson',
//   }];
// }

class Book {
  // constructor (title, author,) {
  //   this.title = title;
  //   this.author = author;
  //   this.allBooks = [];
  //   if (localStorage.getItem('allBooks') != null) {
  //     this.allBooks = JSON.parse(localStorage.getItem('allBooks'));
  //   } else {
  //     this.allBooks = [{
  //       title: 'Mistborn',
  //       author: 'Brandon Sanderson',
  //     }];
  //   }
  // }

  constructor() {
    this.allBooks = [];
    if (localStorage.getItem('allBooks') != null) {
      this.allBooks = JSON.parse(localStorage.getItem('allBooks'));
    } else {
      this.allBooks = [{
        title: 'Mistborn',
        author: 'Brandon Sanderson',
      }];
    }
  }

  updateLocalStorage() {
    localStorage.setItem('allBooks', JSON.stringify(this.allBooks));
  }

  removeBook(bookId, obj) {
    const bookToRemove = document.querySelector(`#${bookId}`);
    article.removeChild(bookToRemove);
    allBooks.splice(allBooks.indexOf(obj), 1);
    this.updateLocalStorage();
  }

  displayBookDetails(obj) {
    const bookContainer = document.createElement('div');
    const bookId = `a${Math.floor(Math.random() * 100000)}`;
    bookContainer.id = bookId;
    const buttonId = `a${Math.floor(Math.random() * 100000)}`;
    bookContainer.innerHTML = `
      <p class="book_title">${obj.title}</p>
      <p class="author_name">${obj.author}</p>
      <button class="remove_button"
      id="${buttonId}">Remove</button>
      <hr>
      `;
    article.append(bookContainer);
    const removeBtn = document.querySelector(`#${buttonId}`);
    removeBtn.addEventListener('click', (evt) => { evt.stopPropagation(); this.removeBook(bookId, obj); });
  }

  addBook(title, author) {
    const newBook = {
      title: title,
      author: author,
      id: `a${Math.floor(Math.random() * 100000)}`,
    };    console.log(this.allBooks)
    this.allBooks.push(newBook);
    console.log(this.allBooks)
    this.displayBookDetails(newBook);
    bookTitle.value = '';
    authorName.value = '';
    this.updateLocalStorage();
  }
};


// function updateLocalStorage() {
//   localStorage.setItem('allBooks', JSON.stringify(allBooks));
// }

// function removeBook(bookId, obj) {
//   const bookToRemove = document.querySelector(`#${bookId}`);
//   article.removeChild(bookToRemove);
//   allBooks.splice(allBooks.indexOf(obj), 1);
//   updateLocalStorage();
// }

// function displayBookDetails(obj) {
//   const bookContainer = document.createElement('div');
//   const bookId = `a${Math.floor(Math.random() * 100000)}`;
//   bookContainer.id = bookId;
//   const buttonId = `a${Math.floor(Math.random() * 100000)}`;
//   bookContainer.innerHTML = `
//     <p class="book_title">${obj.title}</p>
//     <p class="author_name">${obj.author}</p>
//     <button class="remove_button"
//     id="${buttonId}">Remove</button>
//     <hr>
//     `;
//   article.append(bookContainer);
//   const removeBtn = document.querySelector(`#${buttonId}`);
//   removeBtn.addEventListener('click', (evt) => { evt.stopPropagation(); removeBook(bookId, obj); });
// }

// function addBook() {
//   //const newBook = new Book(bookTitle.value, authorName.value);
  
//   allBooks.push(newBook);
//   displayBookDetails(newBook);
//   bookTitle.value = '';
//   authorName.value = '';
//   updateLocalStorage();
// }

const bookObject = new Book();
addButton.addEventListener('click', bookObject.addBook);
window.onload = bookObject.allBooks.forEach(bookObject.displayBookDetails);
