let body = document.body
let box = body.querySelector('.box')
let form = body.querySelector('.form')
let formInput = body.querySelector('.form__input')
let modal = body.querySelector('.modal')

form.addEventListener('submit', (e) => {
  e.preventDefault() // sahifa yangilanib ketishini oldini oladi.

  let task = formInput.value.trim()

  modal.addEventListener('click', function () {
    modal.style.display = 'none'
  })

  if (task.length === 0) {
    modal.style.display = 'flex'
    return
  }

  if (task.length <= 3) {
    modal.style.display = 'flex'
  }

  const taskInput = document.createElement('input')
  taskInput.type = "checkbox"
  taskInput.className = "task__input"

  const taskDeck = document.createElement('div')
  taskDeck.textContent = task
  taskDeck.className = "task__deskription"

  const taskEdit = document.createElement('button')
  taskEdit.textContent = 'Edit'
  const taskDelete = document.createElement('button')
  taskDelete.textContent = 'Delete'

  const taskDiv = document.createElement('div')
  taskDiv.className = "task"
  taskDiv.append(taskInput, taskDeck, taskEdit, taskDelete)

  box.appendChild(taskDiv)
  formInput.value = ""
})
