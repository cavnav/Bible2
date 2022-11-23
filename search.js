import Bible from "./books/booksIdMap.js" assert {type: 'js'};


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
}
