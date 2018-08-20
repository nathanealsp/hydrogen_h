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

// ADDING ELEMENT
// TIMELINE
form.addEventListener('submit', e => {
  e.preventDefault();
  const newLi = document.createElement('li');
  const newH1 = document.createElement('h1');
  const button = document.createElement('button');
  const span = document.createElement('span');
  button.setAttribute('id', 'delete');
  button.innerHTML = 'DELETE';
  console.log(button);
  span.appendChild(button);
  console.log(span);
  newLi.appendChild(newH1);
  newLi.appendChild(span);
  console.log(newLi);
  const newText = capitalize(input.value);
  input.value = '';
  // if (newLi.innerHTML !== '') {
  newH1.innerHTML = newText;
  return ul.appendChild(newLi);
  // }
});

// DELETE METHOD
ul.addEventListener('click', e => {
  const toDelete = e.target.parentNode.parentNode;
  console.log(toDelete);
  ul.removeChild(toDelete);
});
