const nameOutput = document.querySelector('#name-output');

document.addEventListener('input', event => {
  nameOutput.textContent = event.target.value;

  if (nameOutput.textContent.trim() === '') {
    nameOutput.textContent = 'Anonymous';
  }
});
