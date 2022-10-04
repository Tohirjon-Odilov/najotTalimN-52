/*****
 * ! Ishlamadi *
 *****/
// async function getLogin(user) {
//   fetch('https://pressa-exem.herokuapp.com/login', {
//     method: 'PUT',
//     body: JSON.stringify(user),
//     headers: { 'Content-type': 'application/json' }
//   })
//     .then(res => res.json())
//     .then(res => console.log(res?.status > 400 ? HTMLDataListElement.textContent = res.messafe : res))
//     .catch(err => console.log(err.message))
// }

// const user = {
//   username: "jasur",
//   password: "12345678"
// }

// getLogin(user)


const calc = function (func, s1, s2) {
  return func(s1, s2)
}

const addition = function (s1, s2) {
  return s1 + s2
}

const result = calc(addition, 2, 3)
console.log(result);