const dollar = 10910.0;
const euro = 10600.0;

let name = prompt(
	"Ismingizni kiriting. Ismingizni kiritish bilan davom etishingiz mumkin.",
	"Tohirjon"
);

if (name !== " " && name !== null) {
	let naqd = confirm(
		`${name}, sayohat uchun qancha pul ajratgansiz? Dollarda kiritishin Hoxlasangiz (Ok) ni bosing. Rad javobini bersangiz avtomatik so'mda hisoblanadi.`
	);

	//!Dollar uchun-----------------------------------------------------
	if (naqd) {
		let money = prompt(
			"Qancha pulingiz bor?\nKiritilgan son dollarda hisoblanadi!!!"
		);
		let borish = 500;
		borish += 250;
		borish += 120;
		if (money >= borish) {
			let qoldiq = money - borish;
			alert(`Pul yetarli, yo'lingiz ochiq. Oq yo'l bo'lsin ${name}!!!`);
			if (1200 <= money) {
				alert(
					`Pulingiz hattoki uydagilarga sovg'a olgani ham yatadi. Consolga qarang.`
				);
			}
			console.log(
				`Jami ketish uchun sarflanadigan mablag': $${borish} (dollar);\nSizning mablag'ingiz: $${money} (dollar). Sizda $${qoldiq} (dollar) ortiqcha pul mavjud;`
			);
		} else if (money <= 300) {
			alert("Hazillashyapsizmi buncha pul bilan sayohatga chiqib bo'lmaydi!!!");
			let qoldiq = borish - money;
			console.log(
				`Jami ketish uchun sarflanadigan mablag': $${borish} (dollar);\nSizning mablag'ingiz: $${money} (dollar).  Sizga $${qoldiq} (dollar) ortiqcha pul mavjud;`
			);
		} else {
			let qoldiq = borish - money;
			alert(
				`Sizga $${qoldiq} dollar yetmayapti, iltimos mablag'ingiz yetarli bo'laganida qaytib keling!!!`
			);
			console.log(
				`Jami ketish uchun sarflanadigan mablag': $${borish} (dollar);\nSizning mablag'ingiz: $${money} (dollar). Sizda $${qoldiq} (dollar) pul yetmayapti;`
			);
		}
	} else {
		//!So'm uchun-----------------------------------------------------
		let money = prompt(
			"Qancha pulingiz bor?\nKiritilgan son so'mda hisoblanadi!!!"
		);
		let borish = Math.round(500 * dollar);
		borish += Math.round(250 * dollar);
		borish += Math.round(120 * euro);
		if (money >= borish) {
			let qoldiq = money - borish;
			alert(`Pul yetarli, yo'lingiz ochiq. Oq yo'l bo'lsin ${name}!!!`);
			if (12000000 <= money) {
				alert(
					`Pulingiz hattoki uydagilarga sovg'a olgani ham yatadi. Consolga qarang.`
				);
			}
			console.log(
				`Jami ketish uchun sarflanadigan mablag': ${borish} so'm;\nSizning mablag'ingiz: ${money} so'm.  Sizda ${qoldiq} so'm ortiqcha pul mavjud;`
			);
		} else if (money <= 3000000) {
			alert("Hazillashyapsizmi buncha pul bilan sayohatga chiqib bo'lmaydi!!!");
			let qoldiq = borish - money;
			console.log(
				`Jami ketish uchun sarflanadigan mablag': ${borish} so'm;\nSizning mablag'ingiz: ${money} so'm.  Sizga ${qoldiq} so'm yetmayapti;`
			);
		} else {
			let qoldiq = borish - money;
			alert(
				`Sizga ${qoldiq} so'm yetmayapti, iltimos mablag'ingiz yetarli bo'laganida qaytib keling!!!`
			);
			console.log(
				`Jami ketish uchun sarflanadigan mablag': ${borish} so'm;\nSizning mablag'ingiz: ${money} so'm.  Sizda ${qoldiq} so'm yetmayapti;`
			);
		}
	}
} else {
	console.log(`Ism kiritmadingiz yoki chet elga borishni bekor qildingiz.`);
}
