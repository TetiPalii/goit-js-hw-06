function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const textRef = document.querySelector('.widget p span');
const backgroundRef = document.querySelector('.widget');
const body = document.body;


changeColorBtn.addEventListener('click', onBtnClick)
function onBtnClick() {
  body.style.backgroundColor = getRandomHexColor();
  textRef.textContent = getRandomHexColor();
}

