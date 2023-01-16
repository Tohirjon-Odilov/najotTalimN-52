let arr = [["name", "ali"], ["age", 15], ["gender", "male"], ["job"]];

let obj = {};

for (let i of arr) {
  // console.log(i)
  obj[i[0]] = i[1] || null;
}
console.log(obj);

let newArr = [];
for (let i in obj) {
  console.log(i);
  newArr.push([i, obj[i]]);
}
console.log(newArr);
