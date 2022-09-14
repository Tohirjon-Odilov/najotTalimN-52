class Person {
  name = "Salim"
  surname = "Karimov"
}
class Car {
  color = "red"
  brand = "Bmw"
}
class Pet {
  weight = "100"
  type = "Dog"
}

// *Bu usul bilan export qilishlik, xohlagan nom ostida import qilishlik imkonini yaratadi hamda defaultdan faqatgina bir marta foydalana olamiz.
// export default Car;


// *Bu usul bilan export qilinsa, gulli qavslar bilan import qilinadi hamda xohlagan nomni bera olmaymiz 
// export { Person, Pet };


// *Bu usul bilan export qilinganda, barcha obyekt bir qutiga joylanadi va buni ham xohlagan nom ostida import qila olamiz. Biz shunda bir obyektga murojaat qilmoqchi bo'lsak import qilingan nomdan so'ng nuqta qo'yib murojaat qilsak bo'ladi.
// export default { Person, Car, Pet };  
