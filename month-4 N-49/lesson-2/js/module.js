function func1() {
  console.log("function1");
}
function func2() {
  console.log("function2");
}

// export { func1, func2 }


export {
  func1 as newFunc1,
  func2 as newFunc2,
}
