// import { createElements, $ } from './ulities.js';

// let [div, span, img] = create(['div', 'span', 'img'])

// console.log(div, span, img);
// div.textContent = 'salom'

// document.body.append(div)


function $(selector) {
  return document.createElement(selector);
}


let div = $(div)

console.log(div);