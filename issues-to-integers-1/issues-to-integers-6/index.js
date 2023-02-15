"use strict";

// #Integer6

// Ikki xonali son berilgan. Oldin uning o'nliklar xonasidagi raqamini,
// So'ng birliklar xonasidagi raqamini chiqaruvchi programma tuzilsin.

let total = 14; // Foydalanuvchi kiratadigan son.

if (total > 9 && total <= 99) {
  // Foydalanuvchi kiratayotgan son 2 xonali son ekanligi aniqlanyapti
  const firstNumber = Math.floor(total / 10); // total variable dagi biriktirilgan value ni o'nliklar xonasidagi sonni topish funksiyasi:
  const secondNumber = total % 10; // total variable dagi biriktirilgan value ni birliklar xonasidagi sonni topish funksiyasi:
  console.log(`  Son: ${total} ga teng.
  1) Sonning birliklar xonasidagi raqami: ${secondNumber} ga teng
  2) Sonning o'nliklar xonasidagi raqami: ${firstNumber} ga teng`);
  // total o'zgaruvchidagi biriktirilgan birliklar va o'nliklar son natijasi.
}