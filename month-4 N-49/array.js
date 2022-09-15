/***********************
 * ARRAY DESTRUCTURING *
 ***********************/
// global array
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const number = ['1', '2', '3', '4', '5', '6', '7']
//----------------------------------------------------------------
// const a = alphabet[0]
// const b = alphabet[1]
// ! tepadagi va pastdagi bir vazifani bajaradi
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