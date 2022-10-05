function birvarakaymas() {
  return new Promise((buyruq, bekor) => {
    const val = Math.round(Math.random())
    val ? buyruq("Buyruq bajarildi.") : bekor('Bekor qilindi!!!')
  })
}

async function bajar() {
  try {
    const b = await birvarakaymas()
    console.log(b);
  } catch (x) {
    console.log(x);
  }
}

bajar()
bajar()
bajar()


// function func() {
//   var str = 'salom'
// }
// console.log(str);

// let str = prompt("Kirit")

// console.log(str);

let url = ('https://jsonplaceholder.typicode.com/todos')
//! promise
let pr = new Promise((resolve, reject) => {
  let rowData = fetch(url)
  resolve(rowData)
})
// pr.then((result) => result.json()).then(data => console.log(data))

/*********
 *! AWAIT *
 *********/

let createElement = (...rest) =>
  tags.map((tag) => document.createElement(tag))


const render = () => { }

(async () => {
  let todoData = await fetch('https://jsonplaceholder.typicode.com/todos')
  let data = await todoData.json()
  // data.forEach(element => {
  // console.log(element);
  // });
  for (let i = 0; i < 10; i++) {
    console.log(data[i]);
  }
})()

var va;
let le;
const cons = 'salom'
console.log(va, le, cons);