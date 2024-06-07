const container = document.querySelector("#container");
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

container.addEventListener("mousedown", function(e) {
  document.getElementById(e.target.id).id = "clicked";
})

makeEtch(num);