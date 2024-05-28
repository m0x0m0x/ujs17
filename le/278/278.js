/*
278 - Intro to NPM 
- For this we installed lodash - 
npm i lodash-es
- Those functions will now be impored
*/

// Import lodash
/*
clondeep - for copying nested objects
*/
import cloneDeep from "../../node_modules/lodash-es/cloneDeep.js";

const state = {
  cart: [
    { product: "bus", quantity: 10 },
    { product: "car", quantity: 5 },
  ],
  user: {
    loggedIn: true,
  },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);
