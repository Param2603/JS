// Q-1 
let radius = 7
let Area = 3.14 * radius * radius
console.log("Area of circle is = " + Area)

// Q-2 
let a = 10;
let b = 20;
let c = 5;
let result = (a * b) / c + (b - a);
console.log('The result is:', result);

// Q-3
let x = 5;
let y = 10;
x += 2;
y *= x;
console.log('New values of x and y:', x, y);

// Q-4 
let num = 10

num += 15
console.log(num)

num -= 5
console.log(num)

num *= 3
console.log(num)

num /= 2
console.log(num)

// Q-5
var score1 = 85
var score2 = 90
console.log(score1 > 80)
console.log(score2 > 80)
console.log("Both score are grater than 80")

// Q-6
let str1 = "apple";
let str2 = "banana";
console.log(str1 < str2);

// Q-8
let number1 = 25;
if ((number1 >= 10 && number1 <= 50) || number1 % 5 === 0) {
    console.log("Number is between 10 and 50 (inclusive) or a multiple of 5");
} else {
    console.log("Number is not between 10 and 50 (inclusive) and not a multiple of 5");
}

// Q-9
let string1 = "123.45"
console.log("type of string = " + typeof (string1))

let resultNum = Number(string1)
console.log("type of string = " + typeof (resultNum))

resultNum += 10
console.log(resultNum)

// Q-10
let boolean = true
console.log("type of = " + typeof (boolean))

let resutlBoolean = String(boolean)
console.log("type of = " + typeof (resutlBoolean))

console.log(resutlBoolean + string2)

// Q-13 
let number = 10;
if (number > 0) {
    console.log("The number is positive");
}
if (number < 0) {
    console.log("The number is negative");
}

// Q-14
let temperature = 30
if (temperature > 25) {
    console.log("It's hot day outside")
}
if (temperature < 25) {
    console.log("It's not hot day outside")
}

// Q-15 
let num1 = 10
if (num > 0) {
    console.log("Number is positive")
} else if (num < 0) {
    console.log("Number is negative")
} else {
    console.log("Number is zero")
}

// Q-16
let grade = 80
if (grade >= 90) {
    console.log("Grade is A")
}
if (grade >= 80 && grade < 89) {
    console.log("Grade is B")
}
if (grade >= 70 && grade < 79) {
    console.log("Grade is C")
}
if (grade < 70) {
    console.log("Grade is D")
}

// Q-17 
let num4 = 60
if (num4 > 10 && num4 % 2 == 0) {
    console.log(num4 + "is even and grater than 10")
}
else {
    console.log(num4 + "number does not match criteria")
}

// Q-19
let num2 = 8
let num3 = 3
num2 += 1
if (num2 % num3 === 0) {
    console.log(num2 + " is a multiple of " + num3)
} else {
    console.log(num2 + " is not a multiple of " + num3)
}

// Q-20 
let age1 = 65;
if (age1 < 18 || age2 > 60) {
    console.log("Not eligible")
} else {
    console.log("Eligible")
}