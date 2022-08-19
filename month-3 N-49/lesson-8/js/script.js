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

let son1 = prompt("Enter first number:");
let son2 = prompt("Enter second number:");
let operation = prompt("Enter operator:");

function calculator(son1, son2, operation) {
	if (operation === "+") {
		return son1 + son2;
	} else if (operation === "-") {
		if (son1 < son2) {
			return 0;
		} else {
			return son1 - son2;
		}
	} else if (operation === "*") {
		return son1 * son2;
	} else if (operation === "/") {
		let result = son1 / son2;
		if (result % 2 === 0) {
			return Math.round(result);
		} else {
			return Math.round(result);
		}
	} else {
		return "Invalid operator";
	}
}

console.log(calculator(son1, son2, operation));
