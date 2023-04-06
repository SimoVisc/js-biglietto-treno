"use strict";
// // chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// const km = Number(prompt("Inserisci i km da percorrere"));
// const age = Number(prompt("Inserisci la tua età"));
// if (isNaN(km) || isNaN(age) || km <= 0 || age <= 0) {
//   alert("Inserisci dei numeri validi!");
//   window.location.reload();
// }
// // Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// // il prezzo del biglietto è definito in base ai km (0.21 € al km)
// let price = km * 0.21;
// let message = "biglietto tariffa intera";
// // va applicato uno sconto del 20% per i minorenni
// // va applicato uno sconto del 40% per gli over 65.
// if (age < 18) {
//   price -= price * 0.2;
//   message = "biglietto tariffa minorenni";
// } else if (age >= 65) {
//   price -= price * 0.4;
//   message = "biglietto tariffa over 65";
// }

// // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// console.log(`${price.toFixed(2)}€`);
// console.log(message);

const ticketForm = document.getElementById("ticket-form");
const btnTicketReset = document.getElementById("reset");
const ticketContainer = document.querySelector(".ticket-container");

ticketForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // 1. leggere i valori del form
  // 1a. leggo il nome
  // 1b. leggo i km
  // 1c. leggo la fascia d'età (age)
  const name = document.getElementById("name").value;
  const km = Number(document.getElementById("km").value);
  const age = document.getElementById("age").value;
  // 2. Calcolo il prezzo del biglietto e l'offerta
  // 2a. calcolo il prezzo base km * 0.21 con offerta "Biglietto standard"
  // 2b. verifico se devo applicare uno sconto age == underage || age == over e aggiorno il testo dell'offerta
  let price = km * 0.21;
  let offert = "Biglietto Standard";

  if (age === "underage") {
    price = price * 0.8;
    offert = "Biglietto minorenni";
  } else if (age === "over") {
    price = price * 0.6;
    offert = "Biglietto over 65";
  }
  // 3. mostrare il biglietto a schermo (stampo il risultato)
  // console.log(`${price.toFixed(2)}€`, offert);
  document.getElementById("ticket-name").innerHTML = name;
  document.getElementById("ticket-offert").innerHTML = offert;
  document.getElementById("ticket-wagon").innerHTML =
    Math.floor(Math.random() * 10) + 1;
  document.getElementById("ticket-cp").innerHTML =
    Math.floor(Math.random() * 10000) + 90000;
  document.getElementById("ticket-price").innerHTML = `${price.toFixed(2)}€`;

  ticketContainer.classList.add("show");
});

// Quando clicco su annulla
btnTicketReset.addEventListener("click", function () {
  ticketContainer.classList.remove("show");
});
