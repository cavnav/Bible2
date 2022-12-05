
const BOOKS = [{
        id: "001",
        name: "Бытие",/* genesis.html */
    },
    {
        id: "002",
        name: "Исход", /*exodus.html */
    },
    {
        id: "003",
        name: "Ливит",/*leviticus.html */
    },  
    {
        id: "004",
        name: "Числа",/*numeri.html*/

    },
   /* "004": "numeri.html",
    "005": "deuteronomii.html",
    "006": "iosue.html",
    "007": "iudicum.html",
    "008": "ruth.html",
    "009": "I samuelis.html",
    "010": "II samuelis.html",
    "011": "I regum.html",
    "012": "II regum.html",
    "013": "I paralipomenon.html",
    "014": "II paralipomenon.html",
    "015": "esdrae.html",
    "016": "nehemiae.html",
    "017": "esther.html",
    "018": "iob.html",
    "019": "",
    "020": "",
    "021": "",
    "022": "",
    "023": "",
    "024": "",
    "025": "",
    "026": "",
    "027": "",
    "028": "",
    "029": "",
    "030": "",
    "031": "",
    "032": "",
    "033": "",
    "034": "",
    "035": "",
    "036": "",
    "037": "",
    "038": "",
    "039": "",
    "040": "",
    "041": "",
    "042": "",
    "043": "",
    "044": "",
    "045": "",
    "046": "",
    "047": "",
    "048": "",
    "049": "",
    "050": "",
    "051": "",
    "052": "",
    "053": "",
    "054": "",
    "055": "",
    "056": "",
    "057": "",
    "058": "",
    "059": "",
    "060": "",
    "061": "",
    "062": "",
    "063": "",
    "064": "",
    "065": "",
    "066": "" 
}];*/
]
/*
function getSuggestions(input) {
    return BOOKS.filter((book) => book.name.toLowerCase().includes(input.toLowerCase()));
}

function showItems(input) {
    const suggestions = getSuggestions(input);
    const ul = document.createElement('ul');
    ul.onclick = (event) => console.log(event.target.dataset.id);
    const items = `${
        suggestions.map((book) => `<li data-id="${book.id}">${book.name}</li>`).join('')
    }`;

    ul.innerHTML = items;

    booksSuggestion.innerHTML = "";
    booksSuggestion.append(ul);
}*/