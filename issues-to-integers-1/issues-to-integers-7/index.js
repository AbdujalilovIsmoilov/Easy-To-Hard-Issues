"use strict";

// #Integer7

// Ikki xonali son berilgan. Uning raqamlari yigindisini aniqlovchi programma tuzilsin.

const total = 12; // Foydalanuvchi kiratadigan son.
if (total > 9 && total <= 99) {
  // Foydalanuvchi kiratayotgan son 2 xonali son ekanligi aniqlanyapti
  const firstNumber = Math.floor(total / 10); // total variable dagi biriktirilgan value ni o'nliklar xonasidagi sonni topish funksiyasi:
  const secondNumber = total % 10; // total variable dagi biriktirilgan value ni birliklar xonasidagi sonni topish funksiyasi:
  console.log(firstNumber + secondNumber);
  // total ga biriktirilgan birlikdagi son va o'nlikdagi sonning yigindisi amalga oshiruvchi funksiyasi
} else {
  console.log(0);
}