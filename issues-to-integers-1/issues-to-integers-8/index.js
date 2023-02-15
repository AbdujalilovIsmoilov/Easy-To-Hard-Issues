"use strict";

// #Integer8

// Ikki xonali son berilgan. Uning raqamlari o'rnini almashtirishdan hosil bo'lgan 
// sonni aniqlovchi programma tuzilsin.

const total = 45; // Foydalanuvchi kiratayotgan son.

if (total > 9 && total <= 99) { // Foydalanuvchi kiritgan sonni tekshirish funksiyas.
  let firstNumber = Math.trunc(total / 10); // Foydalanuvchini o'nliklar sonini olish funksiyasi.
  let secondNumber = total % 10; // Foydalanuvchini birliklar sonini olish funksiyasi.
  console.log(firstNumber, secondNumber);
  const replaceNumber = [firstNumber, secondNumber] = [secondNumber, firstNumber];
  // Foydalanuvchi bergan qiymatni almashtirish funksiyasi.
  console.log(replaceNumber.join("")); // Foydalanuvchidan chiqadigan javob.
} else {
  console.log(0);
}