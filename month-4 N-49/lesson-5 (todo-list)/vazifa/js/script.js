/**************
 * !FUNCTIONS *
 **************/
function $(selectors) {
  return document.querySelector(selectors);
}

function $$(array) {
  return array.map((el) => {
    return document.createElement(el);
  })
}

/*******************
 * !O'ZGARUVCHILAR *
 *******************/
let input = $('#input')
let form = $('#form')
let todoBody = $('.todo-main')
let todoCheck = $('#checkbox')
let todoText = $('.todo-check')
let modalBody = $('.modal__body')
let background = $('#bg')
let btnClose = $('.btn-close')


form.addEventListener('submit', (e) => {
  e.preventDefault()
  let str = input.value.trim().split("").join("")
  //check
  console.log(str);
  if (str.length !== 0) {
    //check
    console.log('bosh');

    // inputni bo'shatish
    if (input.value) {
      input.value = ""
    } else {
      console.log("Iltimos nimadir yozing");
    }

    /*****************
     * CREAT ELEMENT *
     *****************/
    let todoBody = document.createElement("div")
    todoBody.className = 'todo-main'

    let todoCheck = document.createElement("input")
    todoCheck.setAttribute("type", "checkbox")
    todoCheck.setAttribute("id", "checkbox")

    let todoText = document.createElement("div")
    todoText.className = 'todo-check'
    todoText.textContent = str
    //check
    console.log(typeof input.value);

    let line = document.createElement("div");
    line.className = 'line'

    let wrapper = document.createElement("div");
    wrapper.className = 'ms-auto'

    let secondary = document.createElement("a");
    secondary.setAttribute("id", "edit")
    secondary.className = 'btn btn-secondary'
    secondary.innerText = 'edit'
    secondary.style.marginRight = '5px'

    let danger = document.createElement("a");
    danger.setAttribute("id", "delete")
    danger.className = 'btn btn-danger'
    danger.innerText = 'delete'

    /***********
    * !APPEND *
    ***********/
    wrapper.append(secondary, danger)
    todoText.appendChild(line);
    todoBody.append(todoCheck, todoText, wrapper)

    //main append
    form.append(todoBody)

    /****************
     * TODO LINE *
     ****************/
    todoCheck.addEventListener('change', function (e) {
      if (todoCheck.checked) {
        line.style.animationName = 'line'
        line.style.animationDirection = 'alternate'
        setTimeout(() => {
          line.style.animationName = 'none'
          line.style.width = '100%'
        }, 500);
      } else {
        line.style.animationName = 'line'
        line.style.animationDirection = 'alternate-reverse'
        setTimeout(() => {
          line.style.animationName = 'none'
          line.style.width = '0%'
        }, 500);
      }
    })
    danger.addEventListener('click', function () {
      todoBody.remove();
    })
  } else {
    form.style.filter = "blur(0.5rem)";
    background.style.display = "block";
    modalBody.style.display = "block";

    background.addEventListener("click", function (e) {
      form.style.filter = "blur(0rem)";
      background.style.display = "none";
      modalBody.style.display = "none";
    })

    btnClose.addEventListener('click', function (e) {
      form.style.filter = "blur(0rem)";
      background.style.display = "none";
      modalBody.style.display = "none";
    })
  }
})



// todo edit,remove
let btn = $("#delete").addEventListener('click', function () {
  todoBody.remove();
})




