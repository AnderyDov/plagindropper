"use strict";
import "./style.css";
const pathes = {
  voron:
    "M456 0c-48.6 0-88 39.4-88 88v29.2L12.5 390.6c-14 10.8-16.6 30.9-5.9 44.9s30.9 16.6 44.9 5.9L126.1 384H259.2l46.6 113.1c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3L311.1 384H352c1.1 0 2.1 0 3.2 0l46.6 113.2c5 12.3 19.1 18.1 31.3 13.1s18.1-19.1 13.1-31.3l-42-102C484.9 354.1 544 280 544 192V128v-8l80.5-20.1c8.6-2.1 13.8-10.8 11.6-19.4C629 52 603.4 32 574 32H523.9C507.7 12.5 483.3 0 456 0zm0 112c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z",
  drop: "M192 496c97.2 0 176-78.8 176-176c0-74.1-102.3-230.6-150.9-300.7c-12.3-17.7-37.8-17.7-50.1 0C118.3 89.4 16 245.9 16 320c0 97.2 78.8 176 176 176zM112 320c0 44.2 35.8 80 80 80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-61.9 0-112-50.1-112-112c0-8.8 7.2-16 16-16s16 7.2 16 16z",
  dropper:
    "M341.6 29.2L240.1 130.8l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4L482.8 170.4c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6v42.4L5.4 462.2c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4L89.7 480h42.4c21.2 0 41.6-8.4 56.6-23.4L309.4 335.9l-45.3-45.3L143.4 411.3c-3 3-7.1 4.7-11.3 4.7H96V379.9c0-4.2 1.7-8.3 4.7-11.3L221.4 247.9l-45.3-45.3L55.4 323.3z",
  out: "M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z",
  borderColor:
    "M7.5 1.906v.938h1v-.938h-1zm0 1.875v.938h1V3.78h-1zm0 1.875v.938h1v-.938h-1zM1.906 8.5h.938v-1h-.938v1zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938v1zm2.813 0v-.031H8.5V7.53h-.031V7.5H7.53v.031H7.5v.938h.031V8.5h.938zm.937 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zM7.5 9.406v.938h1v-.938h-1zm0 1.875v.938h1v-.938h-1zm0 1.875v.938h1v-.938h-1z M0 0v16h16V0H0zm1 1h14v14H1V1z",
  background:
    "M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2H5z",
  color:
    "M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z",
  fill: "M41.4 9.4C53.9-3.1 74.1-3.1 86.6 9.4L168 90.7l53.1-53.1c28.1-28.1 73.7-28.1 101.8 0L474.3 189.1c28.1 28.1 28.1 73.7 0 101.8L283.9 481.4c-37.5 37.5-98.3 37.5-135.8 0L30.6 363.9c-37.5-37.5-37.5-98.3 0-135.8L122.7 136 41.4 54.6c-12.5-12.5-12.5-32.8 0-45.3zm176 221.3L168 181.3 75.9 273.4c-4.2 4.2-7 9.3-8.4 14.6H386.7l42.3-42.3c3.1-3.1 3.1-8.2 0-11.3L277.7 82.9c-3.1-3.1-8.2-3.1-11.3 0L213.3 136l49.4 49.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0zM512 512c-35.3 0-64-28.7-64-64c0-25.2 32.6-79.6 51.2-108.7c6-9.4 19.5-9.4 25.5 0C543.4 368.4 576 422.8 576 448c0 35.3-28.7 64-64 64z",
  stroke:
    "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z",
  palete:
    "M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z",
};
// Demk button
const demo = document.querySelector(".demo");

// Tools panel variablies
const panel = document.querySelector(".panel");
const targetColor = document.querySelector(".targetColor");
const voron = document.querySelector("#voron");
const out = document.querySelector("#out");
const palete = document.querySelector("#palete");
const drop = document.querySelector("#drop");
const dropper = document.querySelector("#dropper");
const borderColor = document.querySelector("#borderColor");
const background = document.querySelector("#background");
const color = document.querySelector("#color");
const fill = document.querySelector("#fill");
const stroke = document.querySelector("#stroke");
const params = document.querySelectorAll(".par");

