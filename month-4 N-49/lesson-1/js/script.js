{
  // let arr = [18, 4, -5, -6, -7, -8, -95, 1, -10, 3, 9, -1]
  // let arr2 = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > 0) {
  //     arr2 += arr[i]
  //   }
  // }
  // console.log(arr2);
}



{
  // const data = new Numbers([12, -1, 0, 23.64, -23]);

  // let res1 = data.sorted(); //[-23, -1, 0, 12, 23.24);

  // data.toInterger(); //[12, -1, 24, -23]

  // data.stringNumber(); //["12", "-1", "0","23.64", "-23"]

  // data.sumAll(); // 123

  let arr = [
    {
      id: 0,
      brand: 'lexus',
      price: 234000,
    },
    {
      id: 1,
      brand: 'ford',
      price: 12300
    }
  ]
}


{
  // ?TypeError => qiymat kutilgan turda bo'lamaganida
  //?o'zgarmas qiymatlarni o'zgartirganda
  // const stylesheet = "Style"
  // stylesheet = 'tOhijkljl'
  //?mavjud bo'lmagan methodni chaqirganda
  // let arr = [13, 14, 15, 16, 17, 18, 19, 20]
  // arr.replace()
}
{
  // ?RangeError => ruhsat etilgan qiymatlar oralig'idan tashqarida bo'laganida
  // let a = 94.49

  // console.log(a.toFixed(101));
}

// let a = "my site.com"
// console.log(encodeURI(a));
// let dd = "my%20website.com"
// 
// console.log(decodeURI(dd));
// decodeURI('%')

// function loop(x) {
//   if (x >= 1000000000000)
//     return;
//   // do stuff
//   loop(x + 1);
// }
// loop(0);

// {
//   function loop(x) {
//     if (x >= 10) // "x >= 10" is the exit condition
//       return;
//     // do stuff
//     loop(x + 1); // the recursive call
//   }
//   loop(0);

// }

// {
//   function loop(x) {
//     // The base case is missing
//     loop(x + 1); // Recursive call
//   }

//   loop(0);
// }

// {
//   class Person {
//     constructor() { }
//     set name(name) {
//       this.name = name; // Recursive call
//     }
//   }

//   const tony = new Person();
//   tony.name = "Tonisha"; // 
// }

/**********
 * IMPORT *
 **********/

// * defaultni export qilish
// import oddiyFunc from "./functions.js"

// console.log(oddiyFunc("salom"));


// *gulli qavslar bilan export qilish. 
// import { Person, Pet } from "./obj.js"


// *Bu usulda esa 1 va 2 chi usuldan chachishtirgan holatda foydalanganmiz.   
// import CarFactory, { Person, Pet } from "./obj.js"

// const car1 = new CarFactory()
// console.log(car1);

// const person1 = new Person()
// console.log(person1);

// const pet1 = new Pet()
// console.log(pet1);


// *obyeklarni barchasini bir qutiga joylash
// import all from './obj.js';

// console.log(all);
// *obyektning har-biriga alohida murojaat qilish
// let person1 = new all.Person();
// console.log(person1);


import kattaSozlar, { main1, main2 } from './functions.js'

console.log(kattaSozlar("alik"));
main1()
main2()