let color = "black";
let slider =  document.querySelector("#slider");
let valueSpan = document.querySelector("#valueSpan");


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

//Change the number of divs inside the board through the range input 
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

//Slider value preview
valueSpan.textContent = `${slider.value}x${slider.value}`; 
slider.addEventListener("input", (event) => {
    valueSpan.textContent = `${event.target.value}x${event.target.value}`;
  })