"use strict";

// #Integer16

// ### Uch xonali son berilgan. Uning o'nliklar xonasidagi raqam bilan birliklar 
// ### xonasidagi raqamni almashtirishdan hosil bo'lgan sonni aniqlovchi programma tuzilsin.
// ### Kirish=123; Natija: 132

const number = 145;
if (number <= 99) {
  console.log(`${number} soni 3 xonali sondan kichkina.`);
} else if (number >= 1000) {
  console.log(`${number} soni 3 xonali sondan katta`);
} else if (isNaN(number)) {
  console.log(`Bu son emas. Matn ishlatmang. `);
} else {
  let numberOne = Math.floor(number / 100);
  let numberTwo = Math.floor((number % 100) / 10);
  let numberThree = number % 10;
  [numberTwo, numberThree] = [numberThree, numberTwo];
  console.log(`Kirish: ${number} Natija: ${numberOne}${numberTwo}${numberThree} ga teng.`);
}