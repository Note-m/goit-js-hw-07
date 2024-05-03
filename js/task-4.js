const formData = {};
const formSubmit = document.querySelector('.login-form');

document.addEventListener('submit', event => {
  event.preventDefault();
  if (
    document.querySelector('.email').value.trim() !== '' &&
    document.querySelector('.pass').value.trim() !== ''
  ) {
    for (const inp of formSubmit.elements) {
      if (inp.tagName === 'INPUT' && inp.name) {
        formData[inp.name] = inp.value.trim();
      }
    }
    console.log(formData);
  } else {
    alert('All form fields must be filled in');
  }

  formSubmit.reset();
});
