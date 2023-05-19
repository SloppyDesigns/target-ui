import { fetchNui } from './fetchNui.js';

const optionsWrapper = document.getElementById('options-wrapper');

export function createOptions(type, data, id) {
  if (data.hide) return;
  const option = document.createElement('li');
  option.innerHTML = `<a><i class="fa-fw ${data.icon} option-icon" style="color:${data.iconColor || '#2d2f32'}"></i>${data.label}</a>`;
  option.addEventListener('click', () => fetchNui('select', [type, id]));
  optionsWrapper.appendChild(option);
}
