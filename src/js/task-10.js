function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainerRef = document.querySelector('#boxes');
const inputRef = document.querySelector('[type="number"]');




createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);



function onCreateBtnClick() {
createBoxes(inputRef.value)
}
  
function onDestroyBtnClick() {
 
 }

function createBoxes(amount) {

  for (let i = 0; i < Number(amount); i += 1){
    const box = `<div class = "box"></div>`;
    const allBoxes = allBoxes + box;
    console.log(allBoxes)
  }
   
  boxesContainerRef.insertAdjacentHTML("afterbegin", allBoxes.join(" "))
  
 
  return boxesContainerRef
}






