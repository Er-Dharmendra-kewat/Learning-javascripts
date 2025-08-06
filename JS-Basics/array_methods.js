// 1.shift()-> it removes the first eleement of the array and shift all other element to the lower index that is left side
//const fruits = ["Banana","Orange","Apple","Mango"];
// fruits.shift();  
// console.log(fruits);

// 2. unshift()-> This method adds a new element to an array (at the beginning), and "unshifts" older elements:
//const fruits = ["Banana","Orange","Apple","Mango"];
// fruits.unshift("Lemon") 
// console.log(fruits);


// 3. Using delete() leaves undefined holes in the array so Use pop() or shift() instead.

// const fruits = ["Banana","Orange","Apple","Mango"];
// delete fruits[0];
// console.log(fruits);


// 4. concat() array

// const fruits = ["Banana","Orange","Apple","Mango"];
// const dryFruits = ["Almond","Oats","Peanuts","Dates","cashew"]
// const myFruits = fruits.concat(dryFruits)
// console.log(myFruits);


// 6. includes()-> it checks the specific array element or string is present inside the array or not and return true or false

// let message = "Hello, world!";
// console.log(message.includes("world")); // true
// console.log(message.includes("World")); // false (case-sensitive)


// 5. splice()

// let fruits = ["Apple", "Banana", "Mango"];
// fruits.splice(2, 2, "Grapes");
// console.log(fruits);  // ["Apple", "Grapes", "Mango"]
