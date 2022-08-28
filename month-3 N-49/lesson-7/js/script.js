// simple calculator with swith case

// // Natijani birlashtirish uchun:
// let result;
// // Operatorni olish uchun:
// const operator = prompt(`Operator kiriting: '+', '-', '/', '*'`)
// // Sonlarni olish uchun:
// const firstOperand = parseFloat(prompt(`Birinchi operandni kiriting!`))
// const secondOperand = parseFloat(prompt(`Ikkinchi operandni kiriting!`))
// // Main part
// switch (operator){
// 	case '+':
// 		result = firstOperand + secondOperand
// 		console.log(`${firstOperand} + ${secondOperand} = ${result}`)
// 		break;
// 	case '-':
// 		result = firstOperand - secondOperand
// 		console.log(`${firstOperand} - ${secondOperand} = ${result}`)
// 		break;
// 	case '/':
// 		result = firstOperand / secondOperand
// 		console.log(`${firstOperand} / ${secondOperand} = ${result}`)
// 		break;
// 	case '*':
// 		result = firstOperand * secondOperand
// 		console.log(`${firstOperand} * ${secondOperand} = ${result}`)
// 		break;
// 	default:
// 		console.log("Invalid operator");
// }

/////////////////////

// multiple case switch program
// let fruit = 'mango';
// switch(fruit) {
//     case 'apple':
//     case 'mango':
//     case 'pineapple':
//         console.log(`${fruit} is a fruit.`);
//         break;
//     default:
//         console.log(`${fruit} is not a fruit.`);
//         break;
// }

// ?Task 1

// let num1 = prompt("Son kiriting");
// let num2 = prompt("Son kiriting");
// for (i = 0; i < num1; i++) {
// 	console.log(num2);
// }

// ?Task 2
// let num1 = 5;
// let num2 = 15;
// let num3 = 0;

// if(num1 < num2){
// 	for (let i = num1; i <= num2; i++) {
// 		console.log(i);
// 		num3 ++
// 	}
// 	console.log(`${num1} dan ${num2} gacha bo'lgan sonlar ro'yhati`);
// 	console.log(`${num1} dan ${num2} gacha bo'lgan sonlar soni => \n\n${num3 - 1} ta.`)
// }else{
// 	console.log(`${num1} < ${num2} = false`)
// }

// ?Task - 3
// let num1 = 5;
// let num2 = 15;
// let num3 = 0;

// if(num1 < num2){
// 	for (let i = num2 - 1; i > num1; i--) {
// 		console.log(i);
// 		num3 ++
// 	}
// 	console.log(`${num2} dan ${num1} gacha bo'lgan sonlar ro'yhati`);
// 	console.log(`${num2} dan ${num1} gacha bo'lgan sonlar soni => \n\n${num3 - 1} ta.`)
// }else{
// 	console.log(`${num2} < ${num1} = false`)
// }

// ?Task - 4
// let konfet = Number(14000)
// for(let i = 1; i <= 10; i++){
// 	console.log(`${i * konfet} kg`) 
// }

// ?Task - 5
let konfet = Number(14000)
for(let i = 1; i <= 10; i++){
	let division = i / 10;
	let result = division * konfet
	console.log(`${division * konfet} kg`) 
}