"use strict";

// #Integer13

// Uch xonali son berilgan. Uning chapdan birinchi raqamini o'chirib o'ng tarafiga yozishdan 
// hosil bo'lgan sonni aniqlovchi programma tuzilsin.

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
  [numberThree] = [numberOne];
  numberOne = "";
  console.log(`
  Bu ${number} sonining:
  Birinchi raqam: ${numberOne}. hech qandey qiymat yo'q.
  Ikkinchi raqam: ${numberTwo}. ga teng.
  Uchinchi raqam: ${numberThree}. ga teng.
  `);

  /*
  Bu misol da Uch xonali chap tomondagi birinchi raqami uch xonali o'ng tomondagi
  birinchi son bilan almashtirilyaptida keyin esa uch xonali sonning chap tomondagi birinchi soni
  o'chirib yuborilyapti. Natija keyin Masalani shartidek chiqyapti.
  */
}