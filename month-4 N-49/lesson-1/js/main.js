/*
const data = new Numbers([12, -1, 0, 23.64, -23]);

let res1 = data.sorted(); // [-23,-1,0,12,23.34]

data.toInterger(); // [12,-1,24,-23]

data.stringNumber(); // ["12","-1", "0", "23.64", "-23"]

data.sumAll(); // 123
*/

let arr = [
  {
    id: 0,
    brand: "lexus",
    price: 234000,
  },
  {
    id: 1,
    brand: "ford",
    price: 12300,
  },
  {
    id: 2,
    brand: "bmw",
    price: 12300,
  },
  {
    id: 3,
    brand: "lexus",
    price: 12300,
  },
];

let cars = new Cars(arr);

cars.buy("ford"); //consoleda: Siz 123so'm Ford mashinasini sotib oldingiz.

cars.sumAll(); // 30 000

cars.removeAll("lexus"); //console: [{ford, bmw}]

cars.editPrice(2, 45000); //console []

cars.addCar(12, "chevrolet", 1200); // console: []
// throw bilan error qaytarsin
