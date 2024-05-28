/*
282 - Cleaning messy code
This is going to eb the work for cleaning the code in clean.js
*/

// Importing text.js
import * as TE from "../../UTILS/text.js";
//

TE.mainHead("282 - Cleaning messy code");

////////////////// work

/*
https://github.com/jonasschmedtmann/complete-javascript-course/blob/master/17-Modern-JS-Modules-Tooling/starter/clean.js
- cleanthis pussy
*/

const budget = [
  { value: 250, description: "Sold old TV 📺", user: "gina" },
  { value: -45, description: "Groceries 🥑", user: "gina" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "gina" },
  { value: 300, description: "Freelancing 👩‍💻", user: "gina" },
  { value: -1100, description: "New iPhone 📱", user: "gina" },
  { value: -20, description: "Candy 🍭", user: "licq" },
  { value: -125, description: "Toys 🚂", user: "licq" },
  { value: -1800, description: "New Laptop 💻", user: "gina" },
];

const spendingLimits = {
  gina: 1500,
  licq: 100,
};

// Expenses function
const addExpense = function (value, description, user) {
  if (!user) user = "gina";
  user = user.toLowerCase();

  let lim;
  if (spendingLimits[user]) {
    lim = spendingLimits[user];
  } else {
    lim = 0;
  }

  if (value <= lim) {
    budget.push({ value: -value, description: description, user: user });
  }
};
addExpense(10, "Pizza 🍕");
addExpense(100, "Going to movies 🍿", "Matilda");
addExpense(200, "Stuff", "Jay");
console.log(budget);

const check = function () {
  for (const el of budget) {
    let lim;
    if (spendingLimits[el.user]) {
      lim = spendingLimits[el.user];
    } else {
      lim = 0;
    }

    if (el.value < -lim) {
      el.flag = "limit";
    }
  }
};
check();

console.log(budget);

const bigExpenses = function (limit) {
  let output = "";
  for (const el of budget) {
    if (el.value <= -limit) {
      output += el.description.slice(-2) + " / "; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
bigExpenses(1000);
