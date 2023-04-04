"use strict";
// chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const km = Number(prompt("Inserisci i km da percorrere"));
const age = Number(prompt("Inserisci la tua età"));
if (isNaN(km) || isNaN(age) || km <= 0 || age <= 0) {
  alert("Inserisci dei numeri validi!");
  window.location.reload();
}
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
let price = km * 0.21;
let message = "biglietto tariffa intera";
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
if (age < 18) {
  price -= price * 0.2;
  message = "biglietto tariffa minorenni";
} else if (age >= 65) {
  price -= price * 0.4;
  message = "biglietto tariffa over 65";
}

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
console.log(`${price.toFixed(2)}€`);
console.log(message);
