// how to clone array 

// how to concatenate two arrays

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1,["item3", "item4"]);


// above, concat takes two arrays one empty another full and cerates a new array that has values of both the arrays



The spread operator in JavaScript, denoted by three dots (...), is a versatile tool for expanding iterables (like arrays, objects, and strings) into individual elements in various contexts. Here's a breakdown of its uses:

ekek element nuikal ke wityh commas separte kar deta hain
// new way 
// spread operator
let oneMoreArray = ["item3", "item4"]
let array2 = [...array1, ...oneMoreArray];

array1.push("item3");

console.log(array1===array2);
console.log(array1)
console.log(array2)
