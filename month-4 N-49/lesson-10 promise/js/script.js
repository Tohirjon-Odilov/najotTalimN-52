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

// bajar()
// bajar()
// bajar()


// function func() {
//   var str = 'salom'
// }
// console.log(str);

let str = prompt("Kirit")

console.log(str);