"use strict";

// #Integer15

// ### Uch xonali son berilgan. Uning o'nliklar xonasidagi raqam bilan yuzliklar 
// ### xonasidagi raqamni almashtirishdan hosil bo'lgan sonni aniqlovchi programma tuzilsin.
// ### (Kirish=123; Natija: 213)

const number = 123
if (number <= 99) {
  console.log(`${number} soni 3 xonali sondan kichkina.`);
} else if (number >= 1000) {
  console.log(`${number} soni 3 xonali sondan katta`);
} else if (isNaN(number)) {
  console.log(`Bu son emas. Matn ishlatmang. `);
} else {
  let numberOne = Math.floor(number / 100);
  let numberTwo = Math.floor((number % 100) / 10);
  const numberThree = number % 10;
  [numberOne, numberTwo] = [numberTwo, numberOne];
  console.log(`Kirish: ${number} Natija: ${numberOne}${numberTwo}${numberThree} ga teng.`);
}