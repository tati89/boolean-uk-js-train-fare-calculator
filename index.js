/*
 Description
   This time we're going to build a train fare calculator.
    Simple enough, right? We're not looking for something too fancy,
    but you should be able to input your age and the distance you're travelling
    and get your ticket price.

 Instructions
  - Ask the user for their age and how far they are travelling (in km)
  - The price per travelled km will be £0.21
  - Junior passengers (under 18) get a 20% discount
  - Senior passengers (over 65) get a 40% discount

 Challenge
  We're going to rewrite our program so that the user chooses a starting point
  and a destination from a list of stations, besides inputting their age and then
  get the ticket price.

 You can come up with the stations' names and distances. Try also to code it so
 that you only need to change the price per km in one place, and all the stations
 should have the updated price
*/
const kmPrice = 0.21;

const userAge = Number(prompt("How old are you?"));
const travelDistance = Number(prompt("How fare are you travelling in km?"));
const fullPrice = kmPrice * travelDistance;
if (userAge < 18) {
  let twentyPrecentDiscount = fullPrice * 0.2;
  alert(
    `The price is ${(fullPrice - twentyPrecentDiscount).toFixed(2)} pounds`
  );
} else if (userAge >= 65) {
  let fortyPrecentDiscount = fullPrice * 0.4;
  alert(`The price is ${(fullPrice - fortyPrecentDiscount).toFixed(2)} pounds`);
} else {
  alert(`The price is ${fullPrice.toFixed(2)} pounds`);
}
