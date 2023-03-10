// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// import Notiflix from 'notiflix';
// import "notiflix/dist/notiflix-3.2.6.min.css";

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };
// flatpickr("#datetime-picker", options);


// const refs = {
//     inputEl: document.querySelector('input'),
//     startBtn: document.querySelector('[data-start]'),
//     timerEl: document.querySelector('.timer'),
//     fieldEl: document.querySelector('.field'),
//     daysEl: document.querySelector('[data-days]'),
//     hoursEl: document.querySelector('[data-hours]'),
//     minutesEl: document.querySelector('[data-minutes]'),
//     secondsEl: document.querySelector('[data-seconds]'),
// };
// let selectedDate = null;
// let currentDate = null;

// refs.startBtn.addEventListener('click', onStartBtnClick);
// refs.inputEl.addEventListener('input', onInputChange);
// refs.startBtn.setAttribute('disabled', '');

// function onInputChange(e) {
//     selectedDate = new Date(e.currentTarget.value);
//     currentDate = Date.now();
//     selectedDate - currentDate >= 0
//         ? refs.startBtn.removeAttribute('disabled', '')
//         : Notiflix.Notify.failure('Please choose a date in the future')
// };

// function onStartBtnClick() {
//     setInterval(timer, 1000);
//     refs.startBtn.setAttribute('disabled', '');
// };

// function timer() {
//     const diff = selectedDate - Date.now();
//     const days = addLeadingZero(Math.floor(diff / (1000 * 60 * 60 * 24)));
//     const hours = addLeadingZero(Math.floor((diff / (1000 * 60 * 60)) % 24));
//     const minutes = addLeadingZero(Math.floor((diff / (1000 * 60)) % 60));
//     const seconds = addLeadingZero(Math.floor((diff / 1000) % 60));

//     refs.daysEl.textContent = days;
//     refs.hoursEl.textContent = hours;
//     refs.minutesEl.textContent = minutes;
//     refs.secondsEl.textContent = seconds;
// };

// function addLeadingZero(value) {
//     return String(value).padStart(2, '0');
// };


import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const refs = {
    inputEl: document.querySelector('input'),
    startBtn: document.querySelector('[data-start]'),
    timerEl: document.querySelector('.timer'),
    fieldEl: document.querySelector('.field'),
    daysEl: document.querySelector('[data-days]'),
    hoursEl: document.querySelector('[data-hours]'),
    minutesEl: document.querySelector('[data-minutes]'),
    secondsEl: document.querySelector('[data-seconds]'),
};
refs.startBtn.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDates[0] - Date.now() >= 0
        ? refs.startBtn.removeAttribute('disabled', '')
        : Notiflix.Notify.failure('Please choose a date in the future')
  },
};
flatpickr("#datetime-picker", options);

refs.startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() { 
    setInterval(timer, 1000);
    refs.startBtn.setAttribute('disabled', '');
};

function timer() {
    const diff = new Date(refs.inputEl.value) - Date.now();
    const days = addLeadingZero(Math.floor(diff / (1000 * 60 * 60 * 24)));
    const hours = addLeadingZero(Math.floor((diff / (1000 * 60 * 60)) % 24));
    const minutes = addLeadingZero(Math.floor((diff / (1000 * 60)) % 60));
    const seconds = addLeadingZero(Math.floor((diff / 1000) % 60));

    refs.daysEl.textContent = days;
    refs.hoursEl.textContent = hours;
    refs.minutesEl.textContent = minutes;
    refs.secondsEl.textContent = seconds;
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};
