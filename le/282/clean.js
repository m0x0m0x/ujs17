/*
https://github.com/jonasschmedtmann/complete-javascript-course/blob/master/17-Modern-JS-Modules-Tooling/starter/clean.js
- cleanthis pussy
*/

console.log(
  `
%c---
FuckedUpCode - Clearn shit below
---
`,
  "color:red;font-size:14px"
);

var budget = [
  { value: 250, description: "Sold old TV 📺", user: "gina" },
  { value: -45, description: "Groceries 🥑", user: "gina" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "gina" },
  { value: 300, description: "Freelancing 👩‍💻", user: "gina" },
  { value: -1100, description: "New iPhone 📱", user: "gina" },
  { value: -20, description: "Candy 🍭", user: "licq" },
  { value: -125, description: "Toys 🚂", user: "licq" },
  { value: -1800, description: "New Laptop 💻", user: "gina" },
];

var limits = {
  gina: 1500,
  licq: 100,
};

// Expenses function
var add = function (value, description, user) {
  if (!user) user = "gina";
  user = user.toLowerCase();

  var lim;
  if (limits[user]) {
    lim = limits[user];
  } else {
    lim = 0;
  }

  if (value <= lim) {
    budget.push({ value: -value, description: description, user: user });
  }
};
add(10, "Pizza 🍕");
add(100, "Going to movies 🍿", "Matilda");
add(200, "Stuff", "Jay");
console.log(budget);

var check = function () {
  for (var el of budget) {
    var lim;
    if (limits[el.user]) {
      lim = limits[el.user];
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

var bigExpenses = function (limit) {
  var output = "";
  for (var el of budget) {
    if (el.value <= -limit) {
      output += el.description.slice(-2) + " / "; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(
  `
%c---
----------------
----------------
----------------
---
`,
  "color:red;font-size:14px"
);
