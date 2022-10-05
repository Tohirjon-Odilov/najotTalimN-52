{
  const calc = function (func, s1, s2) {
    return func(s1, s2)
  }

  const addition = function (s1, s2) {
    return s1 + s2
  }

  const subtraction = function (s1 = 2, s2 = 3) {
    if (s1 < s2) throw new Error("Birinchi son kichik ikkinchi sondan!")

    return s1 - s2
  }

  const multiplication = function (s1, s2) {
    return s1 * s2
  }

  const division = function (s1, s2) {
    if (s1 === 0) throw new Error("No'lga bo'lish mumkin!")

    return s1 / s2
  }

  // bu yerga 6 10 16 20 qatordagi o'zgaruvchilar calcga beriladi.
  // const result = calc(subtraction)
  // console.log(result);
}

// let calc = (s1, s2) => {
//   console.log(arguments);
// }

// calc(2, 4)


// function cal(s1, s2) {
//   console.log(arguments);
// }
// cal(2, 4)

{
  /*************************
   * !JAVASCRIPT RECURSION *
   *************************/

  // function countDown(number) {
  //   console.log(number);
  //   const newNumber = number - 1
  //   if (newNumber > 0) {
  //     countDown(newNumber)
  //   }
  // }
  // countDown(4)

}

{
  //! Factorial son
  function factorialSon(num) {
    if (num < 0) throw new Error("Musbat son kiritdiniz?")
    if (num === 0) return 1
    return num * factorialSon(num - 1)
  }
  console.log(factorialSon(7))
}

let obj = {
  name: 'Tohirjon',
  age: 25,
  surname: "Odilov"
}

console.log(obj);
obj['Location'] = 'Andijon'
console.log(obj);

{
  let obj = {
    name: 'Tohirjon',
    surname: "Odilov",
    age: 19,
  }
  let pupil = Object.create(
    obj,
    {
      name: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 'Tohirjon'
      },
      surname: {
        writable: true,// o'zgartirib bo'lamydigan qilish
        configurable: true, // o'chirib bo'lmaydigan qilish
        enumerable: true, // buni bilmadim
        value: 'Odilov'
      }
    }
  )
  pupil.name = 'YOsh ozgardi'
  delete pupil.name
  console.log(pupil);
}

let arr = [
  {
    name: 'salom',
    age: 24
  },
  ['men', false, 45],
  'salom'
]
console.log(arr);
arr[5] = 'ozgardi'
console.log(arr);



// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter second number");

// function plus(num1, num2) {
// 	return num1 + num2;
// }

// type coercion ---> auto staring, auto number
//

// let i = 0;

// while (i <= 50) {
// 	if (i % 2 === 0) console.log(i);
// 	i++;
// }

// do {
// 	if (i % 2 === 0) console.log(i);
// 	// console.log(i);
// 	i++;
// } while (i <= 50);

// !Darsdagi kodlar Ismlar orqasidan xon'ni qo'shadi.

// function nameSikl (){
// 	let sikl = prompt("Nechta ism kiritmoqchisiz?");
// 	for(let i = 0; i < sikl; i++){
// 		let name = prompt("Faqat ayollar ismini kiriting!")
// 		console.log(`${name}xon`)	
// 	}
// }
// nameSikl();

// ! Kiritilgan sonlarni bir-biriga qo'shish dasturi a+b

// function additionNumber(){
// 	let a = Number(prompt("Son kiriting?"))
// 	let b = Number(prompt("Son kiriting?"))
// 	let result = a + b
// 	return result;
// }

// console.log(additionNumber())



//! calculator

// let num1 = +prompt("Enter first number");
// let num2 = +prompt("Enter second number");
// let operator = prompt("Enter operator");

// if (operator === "+") {
// 	console.log(num1 + num2);
// } else if (operator === "-") {
// 	if (num1 < num2) {
// 		console.log(0);
// 	} else {
// 		console.log(num1 - num2);
// 	}
// } else if (operator === "*") {
// 	console.log(num1 * num2);
// } else if (operator === "/") {
// 	let result = num1 / num2;
// 	if (result % 2 === 0) {
//     console.log(Math.round(result));
// 	}
// 	if (result % 2 !== 0) {
// 		console.log(Math.round(result));
// 	} else {
// 		console.log("xato");
// 	}
// } else {
// 	console.log("Invalid operator");
// }

// !calculator - function decleration

