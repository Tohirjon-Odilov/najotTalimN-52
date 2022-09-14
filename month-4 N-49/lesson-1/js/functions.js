function stringToUpper(str) {
  return str.toUpperCase();
}

// *defaultdan foydalanganimizdan so'ng keyingilarini gulli qavslar bilan export qilishimiz kerak.
export default stringToUpper

// exportni joyida qilish
// export function main1() {
//   console.log("main1");
// }

// export function main2() {
//   console.log("main2");
// }


function main1() {
  console.log("main1");
}

function main2() {
  console.log("main2");
}

// *Bu esa barchasini birgalikda export qilish tepadagidan faqatgina sintaksis jihatdan farq qiladi.
export { main1, main2 };