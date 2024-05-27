// 274: Top level Await Function - Causes complete module block

// Import zone
import * as TE from "../../UTILS/text.js";
//

// Import for this excercise
import add, { cart } from "../273/shoppingCart.js";

// using fake data

TE.mainHead("274 - Top Level Await");

//
// console.log("Start Fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);

// Extracting data from this array
// console.log(data[0].body);
// console.log("END");

TE.subHead("Real Work Exaple");

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return { title: data.at(-1).title, text: data.at(-1).body };
};
const lastPost = getLastPost();
console.log(lastPost);

// Not clean method
// lastPost.then((last) => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