// let son1 = prompt("Enter first number:");
// let son2 = prompt("Enter second number:");
// let operation = prompt("Enter operator:");

// function calculator(son1, son2, operation) {
// 	if (operation === "+") {
// 		return son1 + son2;
// 	} else if (operation === "-") {
// 		if (son1 < son2) {
// 			return 0;
// 		} else {
// 			return son1 - son2;
// 		}
// 	} else if (operation === "*") {
// 		return son1 * son2;
// 	} else if (operation === "/") {
// 		let result = son1 / son2;
// 		if (result % 2 === 0) {
// 			return Math.round(result);
// 		} else {
// 			return Math.round(result);
// 		}
// 	} else {
// 		return "Invalid operator";
// 	}
// }

// console.log(calculator(son1, son2, operation));

/************
 * !VAZIFA *
 ************/

/*************************************************************************************
 * ? 5 TA ARGUMENT QABUL QILIB CONSOLEGA CHIQARADIGAN FUNCTION YOZISH (DECLARATION) *
 * ? 5 RETURNLI XISOOB KITOB QILADIGAN FUNCTION YOZISH (EXPRESSION)         *
 *************************************************************************************/

// 1. Declaration

// function userAbout(firstName, lastName, age, country, city) {
// 	console.log(
// 		"My name is " +
// 			firstName +
// 			" " +
// 			lastName +
// 			" and I am " +
// 			age +
// 			" years old. I am from " +
// 			country +
// 			" in " +
// 			city +
// 			"."
// 	);
// }

// userAbout("John", "Doe", "30", "USA", "New York");

// // 2. Declaration

// function isStudent(fullname, age, isMarried, studies) {
// 	console.log(
// 		fullname +
// 			" is " +
// 			age +
// 			" years old. Is he married? " +
// 			isMarried +
// 			". He studies " +
// 			studies +
// 			"."
// 	);
// }

// isStudent("John", "30", false, "Web Development");

// // 3. Declaration

// function computer(brand, model, year) {
// 	console.log(
// 		"This computer was made by " +
// 			brand +
// 			" in " +
// 			year +
// 			". It is a " +
// 			model +
// 			"."
// 	);
// }

// computer("Apple", "Macbook Pro", "2018");

// // 4. Declaration

// function calculateAge(year) {
// 	// *Yoshni hisoblab beradi.
// 	console.log(2022 - year);
// }

// calculateAge(1990);

// // 5. DECLARATION

// function yearsUntilRetirement(name, year) {
// 	// *Pensiyaga qancha qoldi bilib beradi.
// 	console.log(65 - (2022 - year));
// }

// yearsUntilRetirement("John", 1990);

// /**************
//  * !EXPRETION; *
//  **************/

// // 1. EXPRESSION

// let userAbout_expression = function (firstName, lastName, age, country, city) {
// 	return `Your name is ${firstName} ${lastName} and you are ${age} years old. You are from ${country} in ${city}.`;
// };

// console.log(userAbout_expression("John", "Doe", "30", "USA", "New York"));

// // 2. EXPRESSION

// let isStudent_expression = function (fullname, age, isMarried, studies) {
// 	return `${fullname} is ${age} years old. Is he married? ${isMarried}. He studies ${studies}.`;
// };

// console.log(isStudent_expression("Jon Mark", "20", false, "true"));

// // 3. EXPRESSION

// let computer_expression = function (brand, model, year) {
// 	return `This computer was made by ${brand} in ${year}. It is a ${model}.`;
// };

// console.log(computer_expression("Apple", "Macbook Pro", "2018"));

// // 4. EXPRESSION

// let calculateAge_expression = function (year) {
// 	// *Yoshni hisoblab beradi.
// 	return `You will be ${2022 - year} years old.`;
// };

// console.log(calculateAge_expression(1990));

// // 5. EXPRESSION

// let yearsUntilRetirement_expression = function (name, year) {
// 	// *Pensiyaga qancha qoldi bilib beradi.
// 	return `${name} will be retired in ${65 - (2022 - year)}.`;
// };

// console.log(yearsUntilRetirement_expression("John", 1990));

// let nimadir = function (firstName, lastName, age, country, city) {
// 	return `Your name is ${firstName} ${lastName} and you are ${age} years old. You are from ${country} in ${city}.`;
// };
// console.log(nimadir("John", "Doe", "30", "USA", "New York"));
