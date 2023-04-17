import { BOOKS } from "./meta/booksIdMap.js";

let currentBookId;

init();
 

function init() {
    _search.onkeyup = (event) => showSearchResults(event.target.value);
    _search.onclick = (event) => showSearchResults(event.target.value);
    const book = BOOKS[Math.floor(Math.random() * BOOKS.length)];
    const bookId = book.id;
    setContent(bookId);
}

function getSuggestions(input) {
    return BOOKS.filter((book) => book.name.toLowerCase().includes(input.toLowerCase()));
}

export function showSearchResults(input) {
    _booksSuggestion.classList.remove("hide");
    _content.onclick = (event) => _booksSuggestion.classList.add("hide");
    const suggestions = getSuggestions(input);
    const ul = document.createElement('ul');
    ul.id="search-result"
    ul.onclick = (event) => {
        const bookId = event.target.dataset.id;
        setContent(bookId);        
    }
    const items = `${suggestions.map((book) => `<li data-id="${book.id}">${book.name}</li>`).join('')}`;

    ul.innerHTML = items;

    _booksSuggestion.innerHTML = "";
    _booksSuggestion.append(ul);
}

function setContent(bookId) {
    currentBookId = bookId;
    const book = BOOKS.find((book) => book.id === bookId);
    if (book) {
        fetch(book.url)
        .then((response) => response.text())
        .then((content) => {
            _content.innerHTML = content;
            const paragraph = document.createElement('div');
            paragraph.classList.add("paragraph");
            _content.append(paragraph);
            _booksSuggestion.classList.add("hide");
            window.scrollTo(0, 0);
            
        });
    }
}



document.onscroll = () => {
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
    let windowRelativeTop = document.documentElement.scrollTop;
    // если пользователь прокрутил достаточно далеко (< 100px до конца)
    if (windowRelativeBottom <= document.documentElement.clientHeight) {                       
        let nextBookId;     // создаем переменную для айди следующей книги
        BOOKS.find((    // перебираем наш список
            item,  // текущий элемент в нашем списке
            ind    // текущий индекс нашего элемента в списке         
        ) => {
            if (item.id === currentBookId) {  // сравниваем айди нашего элемента с текущим айди
                nextBookId = BOOKS[ind + 1] ? BOOKS[ind + 1].id : BOOKS[0].id; // записываем в переменную индекс следующего элемента
                return true; // возращяем ИСТИНА чтобы программа остановилась и не читала список дальше
            }
        });
        setContent(nextBookId); // используем нашу новую переменную , которая содержит в себе следующую книгу
        // если прокрутил наверх

    }  
    if (windowRelativeTop == 0) {
        let previousBookId;
        BOOKS.find((
            item, ind
        ) => {
            if (item.id === currentBookId) {
                previousBookId = BOOKS[ind -1]? BOOKS[ind -1].id : BOOKS[0].id;
                return true;
            }
        });
        setContent(previousBookId);
    };
};

 