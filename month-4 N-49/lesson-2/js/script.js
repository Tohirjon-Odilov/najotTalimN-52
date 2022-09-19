// import { func1 as newFunc1, func2 as newFunc2 } from './module.js'

// newFunc1()
// newFunc2()


// import { newFunc1, newFunc2 } from './module.js';

// newFunc1()
// newFunc2()

// {
//   let arr = [
//     {
//       id: 1,
//       brand: "ford",
//       price: 200
//     },
//     {
//       id: 2,
//       brand: "lexus",
//       price: 250
//     },
//     {
//       id: 3,
//       brand: "bmw",
//       price: 400
//     },
//     {
//       id: 4,
//       brand: "ford",
//       price: 400
//     },
//   ]

//   let cars = new Cars(arr)
// }

{
  // let li = document.querySelectorAll("li")

  // console.log(Array.from("salom"))
  // console.log(li);
}

// !month-3 lesson-11 for homework
// 1. **isEmpty()** nomli funksiya yozing. Unga Object berib yuborganimda ichida propertylari bo’lsa false, hech qanday propertysi bo’lmasa true qaytarsin.
// Yordam: Object.keys
// const isEpty = (obj) => {
//   console.log(Object.keys(obj));
//   return Object.keys(obj).length > 0 ? false : true;
// }
// console.log(isEpty({ name: '' }));

// ozroq ko'd bilan
// const isEpty = (obj) => Object.keys(obj).length > 0 ? false : true;
// console.log(isEpty({ name: '' }));

2. // Quyida berilgan Object dagi shaxslar daromadlarini jamini xisoblab chiqaruvchi funksiya yozing.  Funksiya PURE (toza) bo’lishi shart!


// const sumAll = (obj) => {
//   let arr = Object.values(obj);

//   return arr.reduce((sum, num) => sum + num, 0);
// }
// console.log(
//   sumAll({
//     John: 130,
//     Ann: 100,
//     Pete: 50
//   })
// );

3. // Obyekt propertylarini 2ga ko’paytiradigan funksiya yozing. Funksiya PURE (toza) bo’lishi shart!
// Yordam: typeof
// funksiyani chaqirishdan avval
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// chaqirishdan keyin
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// ?yechim
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     if (!isNaN(obj[key])) {
//       obj[key] = obj[key] * 2
//     }
//   }
// }

/**** bosha
// function multiplyNumeric(obj) {
  // console.log(obj);
  // return { ...obj }
// }
 ****/

// multiplyNumeric(menu)
// console.log(menu);


/////////
// let arr = ["A", "B", "C", "D", "E", "F"]

// let [w, , t, ...def] = arr

// console.log(w, t, def); // A C Array(3) [ "D", "E", "F" ]

// /********
//  * SORT *
//  ********/
// {
//   let arr = [-55, 0, 2, 1, -10, 8, -100, 9, -1, 15]

//   1. // raqamlarni sortlash
//   // let arr2 = [...arr].sort((a, b) => a - b)

//   2. // raqamlarni sortlash
//   let arr2 = arr.sort((a, b) => {
//     if (a > b) return 1;
//     if (a === b) return 0;
//     if (a < b) return -1;
//   })

//   console.log(arr2); //[ -10, 1, 2, 5, 8 ]
// }


// Number.EPSILON

// console.log(
//   Number.EPSILON
// );

// console.log(Number.isNaN("sad" - 0));

// console.log((2 ** 53 - 1) + " dan " + -(2 ** 53 - 1));

// console.log(Number.isSafeInteger(2 ** 53));
// console.log(Number.parseInt('1.5asdfsdfasf'))

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE, "min");
console.log(Number.EPSILON);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(2 ** 53, "sa");