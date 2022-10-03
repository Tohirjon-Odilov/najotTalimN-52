const form = document.querySelector('form')
const login = document.querySelector('.login')
const password = document.querySelector('.password')
let storage = window.localStorage

import { data } from './database.js'

form.addEventListener('submit', (e) => {
  e.preventDefault()

  console.log(login.value, password.value);

  const person = data.find(
    (user) => user.login == login.value && user.password == password.value
  )

  console.log(person);

  if (!person) {
    alert("Parol yoki login xato qayta kiriting")
  } else {
    storage.setItem('token', JSON.stringify(person))
    window.location.replace('../index.html')
  }
})

document.querySelector('.eye').addEventListener(('click'), () => {
  console.log(password.type);
  password.type = password.type == 'text' ? 'password' : 'text'
})

