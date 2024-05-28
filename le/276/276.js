/*
276 - Common JS Modules - Traditional Method of JS modules
*/

// Export - This is the common JS
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`
//     ---
//     ${product} = ${quantity}
//     ---
//     `);
//   };

// Import

const { addToCart } = require("../273/shoppingCart.js");
