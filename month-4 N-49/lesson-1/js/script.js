let arr = [18, 4, -5, -6, -7, -8, -95, 1, -10, 3, 9, -1]
let arr2 = 0

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    arr2 += arr[i]
  }
}
console.log(arr2);