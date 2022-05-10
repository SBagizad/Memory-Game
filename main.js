const cards = ["😃", "🥳", "🥰 ", "🤩", "😇", "😴", " 🤗", " 😜", "😃", "🥳", "🥰", "🤩", "😇", "😴", " 🤗", " 😜"]
let openCards = []
let cnt = 0;
let turn = 0;

let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
// const body = document.querySelector("body");
// let playerOne = document.createElement("div");
// let playerTwo = document.createElement("div");
// body.append(playerOne, playerTwo);
// playerTwo.className = "example";
// playerTwo.innerText = "How it look?";

// player1.innerText = `name:${players[0].name} score: ${players[0].score} `
// player2.innerText = `name:${players[1].name} score: ${players[1].score} `


let name1 = prompt("Please insert Player 1 Name:")
let name2 = prompt("Please insert Player 2 Name:")
let players = [createPlayer(name1), createPlayer(name2)];


function createPlayer(name, score = 0) {
    return {
        name,
        score
    }
}
turnClass()

function init() {              //מאתחל את הקוד את הלוח 
    shuffle(cards); //  ועושה ערבוב קוראת למערך
    const board = document.getElementById("board"); // קורא לאלמנט
    for (i in cards) {// עבור כל קלף כל תא קורא לפונקציה של create card
        const element = createCard(i)
        board.appendChild(element)
    }
    player1.innerText = `${players[0].name} score: ${players[0].score} `
    player2.innerText = `${players[1].name} score: ${players[1].score} `

}
init();//קריאה לפנוקציה והקלפים  עולים

function createCard(idx) {//  שזה בעצם עבור כל קלף מכניסים את האינדקס 
    const cardEl = document.createElement("div")
    cardEl.id = idx;
    cardEl.innerHTML = '  <img src="./images.jpg" height="180" width="150">';
    cardEl.style.cursor = "pointer";
    // cardEl.innerHTML=cards[idx];// זה התוכן של הקלף (אימוג'י)
    cardEl.addEventListener("click", e => {
        // מראה של התוכן
        cnt++
        if (cnt <= 2) {
            cardEl.innerHTML = cards[idx];
            openCards.push(cardEl.id)
        }
        if (cnt === 2) {
            console.log(players[turn++].name);

            if (turn === players.length) {
                turn = 0;
            }
            if (cards[openCards[0]] === cards[openCards[1]]) {
                turn--
                if (turn < 0) {
                    turn = players.length - 1
                }
                players[turn].score += 1

                setTimeout(() => {
                    // alert("very good!!!")
                    cnt = 0
                    openCards = []
                }, 500)
                removeEventListener

                console.log(players[turn].score);

            }
            else {
                setTimeout(() => {
                    // alert("try again!");
                    document.getElementById(openCards[0]).innerHTML = '<img src="./images.jpg" height="180" width="150">';
                    document.getElementById(openCards[1]).innerHTML = '<img src="./images.jpg" height="180" width="150">';
                    openCards = []
                    cnt = 0
                }, 1000)
            }
        }

        // ולשים את זה גם בהתחלה להפוך את זה לפוקנציה

        turnClass();

        player1.innerText = `${players[0].name} score: ${players[0].score} `
        player2.innerText = `${players[1].name} score: ${players[1].score} `
    });


    cardEl.className = "cards col-6 col-md-4 col-lg-2"; // פריסה של הקלפים על המסך 
    return cardEl
}

function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}

function turnClass() {
    const defClass = "col-12 col-sm-6 col-md-3 py-4 player"
    if (turn === 0) {
        player1.className = defClass + " turn"
        player2.className = defClass
    }
    else {
        player1.className = defClass
        player2.className = defClass + " turn"
    }
}


arr[0, 0] == arr[1, 1] == arr[2.2]
arr[0][1] == arr