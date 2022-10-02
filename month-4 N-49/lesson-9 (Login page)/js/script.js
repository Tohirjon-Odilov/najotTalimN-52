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

document.querySelector('h1').append(document.createTextNode(' ' + userData.login + '. Hush kelibsiz!'))
form.addEventListener('submit', (e) => {
  storage.removeItem('token')
  // window.location.reload()
})





















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