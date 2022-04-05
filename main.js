const cards= ["A", "B", "c","A", "B", "c" ]
const board = document.getElementById("board")
for (i of cards){
const element = document.createElement("div")
element.innerHTML= i;
board.appendChild(element);
}