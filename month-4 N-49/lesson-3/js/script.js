/********************
 * !DARSDAGI KODLAR *
 ********************/
// let arr = [2, 3, 4]
// for (const i of arr) {
//   console.log(i);
// }
// arr.forEach((i) => {
//   console.log(i);
// }) // 2 3 4

/*****************************************
 *! THIS KALIT SO’ZI ARROW FUNCTION BILAN *
 *****************************************/
// * oddiy funksiyada (function declaration, expression) this, shu funksiya chaqirilgan (invoke bo’lgan) joyga murojaat qiladi. Bu holatda global (Window) ni oladi

// function Person() {
//   this.name = 'Jack',
//     this.age = 25,
//     this.sayName = function () {
//       this.age = 18
//       // this is accessible
//       console.log(this.age);

//       function innerFunc() {

//         // this refers to the global object
//         console.log(this.age);
//         console.log(this);
//       }

//       innerFunc();

//     }
// }

// let x = new Person();
// x.sayName();

{
  //* Arrow functionda unday emas, u o’zining this iga ega emas. Shuning uchun u otasining this ini oladi

  // function Person() {
  //   this.name = 'Jack',
  //     this.age = 25,
  //     this.sayName = function () {

  //       console.log(this.age);
  //       let innerFunc = () => {
  //         console.log(this.age);
  //       }

  //       innerFunc();
  //     }
  // }

  // const x = new Person();
  // x.sayName();

  // // Natija:
  // 25
  // 25
}

/************************
 * ? SWAPPING VARIABLES *
 ************************/
//* 2 o’zgaruvchida turgan datani ko’p mehnat qilmasdan bir qatorda almashtirish

// program to swap variables

// let x = 4;
// let y = 7;

// x = 7;
// y = 4;

// // swapping variables
// [x, y] = [y, x];

// console.log(x); // 7
// console.log(y); // 4
{
  // nested array elements
  // const arrValue = ['one', ['two', 'three'], 's'];

  // // nested destructuring assignment in arrays
  // const [x, y, z] = arrValue;

  // console.log(x); // one
  // console.log(y); // two
  // console.log(z); // three    
}

{
  /*******
   *? MAP *
   *******/
  let map1 = new Map([['info', { name: 'Tohirjon,age: 19,' }], ['surname', 'Odilov']])
  console.log(map1);

  // console.log(map1);
  // console.log(map1.has('info'));
  for (const [key, value] of map1) {
    // console.log(key, value);
  }
  map1.forEach(element => {
    // console.log(element);
    // element.forEach(i => {
    // console.log(i);
    // console.log(i.length)
    // })
  });

  //* malumotni o'chirish
  let del = map1.delete('surname')
  console.log(map1);
  //* ma'lumotlarni barchasini tozalash
  map1.clear()
  console.log(map1);

  {
    //Map()'ni iterate qilish va keylarni olish
    let map1 = new Map();
    map1.set('name', 'Jack');
    map1.set('age', '27');

    // looping through the Map
    for (let key of map1.keys()) {
      console.log(key)
    }


    /*****************
     * // YOZILMAGAN *
     *****************/
    // ! Map ning key/value larini .entries() orqali olish mumkin
    // let map1 = new Map();
    map1.set('name', 'Jack');
    map1.set('age', '27');

    // looping through the Map
    for (let elem of map1.entries()) {
      console.log(`${elem[0]}: ${elem[1]}`);
    }
  }

}

{
  /**********
   * * JSON *
   **********/
  // const test = JSON.stringify(["anor", 1, true, { ism: "ALi" }]);
  // console.log(test);

  // const test2 = JSON.parse(test);
  // console.log(test2);
}











/**************
 *? CALCULATOR *
 **************/

// function Mycalc(a, b) {
//   this.a = a
//   this.b = b

//   this.addition = function () {
//     return this.a + this.b
//   }
//   this.subtraction = function () {
//     return this.a - this.b
//   }
//   this.division = function () {
//     return this.a / this.b
//   }
//   this.multiplication = function () {
//     return this.a * this.b
//   }

//   this.pow = function (pow) {
//     let a = Math.pow(this.a, pow ? pow : 1);
//     let b = Math.pow(this.b, pow ? pow : 1);
//     return [
//       a, b
//     ]
//   }
// }

// let calc = new Mycalc(2, 3)

// console.log(calc.addition());
// console.log(calc.subtraction());
// console.log(calc.division());
// console.log(calc.multiplication());

