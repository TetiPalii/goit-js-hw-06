const inputRef = document.querySelector('#font-size-control');
inputRef.addEventListener('input', onInputRefAction);
function onInputRefAction(event) {
    const spanRef = document.querySelector('#text')
    spanRef.style.fontSize = '40px'
}