let hasCar = confirm("Do you have a car?");

if (hasCar) {
	let carModel = prompt("What model is your car?", "BMW");
	let carColor = prompt("What color is your car?", "Red");
	let carYear = prompt("What year is your car?", "2018");
	let carPrice = prompt("What is the price of your car?", "20000");
	let hasHouse = confirm("Do you have a house?");
	let houseColor = prompt("What color is your house?", "White");
	let housePrice = prompt("What is the price of your house?", "30000");
	console.log(
		`Do you have a car? ${hasCar}` +
			`\nModel: ${carModel}` +
			`\nColor: ${carColor}` +
			`\nYear: ${carYear}` +
			`\nPrice: ${carPrice}` +
			`\nDo you have a house? ${hasHouse}` +
			`\nColor: ${houseColor}` +
			`\nPrice: ${housePrice}`
	);
}else{
  alert("You don't have a car");
  alert("Birinchi moshina sotib oling! Keyin qaytib kelarsiz.");
}
