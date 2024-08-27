let days = document.getElementById("days");
let hours = document.getElementById("hours");
let mins = document.getElementById("mins");
let secs = document.getElementById("secs");


let gradDate = new Date("May 10, 2025 00:00:00").getTime();
let y = setInterval(()=> {
  let now = new Date().getTime();
  let remainer = gradDate - now;

  days.innerText = Math.floor(remainer / (1000 * 60 * 60 * 24));
  hours.innerText = Math.floor((remainer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  mins.innerText = Math.floor((remainer % (1000 * 60 * 60)) / (1000 * 60));
  secs.innerText = Math.floor((remainer % (1000 * 60)) / 1000);
}, 1000)

