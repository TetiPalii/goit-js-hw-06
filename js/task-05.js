const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

inputRef.addEventListener("input", onInputRefAction)

function onInputRefAction(event) {
    spanRef.textContent = event.currentTarget.value
}