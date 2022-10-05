{
  /*****************
   * !ARRAY METHODS *
   *****************/
  //! 1. concat()
  //! 2. indexOf()
  //! 3. find()
  //! 4. findIndexOf()
  //! 5. forEach()
  //! 6. includes()

  let arr = ['a', 'b', 'c', 'd', 'c', 'e', 'f', 'c', 's', 'd', 'q']

  {
    //! 1. concat()
    //*
    let arr = ['salom', false]
    let arr2 = ['true', 'hello']
    let double = arr.concat(arr2)
    console.log(double);
  }
  {
    //! 2. indexOf()
    //*
    let qidir = arr.lastIndexOf('c')
    console.log(qidir);
  }
  {
    //! 3. find()
    //*
    let qidir = arr.find(el => el === 'b')
    console.log(qidir);
  }
  {
    //! 4. findIndexOf()
    //*
    let qidir = arr.findIndex(el => el === 's')
    console.log(qidir);
  }
  {
    //! 5. forEach()
    //*
    arr.forEach(el => {
      console.log(el);
    })
  }
  {
    //! 6. includes()
    //*
    let inc = arr.includes('b')
    console.log(inc);
  }
  {
    //! 7. push()
    //*
    arr
    let inc = arr.push('ds')
    let inc2 = arr.unshift('dssdsd')
    console.log(inc2);
    console.log(arr);
  }
  {
    //! 8.unshift()
    arr.unshift()
  }
  {
    //! 8.unshift()
    arr.unshift()
  }
  {
    //! 8.unshift()
    arr.unshift()
  }
  {
    //! 11.sort()
    let arr = ['h', 'w', 'q', 'a', 'p', 'b', 'sal']
    let sortArr = [...arr].sort()
    console.log(arr);
    console.log(sortArr)
    {
      let num = [32, -4, 65, -121, 3, 10, 33, 1]
      // let sortNum = num.sort(function (a, b) {
      //   return a < b
      // })
      let sortNum = num.sort((a, b) => {
        if (a > b) {
          return 1;
        }
        if (a < b) {
          return -1;
        }
        return 0;
      });
      console.log(sortNum);
      // console.log(num);
    }
  }
  {
    let sl = arr.slice(3, 5)
    arr
    sl
  }
}
{
  let obj = [
    {
      name: 'salom',
      age: 20,
      location: 'andijon'
    },
    {
      name: 'john',
      age: 20,
      location: 'andijon'
    }
  ]
  for (const i of obj) {
    console.log(i.name);
  }
  obj.forEach(i => {
    console.log(i.name)
  })
}


// let arr1 = [
// 	{ id: 1, name: "John", age: 36, hobbiy: ["box", "shaxmat", "tennis"] },
// ];

// console.log(num[0]);

// num.forEach = function (num2) {
// 	// console.log(num2);
//   for(let)
// };

// for (let i = 0; i <= arr1.length; i++) {
// 	let obj = arr1[i].hobbiy;
// 	for (let j = 0; j >= obj.length; j++) {
// 		console.log(obj[j][0]);
// 	}
// }

/*****************************************************************
 * ! MASSIVGA 0DAN BOSHLAB 100GACHA BO'LGAN  SONLARNI JOYLASH; *
 *****************************************************************/

// ? Normal
// let maxNum = 100;
// let arr = [];

// for (let i = 0; i < maxNum; i++) {
// 	arr1.push(i);
// }
// console.log(arr1);

// ? Funksiya bilan
// function f(num) {
// 	let newArray = [];
// 	for (let i = 0; i <= num; i++) {
// 		newArray.push(i);
// 	}
// 	console.log(newArray);
// 	return newArray;
// }

// f(100);

// let str = prompt("Nimadir kiriting?");
// str ? console.log("Truthy qiymat") : console.log("Falsy qiymat");


