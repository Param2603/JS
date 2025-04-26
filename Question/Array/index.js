//  Q - 1  Calculate Total Expenses:
// A family wants to calculate their weekly expenses. They spent ₹200, ₹150, ₹100, ₹350, and ₹50 over five days. Write a function to calculate the total expense.

function totalSpent(total) {
    return total
}

let totalExpance = [200, 150, 100, 350, 50]
let total = 0

let totalExpance2 = totalExpance.map((num) => {
    total += num
})
console.log("Q - 1  : Output")
console.log("the total expance of family over week = ", total)

// Q-2  Find the Highest Temperature:
// A weather app shows the temperatures recorded in a city over 7 days as [32, 35, 30, 31, 33, 36, 34]. Write a function to find the highest temperature in the array.

function findHighTemp(temp) {
    return Math.max(...temp)
}

let temp = [32, 35, 30, 31, 33, 36, 34]

let tempHigh = findHighTemp(temp);
// for(let i=0;i<temp.length;i++){
//     if(temp [i+1] > temp [i]){
//       tempHigh = temp[i+1]
//     }
// }
console.log("Q - 2  : output")
console.log("The highest temperature over 7 day is", tempHigh)

//  Q - 3 Find the Lowest Test Score:
//  A student got test scores of [56, 72, 48, 90, 65]. Write a function to find the lowest score.

function findLowScore(score) {
    return Math.min(...score)
}

let score = [56, 72, 48, 90, 65]

let lowScore = findLowScore(score);

console.log("Q - 3  : output")
console.log("The lowest score student got", lowScore)

// Q - 4 In a company, the monthly salaries of 5 employees are [45000, 55000, 30000, 70000, 60000]. Write a function to calculate the average salary.

function monthlySalary(totalSalary) {
    return totalSalary
}

let salaryOfEmployee = [45000, 55000, 30000, 70000, 60000]
let totalSalary = 0


let monthlySalary1 = salaryOfEmployee.map((num) => {
    totalSalary += num
})
console.log("Q - 4  : Output")

let i = salaryOfEmployee.length

let salary = totalSalary / i
console.log("The Average salary of 5 employee", salary)

// Q-5 Reverse the Guest List:
// You have a list of guests for a party: ["John", "Aman", "Rita", "Raj"]. Write a function to reverse the guest list.

function reversedArr() {
    return reversedArr
}
let arr = ["John", "Aman", "Rita", "Raj"];
let reversedArr1 = []

for (let i = arr.length - 1; i >= 0; i--) {

    reversedArr1[reversedArr1.length] = arr[i];
}
console.log("Q -5 : output")
console.log("Rverse guest list", reversedArr1);

// Q -6 Check for Available Seats:
// A movie theater has an array of available seat numbers: [3, 5, 7, 9, 12]. Write a function to check if seat number 7 is available.

function seatAvailable(available) {
    return available
}

let seatNo = [3, 5, 7, 9, 12]

let seat = 14

let available = seatNo.includes(seat)

console.log("Q - 6  : output")
console.log("The seat available in theater than true otherwise false : ", available)


// Q -7 Remove the First Task:
// You have a to-do list: ["Buy groceries", "Clean room", "Study"]. Write a function to remove the first task from the list and return the updated list.

function toDoList(remove) {
    return remove
}

let toDoList1 = ["Buy groceries", "Clean room", "Study"]
let removeList = "Buy groceries"
console.log("Q - 7 : output")
console.log("Before update", toDoList1)
let remove = toDoList1.shift(removeList)

console.log("After upadeted to do List", toDoList1)


// Q -8  Remove Duplicate Phone Numbers:
// A phone company wants to remove duplicate phone numbers from an array: [9876543210, 9123456789, 9876543210, 9000000000]. Write a function to remove duplicates.

let phone = [9876543210, 9123456789, 9876543210, 9000000000]

function removeDuplicate(arr) {
    return arr
}

for (let i = 0; i < phone.length; i++) {
    for (let j = i + 1; j < phone.length; j++) {
          if (phone[i] === phone[j]) {
                phone.splice(j, 1)
                j--
          }
    }
}
console.log("Q - 8 : output")
console.log("After remove duplicate number from company list", phone)

// Q - 9 Find Second Largest Sale Amount:
// A shop recorded sales amounts: [200, 400, 100, 700, 500]. Write a function to find the second-largest sale.


let array2 = [200, 400, 100, 700, 500]
let secondLargest = []

array2.sort((a, b) => b - a)

secondLargest = array2[1]

console.log("Q - 9 : output")
console.log("The second largest sale amount is", secondLargest)

