import { BOOKS_MAP_HTML } from "./meta/booksMapHtml.js";
import { BOOKS } from "./meta/booksIdMap.js";



init();


function init() {
    _search.onkeyup = (event) => showBooks(event.target.value);
    _search.onclick = (event) => showBooks(event.target.value);
}

function getSuggestions(input) {
    return BOOKS.filter((book) => book.name.toLowerCase().includes(input.toLowerCase()));
}

export function showBooks(input) {
    _booksSuggestion.classList.remove("hide");
    const suggestions = getSuggestions(input);
    const ul = document.createElement('ul');
    ul.style.background = "white";
    ul.style.width = "400px";
    ul.style.padding ="10px";
    ul.style.border = "1px solid gray";
    ul.onclick = (event) => {
        const location = BOOKS_MAP_HTML[event.target.dataset.id];
        fetch(location)
        .then((response) => response.text())
        .then((content) => {
            _content.innerHTML = content;
            _booksSuggestion.classList.add("hide");
        });
    }
    const items = `${suggestions.map((book) => `<li data-id="${book.id}">${book.name}</li>`).join('')
        }`;

    ul.innerHTML = items;

    _booksSuggestion.innerHTML = "";
    _booksSuggestion.append(ul);
}