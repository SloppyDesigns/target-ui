import { createOptions } from './createOptions.js';

const optionsWrapper = document.getElementById('options-wrapper');
const body = document.body;
const eye = document.getElementById('eye');
const eyeicon = document.getElementById("eyeicon");

window.addEventListener('message', (event) => {
  optionsWrapper.innerHTML = '';

  switch (event.data.response) {
    case 'openTarget': {
      body.style.visibility = 'visible';
      return;
    }
    case 'closeTarget': {
      eyeicon.style.visibility = "hidden";
      body.style.visibility = 'hidden';
      return;
    }

    case 'leftTarget': {
      eyeicon.style.visibility = "hidden";
      eye.classList.remove("active");
      return;
    }

    case 'foundTarget': {
      eye.classList.add('active');
      eyeicon.style.visibility = "visible";
      return;
    }

    case 'validTarget': {
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