// Color oanel variables;
const paletepanel = document.querySelector(".paletepanel");
const alfa = document.querySelector(".alfa");
const alfacaret = document.querySelector(".alfacaret");
const grad = document.querySelector(".grad");
const gradcaret = document.querySelector(".gradcaret");
const intensity = document.querySelector(".intensity");
const celic = document.querySelector(".celic");

// Inputs variables
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");

// Choosed paramatr on tools panel
let currentParametr = "";

// Setting pathes in SVG pictures
voron.firstElementChild.setAttribute("d", pathes.voron);
drop.firstElementChild.setAttribute("d", pathes.drop);
dropper.firstElementChild.setAttribute("d", pathes.dropper);
out.firstElementChild.setAttribute("d", pathes.out);
palete.firstElementChild.setAttribute("d", pathes.palete);
borderColor.firstElementChild.setAttribute("d", pathes.borderColor);
background.firstElementChild.setAttribute("d", pathes.background);
color.firstElementChild.setAttribute("d", pathes.color);
fill.firstElementChild.setAttribute("d", pathes.fill);
stroke.firstElementChild.setAttribute("d", pathes.stroke);

// Current value on scale of colors gradient
let valueGrad = 0;

// Current value colors
let r = 0;
let g = 0;
let b = 0;

//  Started function drag&drop for Tools Panel
dragElem(panel);
// Started function drag&drop for Colors Panel
dragElem(paletepanel);
// Started function for choose parametr of Tools Panel
chooseParam();

// Handler of click button "drop" to colored target elemnt
drop.parentElement.addEventListener("click", includeColor);

// Handler of click for startet function EyeDropper
dropper.parentElement.onclick = startEyeDropper;

// Handlers of input for change current color
red.oninput = inputInputColor;
green.oninput = inputInputColor;
blue.oninput = inputInputColor;

//  Handler of click for show Tools Panel
demo.onclick = () => {
  showElem(panel);
};

// Handler of click for show Colors panel
palete.onclick = () => {
  if (paletepanel.classList.contains("hide")) {
    showElem(paletepanel);
  } else {
    hideElem(paletepanel);
  }
};

// Handler of click for close all panels
out.parentElement.onclick = () => {
  hideElem(panel);
  hideElem(paletepanel);
};

// Handler of click for change intesivity of current color
intensity.onclick = (e) => {
  let t = targetColor.firstElementChild.lastElementChild;
  let x = intensity.getBoundingClientRect().x;
  let y = intensity.getBoundingClientRect().y;
  let wPers = intensity.getBoundingClientRect().width / 100;
  let hPers = intensity.getBoundingClientRect().height / 100;

  let cursorX = (e.clientX - x) / wPers;
  let cursorY = (e.clientY - y) / hPers;

  let rXpos = 255 - cursorX * ((255 - r) / 100);
  let gXpos = 255 - cursorX * ((255 - g) / 100);
  let bXpos = 255 - cursorX * ((255 - b) / 100);

  red.value = Math.round(rXpos - (cursorY * rXpos) / 100);
  green.value = Math.round(gXpos - (cursorY * gXpos) / 100);
  blue.value = Math.round(bXpos - (cursorY * bXpos) / 100);

  celic.style.top = e.clientY - y - 3 + "px";
  celic.style.left = e.clientX - x - 3 + "px";

  let hexStr = rgb2hex(+red.value, +green.value, +blue.value);
  targetColor.style.background = hexStr;
  t.textContent = hexStr;
  t.style.fill = hexStr;
  t.style.filter = "invert(100%)";
};

// Handler of click for choose color on Gragient Scale
grad.onclick = (e) => {
  gradcaret.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  let fullheight = parseInt(
    window.getComputedStyle(grad).getPropertyValue("height")
  );
  let onepersent = fullheight / 1530;

  gradcaret.style.top = e.clientY - grad.getBoundingClientRect().top + "px";

  valueGrad = Math.ceil(
    (grad.getBoundingClientRect().bottom -
      gradcaret.getBoundingClientRect().bottom) /
      onepersent
  );

  if (valueGrad > 1514) valueGrad = 1530;
  if (valueGrad < 10) valueGrad = 0;

  getGradientString(valueGrad);
  simulateClick();
};

