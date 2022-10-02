let body = document.body
let box = body.querySelector('.box')
let form = body.querySelector('.form')
let formInput = body.querySelector('.form__input')
let modal = body.querySelector('.modal')

let date = new Date()

//! database
const taskArray = [
]

form.addEventListener('submit', (e) => {
  e.preventDefault() // sahifa yangilanib ketishini oldini oladi.

  let task = formInput.value.trim()

  taskArray.push({
    id: date.getTime(),
    task: task, worldsalomworldsalom,
    iscomplete: false
  })

  console.log(taskArray);

  if (task.length === 0) {
    return
  }

  const taskDiv = createElementWithTaskText(task)

  box.appendChild(taskDiv)
  formInput.value = ""
})

function createElementWithTaskText(taskText) {
  const taskInput = document.createElement('input')
  taskInput.type = "checkbox"
  taskInput.className = "task__input"

  const taskDeskription = document.createElement('div')
  taskDeskription.textContent = taskText
  taskDeskription.className = "task__deskription"

  const taskEdit = document.createElement('button')
  taskEdit.textContent = 'Edit'
  const taskDelete = document.createElement('button')
  taskDelete.textContent = 'Delete'

  const taskDiv = document.createElement('div')
  taskDiv.className = "task"
  taskDiv.append(taskInput, taskDeskription, taskEdit, taskDelete)

  return taskDiv;
}

  // modal.addEventListener('click', function () {
  //   modal.style.display = 'none'
  // })