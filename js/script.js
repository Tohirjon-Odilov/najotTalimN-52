// let massive = [1, 2, 3, 4, 3, 4, 2, 3];

// Array.prototype.each = function each(callback, arr) {
// 	return callback(arr);
// };

// console.log(
// 	(function (el) {
// 		for (let i = 0; i < el.length; i++) {
// 			console.log(el[i]);
// 		}
// 	},	massive));

// let massive = [11,2,0,43,53,12,9,5,3]

// let sorted = massive.sort((a,b) => {
  //   return a - b
  // })
  // console.log(sorted)
  
/**************
 *  ?VAZIFA *
 **************/
  
// let massive = [11,2,0,43,53,12,9,5,3]
// console.log("Sortlanmagan holati");
// console.log(massive);
// let str = ['car', "window", "salom", "masha"]
// console.log(str);

// function sorting(values){
//   let newMassiv = []
//   let newStr = []
  
//   for (let i = 0; i < values.length; i++){
//     if (typeof values[i] === "number"){
//       newMassiv.push(values[i])
//       newMassiv.sort((a,b) => {
//         return a - b;
//       })
//     }else{
//       newStr.push(values[i])
//       newStr.sort()
//     }
//   } 
//   return newMassiv;
//   return str;
// }

// console.log("sorted");
// console.log(sorting(massive));
// console.log(sorting(str));

// ?2-usul ozoqroq kod yozilgan

let array = [9,4,10,77,5,6,11,0,97,51,2003]
let string = ['olma', 'behi', 'shaftoli', "banan", 'mayiz', 'apelsin']

function newSort(sortValue){
  if(typeof sortValue[1] === 'number'){
    return sortValue.sort((a, b) => { 
      return a - b; 
    });
  }else{
    return sortValue.sort()
  }
}

console.log(newSort(array));
console.log(newSort(string));