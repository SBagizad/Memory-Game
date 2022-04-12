const cards = ["😃", "🥳", "🥰 ", "🤩", "😇", "😴", " 🤗", " 😜", "😃", "🥳", "🥰", "🤩", "😇", "😴", " 🤗", " 😜"]
const card2= 
function init() {              //מאתחל את הקוד את הלוח 
    shuffle(cards); //  ועושה ערבוב קוראת למערך
    const board = document.getElementById("board"); // קורא לאלמנט
    for (i in cards) {// עבור כל קלף ,כך תא קוראת לפונקציה של create card
        const element = createCard(i)
        board.appendChild(element)
    }

}
init();//קריאה לפנוקציה והקלפים  עולים

function createCard(idx) {//  שזה בעצם עבור כל קלףמכניסים את האינדקס 
    const cardEl = document.createElement("div")
    cardEl.innerHTML='<img src=" >'
    cardEl.style.cursor = "pointer";
    // cardEl.innerHTML=cards[idx];// זה התוכן של הקלף (אימוג'י)
    cardEl.addEventListener("click", element => cardEl.innerHTML = cards[idx]); // מראה של התוכן
    cardEl.id = idx// ID של כל קלף
    cardEl.className = "cards col-6 col-md-4 col-lg-2", // פריסה של הקלפים על המסך 

    return cardEl
}

function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}




