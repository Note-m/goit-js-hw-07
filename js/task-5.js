function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChangeColor = document.querySelector('.change-color');
const bodyBgcCurrent = document.querySelector('body');
const bgcSpanText = document.querySelector('span.color');

btnChangeColor.addEventListener('click', event => {
  bodyBgcCurrent.style.backgroundColor = getRandomHexColor();
  bgcSpanText.textContent = bodyBgcCurrent.style.backgroundColor;
});
