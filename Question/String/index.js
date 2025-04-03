// String Questions

// /Q-19 Count Vowels in a Name:
// A user enters their name "Rahul". Write a function to count how many vowels are in the name.
// Hint: Check for vowels (a, e, i, o, u)

let str = "Rahul"
let vowels = ["a", "e", "i", "o", "u"]
let count = 0;
for (let i = 0; i <= str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {

        if (str[i] === vowels[j]) {
            count++;
        }
    }
}
console.log(count)

// Q-20 Reverse a Product Code:
// A company has a product code "AB1234". Write a function to reverse this code.
// Hint: Convert to array, reverse, and join.

let str2 = "AB1234"
str2 = str2.split(" ")
console.log (str2)


// Q-21 Check if a Name is a Palindrome:
// A child enters the name "radar" into a game. Write a function to check if the name is a palindrome (same forwards and backwards).
// Hint: Compare string to its reverse

let str3 = "radar"
let reversed = str3.split("").reverse().join("")
if (str3 === reversed) {
    console.log("Palindrome")
} else {
    console.log("Not Palindrome")
}



// Q-22 Remove Spaces from a Message:
// A user enters a message "Hello World 2024". Write a function to remove all spaces from the message.
// Hint: Use .replace()  or .split() and .join()

let str4 = "Hello World 2024"
str4 = str4.split(" ")
console.log (str4)
let str6 = str4
str6 =  str6.join("")
console.log (str6)

// Q-23 Convert a Sentence to Words:
// A sentence "JavaScript is fun" is given. Write a function to convert the sentence into an array of words.
// Hint: Use .split() with a space

let str5 = "JavaScript is fun"
let words = str5.split(" ")
console.log(words)