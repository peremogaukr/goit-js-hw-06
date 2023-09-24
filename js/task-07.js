const sizeControl = document.getElementById("font-size-control");
const textAbracadabra = document.getElementById("text");

sizeControl.addEventListener("input", () => {
  const fontSize = sizeControl.value;
  textAbracadabra.style.fontSize = `${fontSize}px`;
});