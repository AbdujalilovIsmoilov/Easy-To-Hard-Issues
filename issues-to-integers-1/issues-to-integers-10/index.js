"use strict";

// #Integer10

// Uch xonali son berilgan. Oldin uni birliklar xonasidagi raqamni so'ng o'nliklar 
// xonasidagi raqamni chiqaruvchi programma tuzilsin. 

const total = 234; // Foydalanuvchidan beriladigan son.

if (total > 99 && total <= 999) { // Foydalanuvchidan beriladigan sonni tekshirish funksiyasi.
  const firstNumber = total % 10; // Foydalanuvchidan berilgan sonni birliklar xonasi.
  const secondNumber = Math.floor(total / 10) % 10; // Foydalanuvchidan berilgan sonni o'nliklar xonasi.
  console.log(`
  User: ${total} son.
  Birliklar xonasidagi raqami: ${firstNumber} ga teng.
  O'nliklar xonasidagi raqami: ${secondNumber} ga teng.
  `);
  // Foydalanuvchidan berilgan 3 xonali sonni birliklar va o'nliklar xonasi.
} else {
  console.log(0);
}