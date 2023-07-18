let number = 1;

function getRandomInt() {
  return Math.floor(Math.random() * 16);
}

function checkRandom(number) {
  while (typeof x === "undefined") {
    const randomnumber = getRandomInt();
    if (number !== randomnumber) {
      return randomnumber;
    }
  }
}

function removegoblin() {
  const delgoblin = document.querySelector(".goblin");
  if (delgoblin !== null) {
    delgoblin.remove();
  }
}
function newposition(number) {
  const arrcells = document.querySelectorAll(".cell");
  const cellforposition = arrcells[number];
  const newdiv = document.createElement("div");
  newdiv.classList.add("goblin");
  cellforposition.append(newdiv);
}

setInterval(() => {
  number = checkRandom(number);
  removegoblin();
  newposition(number);
}, 1000);
