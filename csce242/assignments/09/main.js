const e1 = document.getElementById("e1");
const e2 = document.getElementById("e2");

const yoga = (e) => {
  let p = e.target.parentNode.querySelector("p");
  p.classList.toggle('hide');
}

document.querySelectorAll('img').forEach((img) => {
  img.onclick = yoga;
});

let direction = true;
let ballY = 0;
let start;

const moveBall = (e) => {
  console.log("working")
  const root = document.querySelector(":root");
  const soccer = document.getElementById("soccer");

  if(document.getElementById('start').innerHTML == "start") {
    document.getElementById('start').innerHTML = "stop";
    startBall = setInterval(() => {
      if (ballY == 420) {
        direction = false;
      }
      if(ballY == 0) {
        direction = true;
      }

      if(direction) {
        ballY++;
      } else {
        ballY--;
      }
      root.style.setProperty("--ballY", `${ballY}px`);
    }, 1);
  } else {
    document.getElementById('start').innerHTML = "start";
    clearInterval(startBall);
  }
};
