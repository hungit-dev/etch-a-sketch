//Original grid
const container = document.querySelector(".container");
for (let i = 1; i <= 256; i++) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const box = document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);
  box.style.opacity = 0.3;

  let currentValue = 0;
  box.addEventListener("mouseenter", function () {
    box.style.backgroundColor = "#" + randomColor;
    currentValue += 0.1;
    console.log(currentValue);
    box.style.opacity = currentValue;
  });
}

const button = document.querySelector("button");
//New grid
button.addEventListener("click", function () {
  let items = document.querySelectorAll(".box");
  let number = Number(prompt("what's your number?"));
  if (number <= 100) {
    items.forEach((item) => {
      item.remove();
    });

    for (let i = 1; i <= number * number; i++) {
      const newGrid = document.createElement("div");
      newGrid.classList.add("box");
      container.appendChild(newGrid);
      newGrid.style.border = "0.5px solid black";
      newGrid.style.width = 450 / number + "px";
      newGrid.style.height = 450 / number + "px";
      newGrid.style.opacity = "0.3";
      let currentValue = 0;
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      newGrid.addEventListener("mouseenter", function () {
        newGrid.style.backgroundColor = "#" + randomColor;
        currentValue += 0.1;
        console.log(currentValue);
        newGrid.style.opacity = currentValue;
      });
    }
  }
  if (number > 100) {
    alert("It's not an appropriate value!");
  }
});
