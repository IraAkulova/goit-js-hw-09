import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";

const refs = {
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) { 
  e.preventDefault();
  const delay = e.target.delay.value;
  const step = e.target.step.value;
  const amount = e.target.amount.value;

  for (let i = 0; i < amount; i += 1) {
    const newDelay = Number(step) * Number(i) + Number(delay);
    createPromise(i + 1, newDelay)}};

function createPromise(position, delay) {
    
    return new Promise(() => {
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
        if (shouldResolve) {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        } else {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        }
      }, delay)
    })
};



