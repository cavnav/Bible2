import { BOOKS } from "./meta/booksIdMap.js";

let bookId;

init();


function init() {
    _search.onkeyup = (event) => showSearchResults(event.target.value);
    _search.onclick = (event) => showSearchResults(event.target.value);
    const book = BOOKS[Math.floor(Math.random() * BOOKS.length)];
    bookId = book.id;
    setContent(bookId);
}

function getSuggestions(input) {
    return BOOKS.filter((book) => book.name.toLowerCase().includes(input.toLowerCase()));
}

export function showSearchResults(input) {
    _booksSuggestion.classList.remove("hide");
    const suggestions = getSuggestions(input);
    const ul = document.createElement('ul');
    ul.id="search-result"
    ul.onclick = (event) => {
        bookId = event.target.dataset.id;
        setContent(bookId);        
    }
    const items = `${suggestions.map((book) => `<li data-id="${book.id}">${book.name}</li>`).join('')}`;

    ul.innerHTML = items;

    _booksSuggestion.innerHTML = "";
    _booksSuggestion.append(ul);
}

function setContent(bookId) {
    const book = BOOKS.find((book) => book.id === bookId);
    if (book) {
        fetch(book.url)
        .then((response) => response.text())
        .then((content) => {
            _content.innerHTML = content;
            _booksSuggestion.classList.add("hide");
        });
    }
}