// Ye program ek string ko console me print karta hai.?
let name = "Hello Gaurav";
console.log(name);

// Ye program string ki total length (kitne characters hain) batata hai.

let text = "JavaScript";
console.log(text.length);

// Ye program string ke specific position ka character dikhata hai.

let word = "Hello";
console.log(word[0]);  // First character
console.log(word[4]);  // Last character


// Ye program string ko capital ya small letters me convert karta hai.


let str = "javascript";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Ye program check karta hai ki koi word string ke andar hai ya nahi.

let sentence = "I love coding";
console.log(sentence.includes("love"));

// Ye program string ke ek word ko dusre word se replace karta hai.
let text1 = "Hello World";
console.log(text1.replace("World", "JavaScript"));

// Ye program string ka ek hissa (part) nikalta hai.

let data = "Programming";
console.log(data.slice(0, 6));
console.log(data.slice(-3));

// Ye program comma ke basis par string ko array me tod deta hai.

let fruits = "apple,banana,mango";
let arr = fruits.split(",");
console.log(arr);

// Ye program comma ke basis par string ko array me tod deta hai.

let fruits1 = "apple,banana,mango";
let arr1 = fruits1.split(",");
console.log(arr1);

// Ye program string ke start aur end ke extra spaces remove karta hai.


let input = "   hello   ";
console.log(input.trim());
