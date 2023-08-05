import { createOptions } from "./createOptions.js";

const optionsWrapper = document.getElementById("options-wrapper");
const body = document.body;
const eye = document.getElementById("eye");
const eyeicon = document.getElementById("eyeicon");

window.addEventListener("message", (event) => {
  optionsWrapper.innerHTML = "";

  switch (event.data.event) {
    case "visible": {
      if (event.data.state) {
        eye.classList.remove("active");
      }
      eyeicon.style.visibility = "hidden";
      body.style.visibility = event.data.state ? "visible" : "hidden";
      return;
    }

    case "leftTarget": {
      eyeicon.style.visibility = "hidden";
      eye.classList.remove("active");
      return;
    }

    case "setTarget": {
      eye.classList.add("active");
      eyeicon.style.visibility = "visible";
      if (event.data.options) {
        for (const type in event.data.options) {
          event.data.options[type].forEach((data, id) => {
            createOptions(type, data, id + 1);
          });
        }
      }

      if (event.data.zones) {
        for (let i = 0; i < event.data.zones.length; i++) {
          event.data.zones[i].forEach((data, id) => {
            createOptions("zones", data, id + 1, i + 1);
          });
        }
      }
    }
  }
});