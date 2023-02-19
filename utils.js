// function transitionElement(){
//     document.onscroll = () => {
//         let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
        
//             // если пользователь прокрутил достаточно далеко (< 100px до конца)
//             if (windowRelativeBottom < document.documentElement.clientHeight + 100) {
//                 console.log("sf");
//             }
        
//         };
// }

function zoomPageInc(){
    zoomPage(1.1);
}

function zoomPageDec(){
    zoomPage(0.9);
}

function zoomReset() {
    zoomPage(0);
}

function zoomPage(scale) {
    const value = document.body.style.zoom;
    document.body.style.zoom=Number(value ? value : 1) * scale;
}
