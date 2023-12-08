// most common way
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
// ============================================
// another way of creating an array
const moreNumbers = new Array(); // [] //this is constructor function, const moreNumbers = Array() both works same
console.log(moreNumbers);

const moreOrNumbers = new Array("hello", "world");
console.log(moreOrNumbers);

const moreNumber = new Array(6); // this will give empty*6 means it is empty but it's length is 6
console.log(moreNumber);
// =============================================
//another way
const yetMoreNumbers = Array.of(3, 4, 6); // performance wise this is slow
console.log(yetMoreNumbers);
// =============================================
//another way
const someNumbers = Array.from("hello"); // it will comma seperate all the characters
console.log(someNumbers);

const listItems = document.querySelectorAll("li");
console.log(listItems); // it will give us the nodelist

const arrayListItems = Array.from(listItems);
console.log(arrayListItems); // it will give us the array
// ===========================================

const hobbies = ["sports", "reading"];
const person = ["muskan", 22, { moreDetails: [] }]; // can store multiple types of data in an array like object.
// =========================================

// multi-dimensionals arrays

const analyticsData = [
  [1, 2, 3],
  [1.3, 2.4, 5],
]; // each element is in array is another array

for (const data of analyticsData) {
  for (const moreData of data) {
    console.log(moreData);
  }
}

// arrays are index based
console.log(person[1]);
