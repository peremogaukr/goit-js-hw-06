const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const newUserAcc = {};

  formData.forEach((data, key) => {
    newUserAcc[key] = data;
  });

  if (!newUserAcc.email || !newUserAcc.password) {
    alert(`All input fields must be completed`);
  } else {
    console.log(`input data: `, newUserAcc);
  }
}