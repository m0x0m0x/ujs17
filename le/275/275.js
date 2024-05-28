// 275 - Module Patter

// IIFE - return data once
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`
    ---
    ${product} = ${quantity}
    ---
    `);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`
    ---
    ${product} = ${quantity}
    ---
    ORDERED
    `);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart("car", 4);
ShoppingCart2.addToCart("bus", 5);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
