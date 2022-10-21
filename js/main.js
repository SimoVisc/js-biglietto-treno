"use strict";
// chiedi il numero di km da percorrere e l'età del passeggero
const km = Number (prompt ("inserisci il numero di km da percorrere"));
const age = Number (prompt ("inserisci la tua età"));
console.log(km,age);
// calcola il prezzo totale del viaggio, seguendo queste regole
// il prezzo totale del biglietto è definito in base al KM(0.21€ al km)
let price = km * 0.21;
let message = "prezzo del biglietto";
// va applicato uno sconto del 20% per i minorenni 
// va applicato uno sconto del 40% per gli over65
if (age < 18){
    price = price - price * 0.2;
    message = "prezzo tariffa minorenni";
}else if (age >= 65){
    price = price - price * 0.4;
    message = "prezzo tariffa over 65";
}
console.log('${price.toFixed(2)}€')
