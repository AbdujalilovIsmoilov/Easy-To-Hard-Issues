"use strict";

// #Integer4

// A va B (A > B) musbat sonlari berilgan. A kesmada, B kesmani 
// necha marta joylashtirish mumkinligini aniqlovchi 
// programma tuzilsin.

const a = 120; // Foydalanuvchidan beriladigan boshlang'ich kesma soni.
const b = 20; // Foydalanuvchidan beriladigan a kesmadagi b kesmani necha marta joshlashtirish mumkinligini aniqlovchi kesma soni.

if (a > 0 && b > 0) { // Agar a va b sonlari musbat bo'lsa if ni ichidagi condition ishlaydi bo'lmasam else ni ichidagi condition ishlaydi
  const integerResult = Math.floor(a / b); // A kesmani B kesmaga bo'lib yuboradigan shart. Nega bu yerda bo'lib yuboryapmiz o'zi ?
  // A sonida B sonini necha marta joshlashtirish mumkinligini aniqlamoqchimiz. Bu yerda misol 20 sonini ichida 4 sonini biz 5 marta
  // joshlashtirishimiz mumkin. 
  console.log(`${a} kesmada ${b} kesmani ${integerResult} marta joylashtirish mumkin.`);
} else {
  if (a < 0) { // Bu yerda a soni manfiy son ekanligi tekshirilyapti
    console.log(`${a} soni musbat son emas`);
  }
  if (b < 0) { // Bu yerda b soni manfiy son ekanligi tekshirilyapti
    console.log(`${b} soni musbat son emas`);
  }
}