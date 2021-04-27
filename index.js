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
const oneKmPrice = 0.21;

const userAge = Number(prompt("How old are you?"));
const travelDistance = Number(prompt("How fare are you travelling in km?"));
const fullPrice = oneKmPrice * travelDistance;
if (userAge < 18) {
  let twentyPrecentDiscount = fullPrice * 0.2;
  console.log(
    alert(
      `The price is ${(fullPrice - twentyPrecentDiscount).toFixed(2)} pounds`
    )
  );
} else if (userAge >= 65) {
  let fortyPrecentDiscount = fullPrice * 0.4;
  console.log(
    alert(
      `The price is ${(fullPrice - fortyPrecentDiscount).toFixed(2)} pounds`
    )
  );
} else {
  console.log(alert(`The price is ${fullPrice.toFixed(2)} pounds`));
}

const kmPrice = 0.21;
let londonOxford = 20;
let LondonManchester = 45;
let londonSheffild = 30;
let oxfordManchester = 50;
let oxfordSheffild = 55;
let manchesterSheffild = 60;

const destination = Number(
  prompt(
    `Please enter the number of the trip you wish to make:
    1. London  - Oxford 
    2. London - Manchester
    3. London - Sheffild
    4. Oxford - Manchester
    5. Oxford - Sheffild 
    6. Manchester - Sheffild`
  )
);

const age = Number(prompt("How old are you?"));
// London - Oxford
if (destination === 1 && age < 18) {
  let price = kmPrice * londonOxford;
  let twentyPrecentDiscount = price * 0.2;
  console.log(
    alert(
      `The price for your destination is ${(
        price - twentyPrecentDiscount
      ).toFixed(2)} pounds`
    )
  );
} else if (destination === 1 && age >= 65) {
  let price = kmPrice * londonOxford;
  let fortyPrecentDiscount = price * 0.4;
  console.log(
    alert(
      `The price for your destination is ${(
        price - fortyPrecentDiscount
      ).toFixed(2)} pounds`
    )
  );
} else if (destination === 1) {
  price = kmPrice * londonOxford;
  console.log(
    alert(`The price for your destination is ${price.toFixed(2)} pounds`)
  );
}

// London - Manchester
if (destination === 2 && age < 18) {
  let price = kmPrice * LondonManchester;
  let twentyPrecentDiscount = price * 0.2;
  console.log(
    alert(
      `The price for your destination is ${(
        price - twentyPrecentDiscount
      ).toFixed(2)} pounds`
    )
  );
} else if (destination === 2 && age >= 65) {
  let price = kmPrice * LondonManchester;
  let fortyPrecentDiscount = price * 0.4;
  console.log(
    alert(
      `The price for your destination is ${(
        price - fortyPrecentDiscount
      ).toFixed(2)} pounds`
    )
  );
} else if (destination === 2) {
  price = kmPrice * LondonManchester;
  console.log(
    alert(`The price for your destination is ${price.toFixed(2)} pounds`)
  );
}

// London - Sheffild
if (destination === 3 && age < 18) {
  let price = kmPrice * londonSheffild;
  let twentyPrecentDiscount = price * 0.2;
  console.log(
    alert(
      `The price for your destination is ${(
        price - twentyPrecentDiscount
      ).toFixed(2)} pounds`
    )
  );
} else if (destination === 3 && age >= 65) {
  let price = kmPrice * londonSheffild;
  let fortyPrecentDiscount = price * 0.4;
  console.log(
    alert(
      `The price for your destination is ${(
        price - fortyPrecentDiscount
      ).toFixed(2)} pounds`
    )
  );
} else if (destination === 3) {
  price = kmPrice * londonSheffild;
  console.log(
    alert(`The price for your destination is ${price.toFixed(2)} pounds`)
  );
}

// Oxford - Manchester
if (destination === 4 && age < 18) {
  let price = kmPrice * oxfordManchester;
  let twentyPrecentDiscount = price * 0.2;
  console.log(
    alert(
      `The price for your destination is ${(
        price - twentyPrecentDiscount
      ).toFixed(2)} pounds`
    )
  );
} else if (destination === 4 && age >= 65) {
  let price = kmPrice * oxfordManchester;
  let fortyPrecentDiscount = price * 0.4;
  console.log(
    alert(
      `The price for your destination is ${(
        price - fortyPrecentDiscount
      ).toFixed(2)} pounds`
    )
  );
} else if (destination === 4) {
  price = kmPrice * oxfordManchester;
  console.log(
    alert(`The price for your destination is ${price.toFixed(2)} pounds`)
  );
}

// Oxford - Sheffild
if (destination === 5 && age < 18) {
  let price = kmPrice * oxfordSheffild;
  let twentyPrecentDiscount = price * 0.2;
  console.log(
    alert(
      `The price for your destination is ${(
        price - twentyPrecentDiscount
      ).toFixed(2)} pounds`
    )
  );
} else if (destination === 5 && age >= 65) {
  let price = kmPrice * oxfordSheffild;
  let fortyPrecentDiscount = price * 0.4;
  console.log(
    alert(
      `The price for your destination is ${(
        price - fortyPrecentDiscount
      ).toFixed(2)} pounds`
    )
  );
} else if (destination === 5) {
  price = kmPrice * oxfordSheffild;
  console.log(
    alert(`The price for your destination is ${price.toFixed(2)} pounds`)
  );
}

//Manchester - Sheffild
if (destination === 6 && age < 18) {
  let price = kmPrice * manchesterSheffild;
  let twentyPrecentDiscount = price * 0.2;
  console.log(
    alert(
      `The price for your destination is ${(
        price - twentyPrecentDiscount
      ).toFixed(2)} pounds`
    )
  );
} else if (destination === 6 && age >= 65) {
  let price = kmPrice * manchesterSheffild;
  let fortyPrecentDiscount = price * 0.4;
  console.log(
    alert(
      `The price for your destination is ${(
        price - fortyPrecentDiscount
      ).toFixed(2)} pounds`
    )
  );
} else if (destination === 6) {
  price = kmPrice * manchesterSheffild;
  console.log(
    alert(`The price for your destination is ${price.toFixed(2)} pounds`)
  );
}
