const addButton = document.querySelector(".add_button");
const bookTitle = document.querySelector(".book_title");
const authorName = document.querySelector(".author_name");
const article = document.querySelector(".book_details");


if (localStorage.getItem('allBooks') != null) {
  allBooks = JSON.parse(localStorage.getItem('allBooks'))
}else{
   allBooks = [{
    title : "Mistborn",
    author : "Brandon Sanderson"
  }];
}

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function updateLocalStorage (){
  localStorage.setItem('allBooks', JSON.stringify(allBooks));
}

function removeBook (bookId, obj) {
  let bookToRemove = document.querySelector(`#${bookId}`);
  article.removeChild(bookToRemove);
  allBooks.splice(allBooks.indexOf(obj),1);
  console.log(allBooks);
  updateLocalStorage();
}

function displayBookDetails(obj) {
  let bookContainer = document.createElement("div");
  let bookId = `a${Date.now()}`;
  bookContainer.id = bookId;
  let buttonId = `a${Date.now()}`;
  bookContainer.innerHTML = `
    <p class="book_title">${obj.title}</p>
    <p class="author_name">${obj.author}</p>
    <button class="remove_button"
    id="${buttonId}">Remove</button>
    <hr>
    `;
  article.append(bookContainer);
  let removeBtn = document.querySelector(`#${buttonId}`);
  removeBtn.addEventListener('click', (evt) => { evt.stopPropagation(); removeBook(bookId, obj); });
  
}

function addBook() {
  const newBook = new Book(bookTitle.value, authorName.value);
  allBooks.push(newBook);
  displayBookDetails(newBook);
  bookTitle.value = "";
  authorName.value = "";
  updateLocalStorage()
}

addButton.addEventListener("click", addBook);
window.onload = allBooks.forEach(displayBookDetails);





