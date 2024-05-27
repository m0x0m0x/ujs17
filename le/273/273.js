// Work for Lesson 273 - Modules strict by default

// Import Zone
import * as TE from "../../UTILS/text.js";
// import { addToCart, totalPrice as Price, TQ } from "./shoppingCart.js";

// import * as ShpCa from "./shoppingCart.js";

//
TE.mainHead("273: Exporting and importing Modules");

console.log("Importing Pussy");

// console.log(shippingCost);
// ShpCa.addToCart("pussy", 9);
// console.log(ShpCa.totalPrice);

// import add, { addToCart, totalPrice as Price, TQ } from "./shoppingCart.js";
import add, { cart } from "./shoppingCart.js";
add("juice", 100);
add("boob", 12);
add("squt", 10);
console.log(cart);
