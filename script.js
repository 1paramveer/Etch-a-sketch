document.addEventListener("DOMContentLoaded", () => {
  createBoard(16);
});

let sizeOption = document.querySelector("input");
sizeOption.addEventListener("change", () => {
  let selectedSize = sizeOption.value;
  createBoard(selectedSize);
});

function createBoard(size) {
  let canvas = document.querySelector(".canvas");
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numsDivs = size * size;
  for (let i = 0; i < numsDivs; i++) {
    let div = document.createElement("div");
    div.style.background = "yellow";
    canvas.insertAdjacentElement("beforeend", div);
  }
}
