const inputRef = document.querySelector('#font-size-control');

inputRef.addEventListener('input', onInputRefAction);
function onInputRefAction(event) {
    console.log(event.currentTarget.value)
    const spanRef = document.querySelector('#text')
    spanRef.style.fontSize = event.currentTarget.value + "px";
}