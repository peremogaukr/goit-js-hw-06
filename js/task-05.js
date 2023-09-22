const refs = {
    input: document.getElementById('name-input'),
    spanOutput: document.getElementById('name-output')
}

refs.input.addEventListener('input', onInputChange)

function onInputChange(event) {
    refs.spanOutput.textContent = event.currentTarget.value.trim() || `Anonymous`;
}