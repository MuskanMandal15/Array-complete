// splice method
const hobbies = ["singing", "writing", "dancing", "playing"];
hobbies.splice(0, 3, "wathcingTV"); //index where we want to place new element, how many elements we want to delete, element that we want to add
console.log(hobbies);

hobbies.splice(0, 1); //index, delete
console.log(hobbies);
