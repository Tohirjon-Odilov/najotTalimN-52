/********
 * DARS *
 ********/
let box = document.querySelector(".box")
let colors = ['red', 'green', 'yellow', 'blue', 'pink']
let index = 0;

box.style.color = colors[0]

setInterval(() => {
  index++

  if (index === colors.length) {
    index = 0
  }
  // console.log(colors[index]);
  box.style.color = colors[index]
}, 1000)


/***********
 * !DATASET *
 ***********/

// box.dataset.id = 1

// console.log(box.dataset.id); // <div data-id="1" class="box">salom hammaga</div>


/*************
 * !SORTLASH *
 *************/
import data from "./data.js";

//* har bitta elementni aylanish
data.forEach((el) => {
  // console.log(el); // massivdagi har bir obyekt chiqadi
  let h2 = document.createElement('h2');
  let img = document.createElement('img');
  let div = document.createElement('div');
  let p = document.createElement('p');


  h2.textContent = el.name
  img.src = el.img
  p.textContent = el.desc + ' | ' + el.price

  div.dataset.id = el.id
  div.append(img, h2, p)
  box.append(div)
})

let textNode = document.createTextNode('  Here I am');
console.log(textNode);

//* practise
// let input = document.querySelector('#input');
// let ul = document.querySelector('#ul');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', dinamic)

// function dinamic() {
//   let li = document.createElement('li');
//   let text = document.createTextNode(input.value)

//   li.append(text)
//   ul.append(li)
// }
let ol = document.createElement('ol');

document.body.append(ol)
ol.before('before'); // insert string "before" before <ol>
ol.after('after'); // insert string "after" after <ol>




// import { createElements, $ } from './ulities.js';

// let [div, span, img] = create(['div', 'span', 'img'])

// console.log(div, span, img);
// div.textContent = 'salom'

// document.body.append(div)


// function $(selector) {
  // return document.createElement(selector);
// }


// let div = $(div)

// console.log(div);

// const x = Symbol('hey');
// console.log(x.description); // hey