// Adding elements through - Push,unshift
const hobbies = ["dancing", "playing"];
hobbies.push("singing"); // adds in last
hobbies.unshift("coding"); // adds in starting
console.log(hobbies);

// ===========================================
// Removing elements through - pop, shift

const fruits = ["apple", "mango", "grapes"];
fruits.pop(); // removes last element of the array
fruits.shift(); // removes first element of the array
console.log(fruits);

fruits[1] = "guava"; //adding element on first index
fruits[6] = "banana"; // it's length will be seven and on sixth index we'll have banana
console.log(fruits);
