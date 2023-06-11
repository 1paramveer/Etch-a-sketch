document.addEventListener("DOMContentLoaded", () => {
  createBoard(16);
});

let sizeOption = document.querySelector("input");
sizeOption.addEventListener("change", () => {
  let selectedSize = sizeOption.value;
  if (selectedSize <= 100) {
    createBoard(selectedSize);
  } else {
    alert("Max value is 100");
  }
});

function createBoard(size) {
  let canvas = document.querySelector(".canvas");
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numsDivs = size * size;
  for (let i = 0; i < numsDivs; i++) {
    let div = document.createElement("div");
    let blackbtn = document.querySelector(".blackbtn");
    let randombtn = document.querySelector(".randombtn");
    let resetbtn = document.querySelector(".resetbtn");
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
    canvas.insertAdjacentElement("beforeend", div);

    blackbtn.addEventListener("click", () => {
      div.style.backgroundColor = "black";
    });
    randombtn.addEventListener("click", () => {
      div.style.backgroundColor = "black";
    });
    resetbtn.addEventListener("click", () => {
      div.style.backgroundColor = "white";
    });
  }
}
