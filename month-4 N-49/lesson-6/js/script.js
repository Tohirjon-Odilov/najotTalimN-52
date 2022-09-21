// selectors
let listGroup = $('.list-group')
let svg = $('#aside-svg')
let asideText = $('#aside__text')
let tbody = $('#tbody')



listGroup.forEach(el => {
  el.addEventListener('click', function (e) {
    el.classList.toggle('active');
  })
});
asideText.forEach(textEl => {
  // el.addEventListener('click', function (e) {
  // textEl.style.color = 'white'
  textEl.classList.toggle('aside__text')
  // })
  // console.log(svg.target);
})
// svg.forEach(svgEl => {
//   // el.addEventListener('click', function (e) {
//   svgEl.classList.toggle('opacity-40')
//   // })
// })


// let listGroupArr = listGroup.from('')
// console.log(listGroupArr);

import data from './users.js'

for (let i = 0; i < 100; i++) {
  // data[1]

  let tr = document.createElement('tr')
  // console.log(data[i].ava);
  let priority = data[i].priority.toUpperCase()



  tr.innerHTML = `
    <td class="ps-4">
      <div class="d-flex">
        <img class="rounded-circle" width=44 height=44 src="${data[i].ava}" alt="">
        <div class="d-flex flex-column ps-3">
          <strong>${data[i].company}</strong>
          <span>${data[i].date_of_onliine}</span>
        </div>
      </div>
    </td>
    <td>
      <strong class="d-flex">${data[i].name}</strong>
      <span>${data[i].date_of_register}</span>
    </td>
    <td>
      <strong class="d-flex">${data[i].date_of_onliine}</strong>
      <span>${data[i].time}</span>
    </td>
    <td>
      <span class="line-height high">${priority}</span>
    </td>
    <td>
      <img class="line-height-img" src="./images/menu-settings.svg" alt="">
    </td>
  `
  tbody[0].append(tr)
  // color change btn
  let color = $('.line-height')
  // console.log(color);
  if (priority == 'NORMAL') {
    color[i].classList.add('normal')
  } else if (priority == 'LOW') {
    color[i].classList.add('low')
  } else {
    color[i].classList.add('high')
  }

  // console.log(priority);
}