// Funciotn change value of inputns and current color
function inputInputColor() {
  if (this.value >= 0 && this.value <= 255) {
    let t = targetColor.firstElementChild.lastElementChild;
    if (this.id === "red") r = this.value;
    if (this.id === "green") g = this.value;
    if (this.id === "blue") b = this.value;

    let hexStr = rgb2hex(+red.value, +green.value, +blue.value);
    targetColor.style.background = hexStr;
    t.textContent = hexStr;
    t.style.fill = hexStr;
    t.style.filter = "invert(100%)";
  }
  if (this.value < 0) {
    this.value = 0;
  }
  if (this.value > 255) {
    this.value = 255;
  }
  if (this.value === "") {
    this.value = 0;
  }
}

// Function getting value on Gradient Scale
function getGradientString(num) {
  switch (true) {
    case num >= 1275 && num <= 1530:
      r = 255;
      g = Math.abs(num - 1275 - 255);
      b = 0;
      break;
    case num >= 1020 && num <= 1275:
      r = 255 - (1275 - num);
      g = 255;
      b = 0;
      break;
    case num >= 765 && num <= 1020:
      r = 0;
      g = 255;
      b = Math.abs(num - 765 - 255);
      break;
    case num >= 510 && num <= 765:
      r = 0;
      g = 255 - (765 - num);
      b = 255;
      break;
    case num >= 255 && num <= 510:
      r = Math.abs(num - 255 - 255);
      g = 0;
      b = 255;
      break;
    case num >= 0 && num <= 255:
      r = 255;
      g = 0;
      b = 255 - (255 - num);
      break;

    default:
      break;
  }

  intensity.style.background = `rgb(${r}, ${g}, ${b})`;
}

// Function for amulation event click for change intensivity current color
function simulateClick() {
  let evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
    clientX: celic.getBoundingClientRect().x + 3,
    clientY: celic.getBoundingClientRect().y + 3,
  });
  intensity.dispatchEvent(evt);
}

// Function for show target elem
function showElem(elem) {
  elem.classList.remove("hide");
}

// Function for Hide target elem
function hideElem(elem) {
  elem.classList.add("hide");
}

// Function convertation formates RGB to HEX
function rgb2hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// Function choose parametr of Tools Panel
function chooseParam(e) {
  params.forEach((el) => {
    el.onclick = chooseParam;
    el.classList.remove("active");
  });
  if (e) {
    e.currentTarget.classList.add("active");
    currentParametr = e.currentTarget.firstElementChild.id;
  }
}

// Function set color to target elem
function includeColor() {
  drop.parentElement.classList.add("active");
  document.body.classList.add("pen");
  document.addEventListener("click", function func(e) {
    let t = e.target;
    if (!t.classList.contains("no-change")) {
      e.target.style[currentParametr] = targetColor.style.backgroundColor;
      drop.parentElement.classList.remove("active");
      document.body.classList.remove("pen");
      document.removeEventListener("click", func);
    }
  });
}

// Function for copy current color value in buffer
function copyColorToBuffer(targetElem) {
  navigator.clipboard.writeText(targetElem.textContent).catch((err) => {
    console.log("Something went wrong", err);
  });
}

// Function start API EyeDropper
function startEyeDropper() {
  if (!window.EyeDropper) {
    alert("Your browser does not support the EyeDropper API");
    return;
  }

  const eyeDropper = new EyeDropper();
  dropper.parentElement.classList.add("active");

  eyeDropper
    .open()
    .then((res) => {
      let t = targetColor.firstElementChild.lastElementChild;
      t.textContent = res.sRGBHex;
      t.style.fill = res.sRGBHex;
      t.style.filter = "invert(100%)";
      targetColor.style.backgroundColor = res.sRGBHex;
      copyColorToBuffer(t);
      dropper.parentElement.classList.remove("active");
    })
    .catch((e) => {
      targetColor.textContent = e;
    });
}

// Functiondrag&drop
function dragElem(elem) {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  elem.onmousedown = grabElem;

  function grabElem(e) {
    let t = elem.getBoundingClientRect();
    if (
      e.clientX < t.left + t.width - 50 ||
      e.clientY < t.top + t.height - 50
    ) {
      pos3 = e.clientX;
      pos4 = e.clientY;

      document.onmouseup = closeMove;
      document.onmousemove = elemMove;
    }
  }

  function elemMove(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elem.style.left = elem.offsetLeft - pos1 + "px";
    elem.style.top = elem.offsetTop - pos2 + "px";
  }

  function closeMove() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
