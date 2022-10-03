// window.localStorage.setItem('first dara', 'vahahah')
// let storage = window.localStorage

// storage.setItem('Two data', 'Odilov')
// storage.setItem('Date of birth', 2003)
// storage.setItem('isStudent', true)
// console.log(storage.getItem('isStudent'))
// storage.removeItem('isStudent')
// storage.clear  ()

let storage = window.localStorage
let userToken = storage.getItem('token')
let userData = null

if (!storage.getItem('token')) {
  window.location.replace('../login.html')
} else {
  userData = JSON.parse(userToken)
}

document.querySelector('h1').append(document.createTextNode(userData ? " " + userData.login + '. Hush kelibsiz!' : ' '))


/*******************************
 * !LOG OUT TUGMASINI mexanizmi *
 *******************************/
form.addEventListener('submit', (e) => {
  storage.removeItem('token')
})

/**************************************
 * !30 SONIYADAN SO'NG LOG OUT QILISH *
 **************************************/
function makeLogOut() {
  storage.removeItem('token')
  window.location.reload()
}

let time = 10000

let timeId = setTimeout(makeLogOut, time);

window.addEventListener('mousemove', (e) => {
  clearTimeout(timeId)
  timeId = setInterval(makeLogOut, time)
})

let tenTime = time / 1000
document.body.append(document.createElement('section'))
setInterval(() => {
  document.querySelector('section').textContent = tenTime--
}, 1000)





















// function getComplexNumbers(n) {
//   for (var i = 2; i <= n; i++) {
//     let a = 0
//     for (let j = 1; j <= n / 2; j++) {
//       if (i % j === 0 && i >= j) {
//         a = a + 1
//       }
//     }
//     if (a > 2) {
//       console.log(i);
//     }
//   }
// }
// getComplexNumbers(21)