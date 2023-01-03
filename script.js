let color = "black";

function generateBoard(size){
    let board = document.querySelector(".board");
    let cells = board.querySelectorAll("div");
    cells.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i =0 ; i<size*size; i++){
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", colorSquare);
        cell.addEventListener("mousedown", colorSquare);
        board.insertAdjacentElement("beforeend", cell);
    }
}

generateBoard(16);

function changeSize(input){
    generateBoard(input);
}

function colorSquare(){
    this.style.backgroundColor = color;
}

function changeColor(choice){
    color = choice;
}

function clearBoard(){
    let board = document.querySelector(".board");
    let cells = board.querySelectorAll("div");
    cells.forEach((div) => div.style.backgroundColor = "white");
}