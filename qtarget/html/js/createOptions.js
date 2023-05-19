import { fetchNui } from './fetchNui.js';

const body = document.body;
const optionsWrapper = document.getElementById('options-wrapper');

export function createOptions(id, data) {
  const option = document.createElement('li');
  option.innerHTML = `<a><i class="fa-fw ${data.icon} option-icon" style="color:${data.iconColor || '#2d2f32'}"></i>${data.label}</a>`;
  option.addEventListener('click', () => {
    fetchNui('selectTarget', id)
    body.style.visibility = 'hidden';
  });
  optionsWrapper.appendChild(option);
}
