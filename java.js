const container = document.querySelector("#container");
const newPad = document.querySelector("#newPad");
const menu = document.querySelector("#menu");
let num = 100;
let pixelHeight = 500 / num;
let pixelWidth = 500 / num;

// Create container full of clickable square divs
function makeEtch(num) {
  for (let i = 0; i < num; i++) {
    const row = container.appendChild(document.createElement("div"));
    for (let j = 0; j < num; j++) {
      const square = document.createElement("div");
      square.style.height = pixelHeight + "px";
      square.style.width = pixelWidth + "px";
      let squareId = (Math.random() * (i + j));
      square.setAttribute("id", squareId);
      square.className = "pixel";
      row.appendChild(square);
    }
  }
}

// Set div background on mousedown
container.addEventListener("mouseover", function(e) {
  if (isNaN(e.target.id)) {}
  document.getElementById(e.target.id).id = "clicked";
})

// Create new sketchpad
newPad.addEventListener("click", () => {
  container.innerHTML = container.innerText;
  num = window.prompt("Set size: 2 - 100");
  if (isNaN(num)) {
    num = window.prompt("Please choose number: 2 - 100");
  }
  while (num < 2 || num > 100) {
    num = window.prompt("Please set size: 2 - 100");
  }
  pixelHeight = 500 / num;
  pixelWidth = 500 / num;
  makeEtch(num);
});

makeEtch(num);