const cross = "cross";
const circle = "circle";

const boardPlace = document.querySelectorAll(".box");
const resetButton = document.getElementById("reset");

let turn = cross;

function placeMark(target,classAdd){
  if (turn == cross){
    target.innerHTML = "X";
    target.classList.add(classAdd);
    target.disabled=true;
    return turn = circle;
  }
  else {
    target.innerHTML = "O";
    target.classList.add(classAdd);
    target.disabled=true;
    return turn = cross;
  }
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
        turn=cross;
        chooseBox();
    });
}

function resetBox() {
    resetButton.addEventListener("click",reset)
}


chooseBox();