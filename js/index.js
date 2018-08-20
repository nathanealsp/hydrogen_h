// RANGE SLIDER
const rangeSlider = document.querySelector('input[type="range"]');
const log = document.querySelector('.log');
log.innerHTML = rangeSlider.value;
rangeSlider.addEventListener('input', () => (log.innerHTML = rangeSlider.value));

// LIST
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const input = form.querySelector('input');

// ADDING ELEMENT
// TIMELINE
form.addEventListener('submit', e => {
  e.preventDefault();
  const newLi = document.createElement('li');
  const newText = input.value;
  input.value = '';
  // if (newLi.innerHTML !== '') {
  newLi.innerHTML = newText;
  ul.appendChild(newLi);
  // }
});
