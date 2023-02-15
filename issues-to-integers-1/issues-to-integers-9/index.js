"use strict";

// #Integer9

// Uch xonali son berilgan. Uning yuzlar xonasidagi raqamini aniqlovchi 
// programma tuzilsin. 

const total = 122; // Foydalanuvchidan berilgan son.

if (total > 99 && total <= 999) { // Foydalanuvchidan berilgan sonni tekshirish funksiyasi.
  const hundredNumber = Math.floor(total / 100); // Foydalanuvchidan berilgan sonni yuzliklar xonasidagini tekshirish.
  console.log(hundredNumber) // Foydalanuvchidan berilgan sonni natijasini chiqarish.
} else {
  console.log(0); // Foydalanuvchi notog'ri tergan raqam natijasi.
}