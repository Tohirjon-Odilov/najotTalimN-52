// let num = +prompt("Enter a number.");

// for (let i = 0; i <= num; i++) {
// 	console.log("Krug:", i);
// }

// let num = +prompt("Enter a number.");

// for (let i = 0; i <= num; i++) {
// 	if (i % 2 === 0) {
// 		console.log("Juft son:", i);
// 	} else {
// 		console.log("Toq son:", i);
// 	}
// }

// ? Foydalanuvchi son kiritadi har kiritgan sonini bir biriga qo'shib ketadi va qachonki 0 kiritsa amal to'xtaydi va consoleda barcha sonlar yig'indisi chiqadi.

// let result = 0;
// control = true;

// while (control) {
// 	let num = parseInt(prompt("Enter a number."));
// 	if (num !== 0) {
// 		result += num;
// 	} else {
// 		control = false;
// 		console.log(result);
// 	}
// }

// *Do while bilan

// do {
// 	let num = parseInt(prompt("Enter a number."));
// 	if (num !== 0) {
// 		result += num;
// 	} else {
// 		control = false;
// 		console.log(result);
// 	}
// } while (control);

/*********
 * *BREAK *
 *********/

let num = 20 - 0,
	i = 0;

// while (i <= 100) {
// 	i++;
// 	console.log(i);
// 	if (i === 8) {
// 		break;
// 	}
// }

while (i < 20) {
	i++;
	if (i % 2 === 0) {
		continue;
	}
	console.log(i);
}
