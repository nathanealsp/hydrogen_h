// RANGE SLIDER
const rangeSlider = document.querySelector('input[type="range"]');
const log = document.querySelector('.log');
log.innerHTML = rangeSlider.value;
rangeSlider.addEventListener('input', () => (log.innerHTML = rangeSlider.value));

function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

capitalize('rarrdds');

// LIST
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const input = form.querySelector('input');
const newLi = document.createElement('li');
const
  // ADDING ELEMENT
  // TIMELINE
  form.addEventListener('submit', e => {
    e.preventDefault();

    const newText = capitalize(input.value);
    input.value = '';
    if (newLi.innerHTML !== newText) {
      newLi.innerHTML = newText;
      return ul.appendChild(newLi);

      // return ul.appendChild(newLi);
    }
  });
