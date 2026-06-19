const formEl = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};
setupValueFromLocalStorage();

formEl.addEventListener('input', onTextOutput);
formEl.addEventListener('submit', onSendFedbackForm);

function onTextOutput(event) {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  }

  if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function setupValueFromLocalStorage() {
  const formSavedValues = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (!formSavedValues) return;

  formData.email = formSavedValues.email || '';
  formData.message = formSavedValues.message || '';

  formEl.elements.email.value = formData.email;
  formEl.elements.message.value = formData.message;
}

function onSendFedbackForm(event) {
  event.preventDefault();

  if (
    formEl.elements.email.value.trim() === '' ||
    formEl.elements.message.value.trim() === ''
  ) {
    alert('Fill please all fields');
  } else {
    formData.email = formEl.elements.email.value.trim();
    formData.message = formEl.elements.message.value.trim();
    console.log(formData);
    localStorage.clear('feedback-form-state');
    formEl.reset();
  }
}
