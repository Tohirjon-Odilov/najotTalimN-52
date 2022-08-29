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

function additionNumber(){
	let a = Number(prompt("Son kiriting?"))
	let b = Number(prompt("Son kiriting?"))
	let result = a + b
	return result;
}

console.log(additionNumber())



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
