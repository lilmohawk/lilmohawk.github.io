let changeimg = document.getElementById("change");

let rotateimg = document.getElementById("slider");

let star = document.getElementById("star");

let change = () => {
  changeimg.src = "image/tree.png"
}

changeimg.onclick = change;

rotateimg.oninput = function() {
  const root = document.querySelector(":root");
  root.style.setProperty("--deg", this.value + "deg");
}

let addStar = () => {
  const area = document.getElementById("star");
  const star = document.createElement("img");
  star.classList.add("star");
  star.src = "image/star.png";
  area.append(star);
}

star.onclick = addStar;