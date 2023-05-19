import { createOptions } from './createOptions.js';

const optionsWrapper = document.getElementById('options-wrapper');
const body = document.body;
const eye = document.getElementById('eye');
let icon = null;

window.addEventListener('message', (event) => {
  optionsWrapper.innerHTML = '';

  switch (event.data.response) {
    case 'openTarget': {
      body.style.visibility = 'visible';
      return;
    }
    case 'closeTarget': {
      body.style.visibility = 'hidden';
      return;
    }

    case 'leftTarget': {
      if (eye.hasChildNodes()) eye.removeChild(icon);
      eye.classList.remove('active');
      return;
    }

    case 'validTarget': {
      eye.style.fill = '#cfd2da';
      eye.classList.add('active');
      icon = document.createElement('i');
      icon.className = 'fa-sm fa-solid fa-xmark';
      eye.appendChild(icon);
      if (event.data.data) {
        for (let [index, itemData] of Object.entries(event.data.data)) {
          if (itemData !== null) {
            index++;
            createOptions(index, itemData);
          }
        }
      }
    }
  }
});
