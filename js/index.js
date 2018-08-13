const ny = document.querySelector('input[type="range"]');
console.log(ny);
const log = document.querySelector('.log');
log.innerHTML = ny.value;
ny.addEventListener('input', () => {
  console.log(ny.value);
  console.log((log.innerHTML = ny.value));
});
