const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const emailRef = event.currentTarget.elements.email;
  const passwordRef = event.currentTarget.elements.password;
  
  if (emailRef.value === '' || passwordRef.value === '') {
    alert('❌All form fields must be filled out!')    
  } else {
    const loginFormData = {
      [emailRef.name]: emailRef.value,
      [passwordRef.name]: passwordRef.value
    };
    console.log(loginFormData);
  }  
}