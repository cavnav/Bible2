import { BOOKS } from "./meta/booksIdMap.js";

let lastBookId;
let isScrollEnabled = true;

init();
 
function init() {
    _search.onkeyup = (event) => showSearchResults(event.target.value);
    _search.onclick = (event) => showSearchResults(event.target.value);
    const book = BOOKS[Math.floor(Math.random() * BOOKS.length)];
    const bookId = book.id;
    setContentAppend({ bookId })
}

function getSuggestions(input) {
    return BOOKS.filter((book) => book.name.toLowerCase().includes(input.toLowerCase()));
}

export function showSearchResults(input) {
    _booksSuggestion.classList.remove("hide");
    _content.onclick = (event) => _booksSuggestion.classList.add("hide");
    const suggestions = getSuggestions(input);
    const ul = document.createElement('ul');
    ul.id="search-result";
    ul.onclick = (event) => {
        if (!isScrollEnabled) return;
        const bookId = event.target.dataset.id;
        getContent({ bookId }) 
        .then((content) => { 
            _content.innerHTML = "";
            _content.append(getContentElement({ content })); 
            lastBookId = bookId; 
            enableScroll();
            window.scroll(0, 0);
        });         
    }
    const items = `${suggestions.map((book) => `<li data-id="${book.id}">${book.name}</li>`).join('')}`;

    ul.innerHTML = items;

    _booksSuggestion.innerHTML = "";
    _booksSuggestion.append(ul);
}     
 
function getContent({ 
    bookId 
}) {     
    const book = getBook(bookId); 
    if (!book.url) { 
        return Promise.reject(false);
    }
    return fetch(book.url).then((response) => response.text());      
} 
 
function getBook(bookId) { 
    return BOOKS.find((book) => book.id === bookId); 
} 
 
 
document.onwheel = () => { 
    if (!isScrollEnabled) return;
    enableScroll();
    const delta = 10;
    let windowRelativeTop = document.documentElement.scrollTop; 
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom; 
    console.log(windowRelativeBottom, document.documentElement.clientHeight)                 
    if (windowRelativeBottom  - delta < document.documentElement.clientHeight) {     
        const nextBookId = getNextBookId(lastBookId);                       
        setContentAppend({ bookId: nextBookId }); 
    } 
    console.log(windowRelativeTop);
    if (windowRelativeTop - delta <= 0) { 
        const prevBookId = getPrevBookId(lastBookId); 
        setContentPrepend({ bookId: prevBookId });       
    }    
}; 
 
function getBookInd(bookId) { 
    return BOOKS.findIndex((item) => item.id === bookId); 
} 
 
function getNextBookId(bookId) { 
    const curBookInd = getBookInd(bookId); 
    const nextBookId = BOOKS[curBookInd + 1] ? BOOKS[curBookInd + 1].id : BOOKS[0].id;  
    return nextBookId; 
} 
 
function getPrevBookId(bookId) { 
    const curBookInd = getBookInd(bookId); 
    const prevBookId = BOOKS[curBookInd - 1] ? BOOKS[curBookInd - 1].id : bookId;  
    return prevBookId; 
}

function setContentAppend({ bookId }) { 
    getContent({ bookId })
    .then((content) => {        
        _content.append(getContentElement({ content})); 
        lastBookId = bookId; 
    });
}
function setContentPrepend({bookId}) {
    getContent({ bookId })
    .then((content) => {        
        _content.prepend(getContentElement({ content}));
        lastBookId = bookId; 
    });
}

function getContentElement({ content }) {
    const paragraph = document.createElement('div');
    paragraph.classList.add("paragraph"); 
    const element = document.createElement('div');
    element.innerHTML = content;
    element.append(paragraph);
    return element;
}

function enableScroll() {
    isScrollEnabled = false; 
    setTimeout(() => isScrollEnabled = true, 1*1000);
}