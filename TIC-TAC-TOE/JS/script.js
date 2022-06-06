const cross = "cross";
const circle = "circle";

const boardPlace = document.querySelectorAll(".box");
const resetButton = document.getElementById("reset");
const winnerBox = document.getElementById("winner");
const winningCond = [
  [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
]

let turn = cross;

function placeMark(target){
    target.classList.add(turn);
    
    if (turn==cross){
      target.innerHTML = "X";
    }
    else{
      target.innerHTML = "O";
    }
    if (checkWin(turn)){
      winnerBox.innerHTML = `${turn} wins the game.`;
      boardPlace.forEach((box) =>
        box.removeEventListener("click",klik,{once:true})
        )}
    else if (isDraw()){
      winnerBox.innerHTML = "This game ends in draw.";
    }
    turn==cross ? turn = circle: turn = cross;
  }

function klik (opt) {
  const targeted = opt.target;
  placeMark(targeted,turn);
  }
  
function chooseBox () {
  boardPlace.forEach((box) => {
    box.addEventListener("click",klik,{once : true});
  });
  resetBox();
}

function reset() {
    boardPlace.forEach((box) => {
      box.innerHTML="";
      box.classList.remove("cross");
      box.classList.remove("circle");
      winnerBox.innerHTML = "";
      turn=cross;
      chooseBox();
    });
}

function checkWin(crosAndCirc) {
  return winningCond.some(combination => {
    return combination.every((index) => {
    return boardPlace[index].classList.contains(crosAndCirc)
  })
})
}

function isDraw () {
  return [...boardPlace].every(box => {
    return box.classList.contains(cross) || box.classList.contains(circle)
  })
}

function resetBox() {
    resetButton.addEventListener("click",reset)
}

chooseBox();