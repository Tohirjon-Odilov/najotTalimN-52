/************************
 * !OBJECT DESTRUCTURING *
 ************************/

const personOne = {
  // name: 'John',
  age: 32,
  address: {
    city: 'New York',
    state: 'NY',
  }
}

const personTwo = {
  name: 'Bill',
  age: 25,
  address: {
    city: 'Argen',
    state: 'GN',
  }
}

// const { name, age, address } = personOne; // * name = John
// const { name: firstname, age, address } = personOne;  // *name <=> firstname =John 
// const { name: firstname = 'Jack', age, address } = personOne; // *firstname = Jack // agar qiymat bo'lmasa
const { name: firstname = 'Jack', ...dest } = personOne; // *destructuring bunda age'dan boshlab oxirigacha qirqib oladi.
// *name: firstname => qayta nomalash
// *name: firstname = Jack => agar obj ichida name yo'q bo'lsa jack console'ga chiqadi, bundan kelib chiqadiki shu yerning o'zida turib obj ichiga ma'lumot kiritsak bo'ladi.


console.log(firstname);
// console.log(age);
// console.log(address);
console.log(dest); // {age: 32, address: {city: New York, state: NY}}