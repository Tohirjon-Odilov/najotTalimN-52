/***********************
 * ARRAY DESTRUCTURING *
 ***********************/
// global array
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const number = ['1', '2', '3', '4', '5', '6', '7']
//----------------------------------------------------------------
// const a = alphabet[0]
// const b = alphabet[1]
// ! tepadagi va pastdagi, bir vazifani bajaradi
const [a, b] = alphabet

console.log(a);
console.log(b);

//----------------------------------------------------------------
function sumAndMultiply(a, b) {
  return [a + b, a * b]; // agar division'ga qiymat berilmasa default qiymat ishga tushadi
}


const [plus, multiple, division = 'no division'] = sumAndMultiply(4, 6) // division'ni default qiymati

console.log(plus, multiple, division); // 10,24 'no division'

/********
 * !SORT *
 ********/

let arr = [-55, 0, 2, 1, -10, 8, -100, 9, -1, 15]

1. // raqamlarni sortlash
// let arr2 = [...arr].sort((a, b) => a - b)

2. // raqamlarni sortlash
let arr2 = arr.sort((a, b) => {
  // if (a > b) return 1;
  // if (a === b) return 0;
  if (a < b) return -1;
})


console.log(arr2); //[ -10, 1, 2, 5, 8 ]
