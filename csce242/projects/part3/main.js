const navButton = document.getElementById("smallnav");
const nav = document.getElementById("nav");

const smallnav = () => {
  nav.classList.toggle("active");
}

navButton.onclick = smallnav;

