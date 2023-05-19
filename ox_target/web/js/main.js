import { createOptions } from './createOptions.js';

const optionsWrapper = document.getElementById('options-wrapper');
const body = document.body;
const eye = document.getElementById("eye");
let icon = null;

window.addEventListener('message', (event) => {
  optionsWrapper.innerHTML = '';
  
  switch (event.data.event) {
    
    case 'visible': {
      if (event.data.state) {
        if (eye.hasChildNodes()) eye.removeChild(icon);
        eye.classList.remove("active");
      }
      body.style.visibility = event.data.state ? 'visible' : 'hidden';
      return (eye.style.fill = 'black');
    }

    case 'leftTarget': {
      if (eye.hasChildNodes()) eye.removeChild(icon);
      eye.classList.remove("active");
      return (eye.style.fill = 'black');
    }

    case 'setTarget': {
      eye.style.fill = '#cfd2da';
      eye.classList.add('active');
      icon = document.createElement("i");
      icon.className = "fa-sm fa-solid fa-xmark";
      eye.appendChild(icon);
      if (event.data.options) {
        for (const type in event.data.options) {
          event.data.options[type].forEach((data, id) => {
            createOptions(type, data, id + 1);
          });
        }
      }
    }
  }
});
