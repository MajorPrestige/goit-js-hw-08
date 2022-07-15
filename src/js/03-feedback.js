import localStorageApi from './localstorage';
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEmailEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

const FEEDBACK_FORM_KEY = 'feedback-data';
const feedbackFormData = {};

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

formInputValue();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorageApi.remove(FEEDBACK_FORM_KEY);
}

function onFormInput(e) {
  feedbackFormData[e.target.name] = e.target.value;
  localStorageApi.save(FEEDBACK_FORM_KEY, feedbackFormData);
}

function formInputValue() {
  const inputValue = localStorageApi.load(FEEDBACK_FORM_KEY);

  if (inputValue === undefined) {
    return;
  }

  inputEmailEl.value = inputValue.email;
  textareaEl.value = inputValue.message;
}

// textareaValue();
// function onFormInput(e) {
//   const value = e.target.value;
//   localStorageApi.save(FEEDBACK_FORM_KEY, value);
// }

// function textareaValue() {
//   const savedMessage = localStorageApi.load(FEEDBACK_FORM_KEY);

//   if (savedMessage) {
//     textareaEl.value = savedMessage;
//   }
// }
