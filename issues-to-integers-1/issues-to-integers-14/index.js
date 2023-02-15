"use strict";

// #Integer14

// ### Uch xonali son berilgan. Uning o'ngdan birinchi raqamini o'chirib 
// ### chap tarafiga yozishdan hosil bo'lgan sonni aniqlovchi programma tuzilsin.

const number = 123;
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
  [numberOne] = [numberThree];
  numberThree = "";
  console.log(`
  Bu ${number} sonining:
  Birinchi raqam: ${numberOne}. ga teng.
  Ikkinchi raqam: ${numberTwo}. ga teng.
  Uchinchi raqam: ${numberThree}. hech qandey qiymat yo'q.
  `);

  /*
  Bu misol da Uch xonali o'ng tomondagi birinchi raqami uch xonali chap tomondagi
  birinchi son bilan almashtirilyaptida keyin esa uch xonali sonning o'ng tomondagi birinchi soni
  o'chirib yuborilyapti. Natija keyin Masalani shartidek chiqyapti.
  */
}