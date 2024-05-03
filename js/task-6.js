function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputValue = document.querySelector('.input-nuber');
const boxes = document.querySelector('.boxes');
const BtnCreate = document.querySelector('.button-create');
const BtnDestroy = document.querySelector('.button-delete');

function createBoxes(amount) {
  if (amount <= 100) {
    let size = 30;
    for (let index = 0; index < amount; index++) {
      const divBox = document.createElement('div');
      divBox.style.width = size + 'px';
      divBox.style.height = size + 'px';
      divBox.style.background = getRandomHexColor();
      size += 10;
      boxes.appendChild(divBox);
    }
  } else {
    alert(
      'You have entered too many items to create, please enter a number between 1 and 100 inclusive'
    );
  }
}

BtnCreate.addEventListener('click', event => {
  document.querySelectorAll('.boxes div').forEach(box => {
    box.remove();
  });
  createBoxes(inputValue.value);
});
BtnDestroy.addEventListener('click', event => {
  document.querySelectorAll('.boxes div').forEach(box => {
    box.remove();
  });
});
