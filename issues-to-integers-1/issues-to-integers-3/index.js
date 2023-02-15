"use strict";

// #Integer3

// Faylning hajmi baytlarda berilgan. Bo'lib butunni olish operatsiyasidan foydalanib
// fayl hajmining to'liq kilobaytlarda ifodalovchi programma tuzilsin. 
// 1Kb = 1024 bayt

const Kb = 1024; // 1Kb 1024 bayt
const bayt = 3072; // foydalanuvchidan berilgan bayt faylning hajmi.
const integerResult = bayt / Kb; // foydalanuvchidan berilgan bayt ni kilobaytlarga bo'lib yuborish jaroyoni.

console.log(`${integerResult} Kb`); // Bayt ni kilobaytga bo'lib yuborgandagi kilobayt soni: 3 Kilobayt