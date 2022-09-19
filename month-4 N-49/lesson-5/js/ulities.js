export function create(array) {
  return array.map((el) => {
    return document.createElement(el);
  })
}

function $(selector) {
  return document.createElement(selector);
}


let div = $(div)

console.log(div);