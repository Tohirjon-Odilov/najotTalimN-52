/**************
 *? CALCULATOR *
 **************/

function Mycalc(a, b) {
  this.a = a
  this.b = b

  this.addition = function () {
    return this.a + this.b
  }
  this.subtraction = function () {
    return this.a - this.b
  }
  this.division = function () {
    return this.a / this.b
  }
  this.multiplication = function () {
    return this.a * this.b
  }

  this.pow = function (pow) {
    let a = Math.pow(this.a, pow ? pow : 1);
    let b = Math.pow(this.b, pow ? pow : 1);
    return [
      a, b
    ]
  }
}

let calc = new Mycalc(2, 3)

console.log(calc.addition());
console.log(calc.subtraction());
console.log(calc.division());
console.log(calc.multiplication());

