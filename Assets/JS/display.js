const themeSwitcher = document.querySelector('#btn');
const container = document.querySelector('#container');

let mode = 'dark';


btn.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }

  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});