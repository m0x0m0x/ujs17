// Exporing Module
console.log("Exporting panty - Exportedf from shoppingCard.js which is module");

/*
======================================
Section for use with 274.js
// Adding blocking code
*/

// console.log("start fetching users");
// await fetch("https://jsonplaceholder.typicode.com/users");
// console.log("DONE BASTRD");
//===================================

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`
  ----
  ${product} = ${quantity}
  -----
  `);
};

// Named Exports - export naming things

const totalPrice = 23;
const totalQuantity = 23;

export { totalPrice, totalQuantity as TQ };

// Defailt exports

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`
    ----
    ${product} = ${quantity}
    -----
    `);
}
