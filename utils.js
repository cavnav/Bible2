// function transitionElement(){
//     document.onscroll = () => {
//         let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
        
//             // если пользователь прокрутил достаточно далеко (< 100px до конца)
//             if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
//                 console.log("sf");
//             }
        
//         };
// }

document.onscroll = () => {
    let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
    
        // если пользователь прокрутил достаточно далеко (< 100px до конца)
        if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
            console.log(123);
            // nextBookId = это айди следующей книги
            // BOOKS bookId текущей

            // В спискеВсехКниг найти книгу с айдиТекущейКниги => текущаяКнига
            // Перейти к следующей книге и обновить глобальныйАйди
            // перейти к содержимому этой книги


            // setContent(nextBookId);
        }
    
    };

