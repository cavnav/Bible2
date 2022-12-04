/*import Bible from "./books/booksIdMap.js" assert {type: 'js'};


const BOOKS = [
  {
    id: "001",
    name: "Бытие",
  },
  {
    id: "002",
    name: "Исход",
  },
  {
    id: "003",
    name: "Левит",
  },
];

function getSuggestions(input) {
  return BOOKS.filter((book) =>
    book.name.toLowerCase().includes(input.toLowerCase())
  );
}

export function showBooks(input) {
  const suggestions = getSuggestions(input);
  const ul = document.createElement("ul");
  ul.onclick = (event) => window.location = booksMapHtml[event.target.dataset.id];
  const items = `${suggestions
    .map((book) => `<li data-id="${book.id}">${book.name}</li>`)
    .join("")}`;


    
  ul.innerHTML = items;

  booksSuggestion.innerHTML = "";
  booksSuggestion.append(ul);
} */

import booksMapHtml from "/books/booksIdMap.json" assert {type: 'json'};

const BOOKS = [{
    id: "1",
    name: "Бытие",
},
{
    id: "2",
    name: "Исход",
},
{
    id: "3",
    name: "Левит",
},
];

init();


function init() {
    _search.onkeyup = (event) => showBooks(event.target.value);
    _search.onclick = (event) => showBooks(event.target.value);
}

function getSuggestions(input) {
    return BOOKS.filter((book) => book.name.toLowerCase().includes(input.toLowerCase()));
}

export function showBooks(input) {
    const suggestions = getSuggestions(input);
    const ul = document.createElement('ul');
    ul.style.background = "white";
    ul.style.width = "400px";
    ul.style.padding ="10px";
    ul.style.border = "1px solid gray";
    ul.onclick = (event) => {
        const location = booksMapHtml[event.target.dataset.id];
        fetch(location)
        .then((response) => response.text())
        .then((content) => {
            _content.innerHTML = content;
        });
    }
    const items = `${suggestions.map((book) => `<li data-id="${book.id}">${book.name}</li>`).join('')
        }`;

    ul.innerHTML = items;

    _booksSuggestion.innerHTML = "";
    _booksSuggestion.append(ul);
}