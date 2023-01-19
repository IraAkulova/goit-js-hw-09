
const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  bodyEl: document.querySelector('body'),
};
let timerId = null;
  
refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  refs.startBtn.setAttribute('disabled', '');
  refs.stopBtn.removeAttribute('disabled', '');

  switchBodyColor();
  timerId = setInterval(switchBodyColor, 1000);
 };

function onStopBtnClick() {
  refs.stopBtn.setAttribute('disabled', '');
  refs.startBtn.removeAttribute('disabled', '');

  clearInterval(timerId);
 };

function switchBodyColor() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
