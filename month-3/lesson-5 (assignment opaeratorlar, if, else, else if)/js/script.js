const dollar = 10910.00;
const euro = 10600.00;

let naqd = confirm("Hoxlasangiz dollarda kiriting");

if(naqd){
  let money = prompt("Qancha pulingiz bor?\nKiritilgan son dollarda hisoblanadi!!!");
  console.log(money);
}else{
  let money = prompt("Qancha pulingiz bor?\nKiritilgan son so'mda hisoblanadi!!!");
  money *= dollar;
  let borish = Math.round(500 * dollar);
  borish += Math.round(250 * dollar);
  borish += Math.round(120 * euro);
  console.log(`Jami ketish uchun sarflanadigan mablag': ${borish} so'm;\nSizning mablag'ingiz: ${money} so'm;`);
}

