const command = document.getElementById("command");
let image = document.getElementById("change");

const e1 = document.getElementById("e1");
const e2 = document.getElementById("e2");
const range = document.getElementById("range");
const exer1box = document.getElementById("exercise1");
const arrow = document.getElementById("arrow");

const link1 = (e) => {
  e.preventDefault();
  image.src = "";
  range.style.display = "none";
  exer1box.style.display = "block";
}

const link2 = (e) => {
  e.preventDefault();
  image.src = "";
  range.style.display = "block";
  exer1box.style.display = "none";
}

const changeImg = () => {
  if(command.value.charAt(command.value.length - 1) == "s") {
    image.src = "images/images/shovel.jpg";
  }
  if(command.value.charAt(command.value.length - 1) == "w") {
    image.src = "images/images/work.jpg";
  }
  if(command.value.charAt(command.value.length - 1) == "b") {
    image.src = "images/images/read.jpg";
  }
  if(command.value.charAt(command.value.length - 1) == "c") {
    image.src = "images/images/clown.jpg";
  }
  if(command.value.charAt(command.value.length - 1) == "p") {
    image.src = "images/images/birthday.jpg";
  }
  if(command.value.charAt(command.value.length - 1) == "r") {
    image.src = "images/images/rain.jpg";
  }
}

const rangeChangeImg = () => {
  if(range.value == 1) {
    image.src = "images/images/yoga1.jpg";
  }
  if(range.value == 2) {
    image.src = "images/images/yoga2.jpg";
  }
  if(range.value == 3) {
    image.src = "images/images/yoga3.jpg";
  }
  if(range.value == 4) {
    image.src = "images/images/yoga4.jpg";
  }
  if(range.value == 5) {
    image.src = "images/images/yoga5.jpg";
  }
  if(range.value == 6) {
    image.src = "images/images/yoga6.jpg";
  }
  if(range.value == 7) {
    image.src = "images/images/yoga7.jpg";
  }
  if(range.value == 8) {
    image.src = "images/images/yoga8.jpg";
  }
}

const nav = () => {
  document.getElementById("nav").classList.toggle("active");
  arrow.classList.toggle("arrowactive");
}

range.onchange = rangeChangeImg;
e1.onclick = link1;
e2.onclick = link2;
command.onkeyup = changeImg;
arrow.onclick = nav;