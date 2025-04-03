// 1. For Loop and Array
// Write a for loop to iterate over an array of numbers [1, 2, 3, 4, 5] and print each number to the console.

array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 2. While Loop and Array
// Write a while loop to print all the elements of the array [10, 20, 30, 40, 50] to the console.

array1 = [10, 20, 30, 40, 50]
let i = 0;
while (i < array1.length) {
  console.log(array1[i])
  i++
}

// 3. String Length
// Given a string let str = "Hello, World!";, use a for loop to find and print the length of the string.

let str = "Hello, World!";
let count = 0;
for (let i = 0; i < str.length; i++) {
  count++;
}
console.log("Length of the string: ", count)

// 4. String Characters
// Use a for loop to print each character of the string "JavaScript" one by one.

let str1 = "JavaScript";
for (let i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}


// 5. Sum of Array Elements
// Write a for loop to calculate and print the sum of the elements in the array [1, 2, 3, 4, 5].

let array2 = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < array2.length; i++) {
  sum += array2[i];
}
console.log("Sum of array elements: ", sum)

// 6. Find Maximum in Array
// Given an array [3, 1, 4, 1, 5, 9], use a for loop to find and print the maximum value.

let array3 = [3, 1, 4, 1, 5, 9];
let max = 0;
for (let i = 0; i < array3.length; i++) {
  if (array3[i] > max) {
    max = array3[i];
  }
}
console.log("Maximum value in the array: ", max);

// 7. Array Reversal
// Write a for loop to reverse the array [1, 2, 3, 4, 5] and print the reversed array.

let array4 = [1, 2, 3, 4, 5];
let reversedArray = [];
for (let i = array4.length - 1; i >= 0; i--) {
  reversedArray[reversedArray.length] = array4[i];
}
console.log("Reversed array: ", reversedArray);

// 8. String to Uppercase
// Given a string let greeting = "hello"; use a for loop to convert each character to uppercase and print the result.

let greeting = "hello";
for (let i = 0; i < greeting.length; i++) {
  console.log(greeting[i].toUpperCase());
}

// 9. Counting Elements
// Write a while loop to count the number of elements in the array [2, 4, 6, 8, 10] and print the count.

let arr = [2, 4, 6, 8, 10];
let count1 = 0
while (count1 < arr.length) {
  count1++
}
console.log("Number of elements in the array: ", count1);

// 10. Find Even Numbers
// Given an array [1, 2, 3, 4, 5, 6], use a for loop to print only the even numbers.

let array5 = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < array5.length; i++) {
  if (array5[i] % 2 == 0) {
    console.log(array5[i]);
  }
}

// 11. Array Length
// Write a while loop to find and print the length of the array [5, 10, 15].

let array6 = [5, 10, 15];
let a = 1;
while (i < array6.length) {
  console.log(array6[i]);
  a++;
}
console.log("Length of the array: ", a);

// 12. Sum of String Lengths
// Given an array of strings ["apple", "banana", "cherry"], use a for loop to calculate and print the total length of all strings combined.

let string = ["apple", "banana", "cherry"]
let sumOfString = 0;
for (let i = 0; i < string.length; i++) {
  sumOfString += string[i].length;
  console.log("Length of string " + i + ": " + string[i].length);
}

// 13. Concatenate Strings
// Given an array of strings ["This", "is", "JavaScript"], use a for loop to concatenate them into one string and print it.

let str2 = ["This", "is", "JavaScript"]
let concatenatedStrings = ""
for (let i = 0; i < str2.length; i++) {
  concatenatedStrings += str2[i]
}
console.log("Concatenated Strings: " + concatenatedStrings)

// 14. Find String Index
// Write a for loop to find and print the index of the character 'a' in the string "JavaScript".

let string3 = "JavaScript"
for (let i = 0; i < string3.length; i++) {
  if (string3[i] == 'a') {
    console.log("Index of 'a': " + i);
  }
}

// 15. Count Vowels in String
// Write a for loop to count the number of vowels in the string "Hello, World!" and print the count.

let str3 = "Hello, World!"
let vowelcount = 0
for (let i = 0; i < str3.length; i++) {
  if (str3[i] == 'a' || str3[i] == 'e' || str3[i] == 'i' || str3[i] == 'o' || str3[i] == 'u') {
    vowelcount++;
    console.log("Vowel found : " + i);
  }
} 