// Q - 10    Get the Last Product Sold:
// A store records product sales as ["Shoes", "T-shirt", "Hat"]. Write a function to get the last product sold.

let product = ["Shoes", "T-shirt", "Hat"]
let lastProduct = product.map((productLast) => {
    productLast = product[product.length - 1]
    return productLast
})

console.log("Q - 10 : output")
console.log("The last product sold is", lastProduct[0])

// Q - 11   Check if Shopping Cart is Empty:
// Write a function to check if the shopping cart array cart = [] is empty.

let shoppingCart = []
function checkEmpty(shoppingCart) {


    if (shoppingCart.length == 0) {
          console.log("Q - 12 : output")
          console.log("Shopping cart is empty")

    }
    else {
          console.log("Q - 12 : output")
          console.log("Shopping cart is not empty")

    }

    return shoppingCart.length

}
console.log(checkEmpty(shoppingCart))

// Q - 12 Count Occurrences of an Item:
// A library has multiple copies of books in its inventory: ["Book A", "Book B", "Book A", "Book C", "Book A"]. Write a function to count how many times "Book A" appears.

let bookInventory = ["Book A", "Book B", "Book A", "Book C", "Book A"]

let bookA = "Book A"
let count = 0

for (let i = 0; i < bookInventory.length; i++) {
    if (bookInventory[i] == bookA) {
          count++
    }
}

console.log("Q - 12 : output")
console.log("the Book A Appers in its inventory = ", count)

// Q - 13 Merge Two Student Lists:
// Two classes have student lists: ["Rahul", "Neha"] and ["Aman", "Priya"]. Write a function to merge both lists.

let class1 = ["Rahul", "Neha"]

let class2 = ["Aman", "Priya"]

let classMerge = class1.concat(class2)

console.log("Q - 13 : output")
console.log("The merged list of student from both classes = ", classMerge)

// Q -14 Find the Position of a Movie:
// A list of movies is ["Inception", "Avatar", "Titanic"]. Write a function to find the position of "Avatar" in the list.

let movies = ["Inception", "Avatar", "Titanic"]

let movie = "Avatar"

let position = movies.indexOf(movie)

console.log("Q -14 : output")
console.log("The position of Avatar in the list = ", position)

// Q -15 Multiply All Prices by Discount:
// A store wants to apply a 10% discount to all prices: [1000, 2000, 1500, 2500]. Write a function to return new prices after applying the discount.

let prices = [1000, 2000, 1500, 2500]

let num1 = 0.9

let prices1 = prices.map((num) => num * num1)

console.log("Q -15 : output")
console.log("The new prices after applying discount = ", prices1)

// Q -16  Sort Scores in Descending Order:
// A sports team scored [10, 50, 30, 20]. Write a function to sort these scores in descending order without using .sort().

let scores = [10, 50, 30, 20]

let scores1 = []

for (let i = 0; i < scores.length; i++) {
    let max = scores[i]
    let maxIndex = i
    for (let j = i + 1; j < scores.length; j++) {
          if (scores[j] > max) {
                max = scores[j]
                maxIndex = j
          }
    }
    scores1[i] = scores[maxIndex]
    scores[maxIndex] = scores[i]
}

console.log("Q -16 : output")
console.log("The sorted scores in descending order = ", scores1)

// Q - 17 Split Attendees into Groups:
// An event has 10 attendees: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]. Write a function to split them into groups of 3.

let attendees = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]

let groups = attendees.slice(0,2)
let groupe1 = attendees.slice(2,6)
let groupe2 = attendees.slice(6,10)


console.log("Q - 17 : output")
console.log("the first group is : ",groups)
console.log("the second group is :",groupe1)
console.log("the third group is :",groupe2)



// Q - 18 Rotate the Line of Cars:
//        A parking lot has cars in a line: ["Car1", "Car2", "Car3", "Car4"]. Write a function to rotate the cars so "Car4" comes to the front.


let cars = ["Car1", "Car2", "Car3", "Car4"]

let lastCar = cars.pop()


cars.unshift("Car4")
console.log("Q -18 : output")

console.log("the new line of cars is : ", cars)


// Q - 19  Remove Unwanted Values from the List:
//         A form received some invalid values: [0, "A", "", null, "B", undefined]. Write a function to remove all falsey values (like 0, null, undefined) from the list.


let formValues = [0, "A", "", null, "B", undefined]
let values = [0,null,undefined]
// method -- 1
// let validValues = formValues.filter((value) => Boolean(value))
// method -- 2
let newValue = formValues.filter((value)=>{
    for(let i=0;i<formValues.length;i++){
          if(formValues[i]==values[0]){
                return value
          }
    }
})

console.log("Q - 19 : output")
console.log("the valid values from the form are : ",newValue)