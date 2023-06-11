let sizeOption = document.querySelector("input");
let canvas = document.querySelector(".canvas");
let playGame = document.querySelector(".playGame");

document.addEventListener("DOMContentLoaded", () => {
  sizeOption.addEventListener("change", () => {
    let selectedSize = sizeOption.value;
    if (selectedSize <= 32) {
      createBoard(selectedSize);
    } else {
      alert("Max value is 32, It just crashes on higher inputs");
    }
  });
});

function createBoard(size) {
  canvas.innerHTML = "";
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
    div.addEventListener("click", () => {
      div.style.backgroundColor = `black`;
    });
    div.style.border = `1px solid rgba(0, 0, 0, 0.39)`;
    div.style.margin = `2px`;

    blackbtn.addEventListener("click", () => {
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = `black`;
      });
    });
    randombtn.addEventListener("click", () => {
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = `hsl(${Math.random() * 360},100%,50%)`;
      });
    });
    resetbtn.addEventListener("click", () => {
      div.style.backgroundColor = "white";
    });
  }
}
