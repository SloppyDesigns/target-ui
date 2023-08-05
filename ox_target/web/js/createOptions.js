import { fetchNui } from './fetchNui.js';

const optionsWrapper = document.getElementById('options-wrapper');

function onClick() {
  // when nuifocus is disabled after a click, the hover event is never released
  this.style.pointerEvents = "none";

  fetchNui("select", [this.targetType, this.targetId, this.zoneId]);
  // is there a better way to handle this? probably
  setTimeout(() => (this.style.pointerEvents = "auto"), 100);
}

export function createOptions(type, data, id, zoneId) {
  if (data.hide) return;
  const option = document.createElement('li');

  option.innerHTML = `<a><i class="fa-fw ${data.icon} option-icon" style="color:${data.iconColor || '#2d2f32'}"></i>${data.label}</a>`;
  option.targetType = type;
  option.targetId = id;
  option.zoneId = zoneId;

  option.addEventListener("click", onClick);
  optionsWrapper.appendChild(option);
}
