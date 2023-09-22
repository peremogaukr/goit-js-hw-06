const inputRef = document.getElementById('validation-input')
const inputDataLength = Number(inputRef.dataset.length);
inputRef.addEventListener('blur', onInputBlur);
inputRef.addEventListener('focus', onInputFocus);

function onInputBlur() {
  const inputValueLength = inputRef.value.trim().length;
  // console.log(typeof inputDataLength);
  // console.log(inputDataLength);
  // console.log(typeof inputValueLength);
  // console.log(inputValueLength);
  // console.log(inputValueLength === inputDataLength);

  if (inputValueLength === inputDataLength) {
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.add('invalid');
  }
};



function onInputFocus() {
  inputRef.classList.remove('valid', 'invalid');
};