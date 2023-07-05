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
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.displayBookDetails = this.displayBookDetails.bind(this);
    this.bookArray;
    if (localStorage.getItem('bookArray') != null) {
      this.bookArray = JSON.parse(localStorage.getItem('bookArray'));
    } else {
      this.bookArray = [{
        title: 'Mistborn',
        author: 'Brandon Sanderson',
      }];
    }
   } 
  // update method
  updateLocalStorage() {
        localStorage.setItem('bookArray', JSON.stringify(this.bookArray));
      }
  // remove method
   removeBook(bookId, obj) {
        const bookToRemove = document.querySelector(`#${bookId}`);
        article.removeChild(bookToRemove);
        this.bookArray.splice(this.bookArray.indexOf(obj), 1);
        console.log(this.updateLocalStorage())
      }
  // display method
  displayBookDetails(obj) {
    const bookContainer = document.createElement('div');
    console.log(obj)
    bookContainer.classList.add('book')
    if ( this.bookArray.indexOf(obj) % 2 === 1){
      bookContainer.classList.add('white')
    }    
    const bookId = `a${Math.floor(Math.random() * 100000)}`;
    bookContainer.id = bookId;
    const buttonId = `a${Math.floor(Math.random() * 100000)}`;
    bookContainer.innerHTML = `
          <p class='book_title'>'${obj.title}' by ${obj.author} </p>
          <button class='remove_button'
          id='${buttonId}'>Remove</button>
          `;
    article.append(bookContainer);
    const removeBtn = document.querySelector(`#${buttonId}`);
    removeBtn.addEventListener('click', (evt) =>  {
      evt.stopPropagation();
      this.removeBook(bookId,obj);
    }); 
  }
  addBook() {
    let a  = 'a';
    const newBook = new Book(bookTitle.value, authorName.value);
    this.bookArray.push(newBook);
    this.displayBookDetails(newBook);
    bookTitle.value = '';
    authorName.value = '';
    this.updateLocalStorage();
  }
}

const bookObject = new Book();
addButton.addEventListener('click', function () {
  bookObject.addBook();
});
window.onload = bookObject.bookArray.forEach(bookObject.displayBookDetails);


// class Book {
//   constructor (title, author) {
//     this.title = title;
//     this.author = author;
//     this.allBooks =  [];
//     console.log(typeof(this.allBooks));

//     // if (localStorage.getItem('allBooks') != null) {
//     //   this.allBooks = JSON.parse(localStorage.getItem('allBooks'));
//     // } else {
//     //   this.allBooks = [{
//     //     title: 'Mistborn',
//     //     author: 'Brandon Sanderson',
//     //   }];
//     // }
//   }

//   updateLocalStorage() {
//     localStorage.setItem('allBooks', JSON.stringify(this.allBooks));
//   }

//   removeBook(bookId, obj) {
//     const bookToRemove = document.querySelector(`#${bookId}`);
//     article.removeChild(bookToRemove);
//     allBooks.splice(allBooks.indexOf(obj), 1);
//     this.updateLocalStorage();
//   }

//   displayBookDetails(obj) {
//     const bookContainer = document.createElement('div');
//     const bookId = `a${Math.floor(Math.random() * 100000)}`;
//     bookContainer.id = bookId;
//     const buttonId = `a${Math.floor(Math.random() * 100000)}`;
//     bookContainer.innerHTML = `
//       <p class='book_title'>${obj.title}</p>
//       <p class='author_name'>${obj.author}</p>
//       <button class='remove_button'
//       id='${buttonId}'>Remove</button>
//       <hr>
//       `;
//     article.append(bookContainer);
//     const removeBtn = document.querySelector(`#${buttonId}`);
//     removeBtn.addEventListener('click', (evt) => {
//       evt.stopPropagation();
//       this.removeBook(bookId, obj);
//     });
//   }

//   addBook() {
//    const newBook = new Book(bookTitle.value, authorName.value)
//     console.log(this.allBooks);
//     this.allBooks.push(newBook);
//     console.log(this.allBooks);
//     this.displayBookDetails(newBook);
//     bookTitle.value = '';
//     authorName.value = '';
//     this.updateLocalStorage();
//   }
// }

// line 74
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
//     <p class='book_title'>${obj.title}</p>
//     <p class='author_name'>${obj.author}</p>
//     <button class='remove_button'
//     id='${buttonId}'>Remove</button>
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
