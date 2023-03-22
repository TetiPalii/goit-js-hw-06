function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainerRef = document.querySelector('#boxes');
const inputRef = document.querySelector('[type="number"]');
const amount = inputRef.value;



createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);


function onCreateBtnClick() {
  createBoxes(amount)
 }
function onDestroyBtnClick() { }

function createBoxes(amount) {
  return(amount)
  
  const box = document.createElement("div")
  box.style.backgroundColor  = "red";
  box.style.width = "30px";
  box.style.height = '30px';
  boxesContainerRef.append(box)
  // console.log(boxesContainerRef.children.length)

}

function destroyBoxes() {
  
}