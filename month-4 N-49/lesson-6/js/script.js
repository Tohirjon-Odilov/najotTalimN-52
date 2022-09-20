// selectors
let listGroup = $('.list-group')
let svg = $('#aside-svg')
let asideText = $('#aside__text')



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
  console.log(svg.target);
})
// svg.forEach(svgEl => {
//   // el.addEventListener('click', function (e) {
//   svgEl.classList.toggle('opacity-40')
//   // })
// })


// let listGroupArr = listGroup.from('')
// console.log(listGroupArr);



