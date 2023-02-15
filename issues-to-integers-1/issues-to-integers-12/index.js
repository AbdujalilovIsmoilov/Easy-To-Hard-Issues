"use strict";

// #Integer12

// Uch xonali son berilgan. Uning raqamlarini teskari tartibda yozishdan hosil bo'lgan 
// sonni aniqlovchi programma tuzilsin.  

const total = 121; // Foydalanuvchidan beriladigan son.

if (total > 99 && total <= 999) { // Foydalanuvchidan beriladigan sonni shartini bajarish funksiyasi. 
  let hundredNumber = Math.floor(total / 100); // Foydalanuvchidan berilgan sonni yuzliklar hadi.
  let secondNumber = Math.trunc(total / 10) % 10; // Foydalanuvchidan berilgan sonni o'nliklar hadi.
  let thirdNumber = total % 10; // Foydalanuvchidan berilgan sonni birliklar hadi.
  const replaceNumber = [hundredNumber, secondNumber, thirdNumber] = [thirdNumber, secondNumber, hundredNumber];
  // Foydalanuvchidan berilgan sonni teskari qiymatga almashtirish funksiyasi.
  console.log(replaceNumber.join(""));
  // Foydalanuvchidan berilgan qiymatni natijasini chiqaruvchi funksiya.
} else {
  console.log(0);
}