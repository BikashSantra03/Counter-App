const countValue = document.querySelector("#counter");
const incrementSound = document.querySelector("#sound-incr");
const decrementSound = document.querySelector("#sound-decr");
const incrementSound_10 = document.querySelector("#sound-incr10");
const decrementSound_10 = document.querySelector("#sound-decr10");
const resetSound = document.querySelector("#sound-reset");
const incrImage = document.querySelector(".incr-happy");
const decrImage = document.querySelector(".decr-sad");
const startImage = document.querySelector(".start-img");

let increment = () => {
  let value = parseInt(countValue.innerText);
  value += 1;
  countValue.innerText = value;
  startImage.style.opacity = 0;
  decrImage.style.opacity = 0;
  incrImage.style.opacity = 1;

  incrementSound.currentTime = 0;
  incrementSound.play();
};

let decrement = () => {
  let value = parseInt(countValue.innerText);
  value -= 1;
  countValue.innerText = value;
  startImage.style.opacity = 0;
  incrImage.style.opacity = 0;
  decrImage.style.opacity = 1;
  decrementSound.currentTime = 0;
  decrementSound.play();
};

let increment_10 = () => {
  let value = parseInt(countValue.innerText);
  value += 10;
  countValue.innerText = value;
  startImage.style.opacity = 0;
  decrImage.style.opacity = 0;
  incrImage.style.opacity = 1;
  incrementSound_10.currentTime = 0;
  incrementSound_10.play();
};

let decrement_10 = () => {
  let value = parseInt(countValue.innerText);
  value -= 10;
  countValue.innerText = value;
  startImage.style.opacity = 0;
  incrImage.style.opacity = 0;
  decrImage.style.opacity = 1;
  decrementSound_10.currentTime = 0;
  decrementSound_10.play();
};

let reset = () => {
  countValue.innerText = 0;
  incrImage.style.opacity = 0;
  decrImage.style.opacity = 0;
  startImage.style.opacity = 1;

  resetSound.currentTime = 0;
  resetSound.play();
};
