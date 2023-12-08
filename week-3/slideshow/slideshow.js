const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here

// let counter = 0;
// const img = document.getElementById("carousel-img");
// img.setAttribute("src", images[counter]);
// function forwardImg() {
//   if (counter === 2) {
//     img.setAttribute("src", images[counter]);
//     counter = 0;
//   } else {
//     counter++;
//     img.setAttribute("src", images[counter]);
//   }
// }
// const forward = document.getElementById("forward-btn");
// forward.addEventListener("click", forwardImg);

// const backward = document.getElementById("backward-btn");
let forwardInterval;
let backInterval;
let counter = 0;
let inputTimer = 3000;
const img = document.getElementById("carousel-img");
img.setAttribute("src", images[counter]);
function forwardAction() {
  if (counter === 2) {
    counter = 0;
    img.setAttribute("src", images[counter]);
  } else {
    counter++;
    img.setAttribute("src", images[counter]);
  }
}
////setting up backward function
function backwardAction() {
  if (counter === 0) {
    counter = 2;
    img.setAttribute("src", images[counter]);
  } else {
    counter--;
    img.setAttribute("src", images[counter]);
  }
}

///// setting up forward button///////
const forwardBtn = document.getElementById("forward-btn");
forwardBtn.addEventListener("click", forwardAction);

/////////////set up for backward button/////////////////////////
const backWard = document.getElementById("backward-btn");
backWard.addEventListener("click", backwardAction);

const autoBack = document.getElementById("auto-backward-btn");
autoBack.addEventListener("click", autoBackImg);

function autoBackImg() {
  backInterval = setInterval(backwardAction, inputTimer);
  clearInterval(forwardInterval);
}
const autoFor = document.getElementById("auto-forward-btn");
autoFor.addEventListener("click", autoForImg);

function autoForImg() {
  forwardInterval = setInterval(forwardAction, inputTimer);
  clearInterval(backInterval);
}
const stop = document.getElementById("stop-btn");
stop.addEventListener("click", stopImg);
function stopImg() {
  img.setAttribute("src", images[0]);
  clearInterval(backInterval);
  clearInterval(forwardInterval);
}
const setTime = document.getElementById("set-time");

const setButton = document.getElementById("set");
setButton.addEventListener("click", setTimBtn);
function setTimBtn() {
  inputTimer = setTime.value * 1000;
  stopImg();
  setTime.value = "";
}
