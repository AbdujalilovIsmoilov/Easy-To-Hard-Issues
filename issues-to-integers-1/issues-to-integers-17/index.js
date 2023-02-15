"use strict";

// #Integer17.

// ### Integer17. Kun boshidan boshlab N sekund vaqt o'tdi. Kun boshidan boshlab qancha minut
// ### to'la o'tganligini aniqlovchi programma tuzilsin.  

const second = 3600;
const minute = 60;
if (isNaN(second)) {
  console.log("Son emas");
} else {
  const result = Math.floor(second / minute) + " minut";
  console.log(`Kun boshidan boshlab ${result} minut o'tdi`);
}