"use strict";

// #Integer11

// Uch xonali son berilgan. Uning raqamlar yig'indisini aniqlovchi programma tuzilsin. 

const total = 3213; // Foydalanuvchidan beriladigan son.

if (total > 99 && total <= 999) { // Foydalanuvchidan beriladigan sonni shartini bajarish funksiyasi. 
  const hundredNumber = Math.floor(total / 100); // Foydalanuvchidan berilgan sonni yuzliklar hadi.
  const secondNumber = Math.trunc(total / 10) % 10; // Foydalanuvchidan berilgan sonni o'nliklar hadi.
  const thirdNumber = total % 10; // Foydalanuvchidan berilgan sonni birliklar hadi.
  console.log(hundredNumber + secondNumber + thirdNumber);
  // Foydalanuvchidan berilgan sonni 3 chala hadni yig'indisini aniqlovchi funksiya.
} else {
  console.log(0);
}