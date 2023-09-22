const fontSizeControlInputRef = document.getElementById('font-size-control');
const textspanOutputRef = document.getElementById('text');
textspanOutputRef.style.fontSize = `${fontSizeControlInputRef.value}px`;

fontSizeControlInputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    textspanOutputRef.style.fontSize = `${event.currentTarget.value}px`;
}