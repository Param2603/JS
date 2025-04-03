// Q-1 Print the sum of those numbers that are divisible by 2 or 5 between a range of 1 and 15.

let sum = 0
for (let i = 1; i <= 15; i++) {
    if (i % 2 == 0 || i % 5 == 0) {
        sum = sum + i;
    }       
}
console.log(sum)

// Q-2 Write a for loop to print the multiplication table of a given number up to 10. For example, for the number 3, it should print: 

let num = 3
for (let i = 1; i <= 10; i++) {
    console.log(num + "x" + i + "=" + num * i)
}

// Q-3 Use a for loop to create the following pattern: output
// *
// **
// *** 
// ****   
// ***** 

for (let i = 1; i <= 5; i++) {
    let pattern = ""
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}


// Q-4 Detect Perfect Numbers A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding the number itself). Write a program using a for loop to check if a given number is a perfect number. // Input: number = 28 

let number = 28;
let sum1 = 0;
for (let i = 1; i < number; i++) {
    if (number % i === 0) {
        sum1 += i;
    }
}
if (sum1 == number) {
    console.log(number + " is a perfect number.");
} else {
    console.log(number + " is not a perfect number.");
}

// Pattern questions                                                          

// Q-1 *****
//     *   *
//     *   *
//     *   *
//     *****   

let n = 5;
for (let i = 1; i <= n; i++) {
  let str = "";
  for (let j = 1; j <= n; j++) {
    if (i == 1 || i == n || j == 1 || j == n) {
      str += "*";
    } else {
      str += " ";
    }
  }
  console.log(str);
}

// Q-2  *   *
//       * *
//        *   
//       * *
//      *   *

// let n1 = 5;

// for (let i = 1; i <= n1; i++) {
//     let str = ""
//     for (let j = 1; j <= n1; j++) {
//         if (i == 1 || i == n1 || j == 1 || j == n1) {
//             str += "*"
//         } else (
//             str += " "
//         )
//     }
//     console.log(str)
// }