const amountNumber = document.querySelector("input[type ='number']");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxContainer = document.getElementById("boxes");

createButton.addEventListener("click", createInput);
destroyButton.addEventListener("click", destroyInput);

function createInput() {
  const amount = +amountNumber.value;
  boxContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {



    const box = document.createElement("div");
    const span = document.createElement("span");
    span.textContent = i + 1;
    box.style.width = "30px";
    box.style.height = "30px";
    box.style.marginRight = "10px";
    box.style.marginBottom = "10px";
    box.style.textAlign = "center";
    box.style.color = "#ffffff";
    box.style.backgroundColor = getRandomHexColor();
    box.appendChild(span);
    fragment.appendChild(box);


    
  }
  boxContainer.appendChild(fragment);
}

function destroyInput() {
  boxContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}