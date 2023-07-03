const addButton = document.querySelector(".add_button");
const bookTitle = document.querySelector(".book_title");
const authorName = document.querySelector(".author_name");
const article = document.querySelector(".book_details");

const allBooks = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function displayBookDetails(obj) {
  let bookContainer = document.createElement("div");
  bookContainer.innerHTML = `
    <p class="book_title">${obj.title}</p>
    <p class="author_name">${obj.author}</p>
    <button class="remove_button">Remove</button>
    <hr>
    `;
  article.append(bookContainer);
}

function addBook() {
  const newBook = new Book(bookTitle.value, authorName.value);
  allBooks.push(newBook);
  displayBookDetails(newBook);
}

addButton.addEventListener("click", addBook);
window.onload = allBooks.forEach(displayBookDetails);
