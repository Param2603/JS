// For Loop Question

// Q-1 Write a JavaScript program using a for loop that prints all even numbers from 1 to 50.
let even = document.querySelector('#even');
for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        even.innerHTML += i + ",";
    }
}

// Q-2 Write a JavaScript program using a for loop that prints the multiplication table for the number 5 (from 1 to 10).

let table = document.querySelector('#table');
let number = 5

for (let j = 1; j <= 10; j++) {
    table.innerHTML += number + " x " + j + " = " + (number * j) + "<br>";
}

// Q-3 Using a for loop, create a program that calculates the factorial of a given positive integer n.    

let factorial = document.querySelector('#factorial');
let n = 3;

let result = 1;

for (let i = 1; i <= n; i++) {
    result *= i;
}

factorial.innerHTML =" The Factorial of " +  n  +  " = " + result;

// Q-4 Write a JavaScript program that uses a for loop to print numbers from 1 to 100, but for multiples of 3, print “Fizz” instead of the number, and for multiples of 5, print “Buzz.”

let num = document.querySelector('#num')
for (let i=1; i<=100; i++){
   console.log(i)
}
num.innerHTML += i 

