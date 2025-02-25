let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;   //playerX , playerO


// Wining Patterns 
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame = () => {
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

//Calling value inside the box
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if(turnO) {  //playerO
            box.innerText = "O";
            box.style.color="#b0413e";
            turnO = false;
        } else {   //playerX
            box.innerText = "X";
            box.style.color="blue";   //Setting different colour for X
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

//For disabling boxes ones we get the winner
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

// For enabling boxes ones the reset button is clicked or game is reset
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


// TO display Winner
const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

//For checking Winner
const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};



newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
